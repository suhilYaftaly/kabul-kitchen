import { Stack } from "@mui/material";
import Intro from "./Intro";
import MenuSection from "./MenuSection";
import { drinks, mainDishes } from "@menu/menu";

export default function DashboardScreen() {
  return (
    <Stack sx={{ mx: 2, my: 1 }}>
      <Intro />
      <MenuSection menu={mainDishes} title="Main Dishes" />
      <MenuSection menu={drinks} title="Drinks" />
    </Stack>
  );
}
