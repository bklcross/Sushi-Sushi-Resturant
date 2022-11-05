import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { data } from "../data/data";
import { ActionAreaCard } from "./ActionAreaCard";
import bakedRoll from "../img/bakedRoll.png";
import deepFriedRoll from "../img/deepFriedRoll.png";
import soyPaperRoll from "../img/soyPaperRoll.png";
import tempuraRoll from "../img/tempuraRoll.png";
import vegetarianRoll from "../img/vegetarianRoll.png";
import handRoll from "../img/handRoll.png";

export const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("tempura_roll");

  const renderMenuItems = () => {
    const targetMenu = data[selectedMenu];

    let result = targetMenu.map((menuItem) => (
      <ActionAreaCard menuItem={menuItem} />
    ));

    return result;
  };

  return (
    <Box mt={5} sx={{ display: "flex"}}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>{renderMenuItems()}</Box>
    </Box>
  );
};
