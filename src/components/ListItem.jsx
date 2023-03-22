import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import spicyIcon from "../img/spicy.png";

export const ListItem = ({ menuItem }) => {
  const { name, inside, outside, sauce, url, spicy, price } = menuItem;

  const renderSpicy = () => {
    let result = null;

    if (spicy) {
      result = <img height="20" src={spicyIcon} />;
    }

    return result;
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography mr={1} variant="h5" component="div">
            {name}
          </Typography>
          {renderSpicy()}
        </Box>
        <Box>
          <Typography variant="h6" color="text.secondary">
            {typeof price === "number" ? `$${price.toFixed(2)}` : price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
