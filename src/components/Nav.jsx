import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from "@mui/material";
import logo from "../img/logo.png";

export const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}
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
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Menu</Button>
          <Button color="inherit">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
