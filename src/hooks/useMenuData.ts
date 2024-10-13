import { useEffect, useState } from "react";

// Google Sheets URL
const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFYN2snGEBjGHqP4XYKtwjj-UegBBEhAzwtSvuOC55Uonl0k7hRvdgbsxWWEi9q8cwQ4uc6O-4Nex2/pubhtml";

export interface MenuItem {
  section: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}
interface MenuSection {
  section: string;
  items: MenuItem[];
}

export default function useMenuData() {
  const [menuSections, setMenuSections] = useState<MenuSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        setLoading(true);

        const response = await fetch(GOOGLE_SHEET_URL);
        const html = await response.text(); // Fetch HTML as text

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Find the table and rows within the document
        const table = doc.querySelector("table");
        const rows = table?.querySelectorAll("tr");

        if (!rows) throw new Error("No data found in the sheet");

        const items: MenuItem[] = [];
        rows.forEach((row, index) => {
          if (index === 0) return; // Skip header row

          const cells = row.querySelectorAll("td");
          if (cells.length >= 4) {
            const item: MenuItem = {
              section: cells[0].innerText,
              name: cells[1].innerText,
              price: Number(cells[2].innerText),
              description: cells[3].innerText,
              imageUrl: cells[4].innerText,
            };
            items.push(item);
          }
        });

        // Group items by section
        const sectionsMap: Record<string, MenuItem[]> = {};
        items.forEach((item, index) => {
          if (index === 0) return; // Skip header row
          const sectionName = item.section;
          if (!sectionsMap[sectionName]) {
            sectionsMap[sectionName] = [];
          }
          sectionsMap[sectionName].push(item);
        });

        // Convert sectionsMap to an array of sections with items
        const structuredMenu: MenuSection[] = Object.keys(sectionsMap).map(
          (sectionName) => ({
            section: sectionName,
            items: sectionsMap[sectionName],
          })
        );

        setMenuSections(structuredMenu);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchSheetData();
  }, []);

  return { menuSections, loading, error };
}
