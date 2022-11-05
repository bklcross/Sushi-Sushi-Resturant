import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});

export default function App() {
  return (
    <Box className="App" theme={theme}>
      <Nav />
      <Hero />
      <Menu />
      <Footer />
    </Box>
  );
}
