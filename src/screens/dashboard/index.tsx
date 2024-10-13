import { Stack } from "@mui/material";
import Intro from "./Intro";
import MenuSection from "./MenuSection";
import useMenuData from "@hooks/useMenuData";

export default function DashboardScreen() {
  const { menuSections } = useMenuData();

  return (
    <Stack sx={{ mx: 2, my: 1 }}>
      <Intro />
      {menuSections?.map((section) => (
        <MenuSection
          key={section.section}
          menu={section.items}
          title={section.section}
        />
      ))}
    </Stack>
  );
}
