import { AppBar,Box,Link } from "@mui/material";
import Logo from '../img/logo.jpeg';

const styles = {
  logo: {
    height: 100,
  },
  link: {
    color: "red"
  }
};

const NavBar = () => {

  return (
    <AppBar>
      <img style={styles.logo} src={Logo} alt="logo" />
      <Box>
        <Link style={styles.link} variant={"button"} href="####">
          Sushi Menu
        </Link>
        <Link style={styles.link}  variant={"button"} href="####">
          Reviews
        </Link>
      </Box>
    </AppBar>
  );
};

export default NavBar;
