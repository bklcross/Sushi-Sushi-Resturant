import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { data } from "../data/data";
import { ActionAreaCard } from "./ActionAreaCard";
import { ListItem } from "./ListItem";
import bakedRoll from "../img/bakedRoll.png";
import deepFriedRoll from "../img/deepFriedRoll.png";
import soyPaperRoll from "../img/soyPaperRoll.png";
import tempuraRoll from "../img/tempuraRoll.png";
import vegetarianRoll from "../img/vegetarianRoll.png";
import handRoll from "../img/handRoll.png";
import specialRoll from "../img/specialRoll.png";
import dessert from "../img/dessert.png";
import beverage from "../img/beverage.png";
import beer from "../img/beer.png";
import wine from "../img/wine.png";
import soju from "../img/soju.png";
import sake from "../img/sake.png";
import chickenWing from "../img/chicken-wing.svg";
import appetizer from "../img/appetizer.png";
import kidsMenu from "../img/kidsMenu.png";
import dinnerEntree from "../img/dinnerEntree.png";
import dinnerSushiBar from "../img/dinnerSushiBar.png";
import dinnerBoxSpecial from "../img/dinnerBoxSpecial.png";
import side from "../img/side.png";
import noodleSoup from "../img/noodleSoup.png";
import stirFryNoodle from "../img/stirFryNoodle.png";
import sushiSashimiPlate from "../img/sushiSashimiPlate.png";
import salad from "../img/salad.png";

export const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("tempura_roll");

  const renderProductMessage = () => {
    let result = null;
    let message = null;

    switch (selectedMenu) {
      case "kids_menu":
        message = ["Kids Meal Miso Soup Included"];
        break;
      case "main_entree":
        message = ["served with miso soup, house salad and steamed rice"];
        break;
      case "sushi_bar":
        message = ["served with miso soup, house salad"];
        break;
      case "box_special":
        message = [
          "served with miso soup, house salad,tempura,rice and one BONUS ITEM",
          "Bonus Items: California Roll, Shrimp & Avo Roll, Spicy tuna Roll, Philly Roll, Eel & Avo Roll",
        ];
        break;
      case "sushi_sashimi_plate":
        message = ["No Substitutes"];
      default:
        break;
    }

    result = (
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          margin: "16px",
          padding: "32px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" color="text.secondary">
                {selectedMenu.replaceAll("_", " ").toUpperCase()}
              </Typography>
              {message && message.length > 0
                ? message.map((str) => (
                    <Typography variant="body2" color="text.secondary">
                      {str.toUpperCase()}
                    </Typography>
                  ))
                : null}
            </Box>
          </Box>
        </Box>
      </Box>
    );

    return result;
  };

  const renderMenuItems = () => {
    const targetMenu = data[selectedMenu];
    let result = null;

    if (selectedMenu.includes("roll")) {
      result = targetMenu.map((menuItem) => {
        return <ActionAreaCard menuItem={menuItem} />;
      });
    } else {
      result = targetMenu.map((menuItem) => {
        return <ListItem menuItem={menuItem} />;
      });
      result = (
        <Box
          sx={{
            backgroundColor: "#ffffff",
            width: "100%",
            margin: "16px",
            padding: "32px",
            borderRadius: "10px",
          }}
        >
          {result}
        </Box>
      );
    }

    return result;
  };

  const renderDisclaimerMessage = () => {
    let result = null;

    result = (
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          margin: "16px",
          padding: "32px",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" color="text.secondary">
                PLEASE ALWAYS NOTIFY THE STAFF OF ANY ALLERGIES OR DIETARY
                RESTRICTIONS BEFORE ORDERING. ALL FOOD ITEMS MAY CONTAIN SESAME
                SEEDS. MENU ITEM & PRICE ARE SUBJECT TO CHANGE WITHOUT NOTICE.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
    return result;
  };

  return (
    <Grid container p={3} sx={{ display: "flex" }} id={"menu"}>
      <Grid
        item
        xs={2}
        sx={{
          position: "sticky",
          height: "fit-content",
          top: "16px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          padding: "32px",
        }}
        className="menu-sidebar"
      >
        <Box
          sx={{
            maxHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
          }}
        >
          <Button
            onClick={() => {
              setSelectedMenu("tempura_roll");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={tempuraRoll} alt="tempura_roll" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Tempura Roll
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("deep_fried_roll");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={deepFriedRoll} alt="deep_fried_roll" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Deep Fried Roll
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("baked_roll");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={bakedRoll} alt="baked_roll" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Baked Roll
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("vegetarian_roll");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={vegetarianRoll} alt="vegetarian_roll" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Vegetarian Roll
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("soy_paper_roll");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={soyPaperRoll} alt="soy_paper_roll" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Soy Paper Roll
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("hand_roll");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={handRoll} alt="hand_roll" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Hand Roll
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("special_roll");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={specialRoll} alt="special_roll" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Special Roll
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("sushi_sashimi_plate");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img
              src={sushiSashimiPlate}
              alt="sushi_sashimi_plate"
              width={"30px"}
            />
            <Typography variant="body2" color="text.secondary">
              Sushi Sashimi Plate
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("main_entree");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={dinnerEntree} alt="dinner_entree" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Main Entree
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("sushi_bar");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={dinnerSushiBar} alt="dinner_sushi_bar" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Sushi Bar
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("box_special");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img
              src={dinnerBoxSpecial}
              alt="dinner_box_special"
              width={"30px"}
            />
            <Typography variant="body2" color="text.secondary">
              Box Special
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("noodle_soup");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={noodleSoup} alt="noodle_soup" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Noodle Soup
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("stir_fry_noodle");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={stirFryNoodle} alt="stir_fry_noodle" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Stir Fry Noodle
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("kids_menu");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={kidsMenu} alt="kids_menu" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Kids Menu
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("side");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={side} alt="side" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Side
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("appetizer");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={appetizer} alt="appetizer" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Appetizer
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("korean_chicken_wing");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={chickenWing} alt="chicken_wing" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Korean Chicken Wing
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("salad");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={salad} alt="salad" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Salad
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("dessert");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={dessert} alt="dessert" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Dessert
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("beverage");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={beverage} alt="beverage" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Beverage
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("beer");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={beer} alt="beer" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Beer
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("wine");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={wine} alt="wine" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Wine
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("soju");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={soju} alt="soju" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Soju
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setSelectedMenu("sake");
            }}
            sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
          >
            <img src={sake} alt="sake" width={"30px"} />
            <Typography variant="body2" color="text.secondary">
              Sake
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={10} className="menu-content">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {renderProductMessage()}
          {renderMenuItems()}
          {renderDisclaimerMessage()}
        </Box>
      </Grid>
    </Grid>
  );
};
