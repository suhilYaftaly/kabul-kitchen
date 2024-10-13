import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#39DB4A",
    },
    secondary: { main: "#FF6868" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "#fff",
          borderRadius: 25,
          fontWeight: "500",
        },
      },
    },
  },
});
