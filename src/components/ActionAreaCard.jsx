import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import spicyIcon from "../img/spicy.png";

export const ActionAreaCard = ({ menuItem }) => {
  const { name, inside, outside, sauce, url, spicy, price } = menuItem;

  const renderSpicy = () => {
    let result = null;

    if (spicy) {
      result = <img height="20" src={spicyIcon} />;
    }

    return result;
  };
  return (
    <Card sx={{ width: "50%" ,fontFamily: 'Poppins'}}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={url} alt={name} />
        <CardContent>
          <Box sx={{ display: "flex" }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            {renderSpicy()}
          </Box>
          <Typography variant="body2" color="text.secondary">
            Inside: {inside ? inside.join(", ") : null}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Oustside: {outside ? outside.join(", ") : null}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sauce: {sauce ? sauce.join(", ") : null}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
