import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppRouter from "./utils/AppRouter"
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
