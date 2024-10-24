import { Skeleton, Stack } from "@mui/material";
import Intro from "./Intro";
import MenuSection from "./MenuSection";
import useMenuData from "@hooks/useMenuData";

export default function DashboardScreen() {
  const { menuSections, loading } = useMenuData();

  return (
    <Stack sx={{ mx: 2, my: 2 }}>
      <Intro />
      {loading && <MenuSkeletons />}
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

const MenuSkeletons = () => (
  <Stack>
    <Skeleton variant="text" width={200} height={50} sx={{ mb: 2, mt: 5 }} />
    <Skeleton
      variant="rounded"
      width={"100%"}
      sx={{ mb: 2, height: { xs: 200, sm: 150 } }}
    />
    <Skeleton
      variant="rounded"
      width={"100%"}
      sx={{ height: { xs: 200, sm: 150 } }}
    />
  </Stack>
);
