import DashboardScreen from "@screens/dashboard";
import Header from "@components/header/Header";
import { Stack } from "@mui/material";

export default function RootLayout() {
  return (
    <Stack sx={{ maxWidth: 900, margin: "0 auto" }}>
      <Header />
      <DashboardScreen />
    </Stack>
  );
}
