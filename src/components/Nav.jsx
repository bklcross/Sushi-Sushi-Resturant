import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from "../img/logo.png";

export const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 1,
          backgroundColor: "#A50113",
        }}
        className={"nav-toolbar"}
      >
        <Box
          component="img"
          sx={{
            maxWidth: { xs: 150, md: 200 },
          }}
          alt="Logo"
          src={logo}
        />
        <Box>
          <Button href="#menu" color="inherit" sx={{ fontFamily: "Poppins" }}>
            Menu
          </Button>
          <Button
            href="tel:951-296-0006"
            color="inherit"
            sx={{ fontFamily: "Poppins" }}
          >
            Call Us (951) 296-0006
          </Button>
          {/* <Button color="inherit" sx={{ fontFamily: "Poppins" }}>
            About Us
          </Button> */}
          {/* <Button color="inherit" sx={{ fontFamily: "Poppins" }}>
            Contact Us
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
