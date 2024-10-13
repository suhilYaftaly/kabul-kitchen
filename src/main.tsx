import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./theme/muiTheme.ts";
import RootLayout from "./layout/RootLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootLayout />
    </ThemeProvider>
  </StrictMode>
);
