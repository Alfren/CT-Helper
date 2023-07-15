import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppRouter from "./utils/AppRouter";
import { SnackbarProvider } from "notistack";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: { default: "#555" },
      black: { main: "#000" },
      red: { main: "#f44336" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider preventDuplicate>
        <AppRouter />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
