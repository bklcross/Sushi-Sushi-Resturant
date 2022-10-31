import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Box, Button, IconButton } from "@mui/material";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <Box className="App">
      <Nav />
      <Hero />
      <Menu />
    </Box>
  );
}
