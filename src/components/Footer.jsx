import React from "react";
import { Box, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#625c5c1a",
        padding: "42px",
      }}
    >
      <Box sx={{ display: "flex" }} id="info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0563296815417!2d-117.151799484548!3d33.52592105272872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db7e409f272343%3A0xd704dd16b544085f!2s40573%20Margarita%20Rd%20e%2C%20Temecula%2C%20CA%2092591!5e0!3m2!1sen!2sus!4v1667689896757!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          id="maps"
        ></iframe>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            padding: "16px",
          }}
        >
          <Typography variant="h4" color="#ffffff" sx={{ textAlign: "center" }}>
            Business Hours
          </Typography>
          <Typography variant="h6" color="#ffffff" sx={{ textAlign: "left" }}>
            Monday: <i>Closed</i>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color="#ffffff" sx={{ textAlign: "left" }}>
              Tuesday:
            </Typography>
            <Box ml={1}>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>11:30 AM - 2:30 PM</i>
              </Typography>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>4:30 - 9:00 PM</i>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="h6" color="#ffffff" sx={{ textAlign: "left" }}>
              Wednesday:
            </Typography>
            <Box ml={1}>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>11:30 AM - 2:30 PM</i>
              </Typography>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>4:30 - 9:00 PM</i>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="h6" color="#ffffff" sx={{ textAlign: "left" }}>
              Thursday:
            </Typography>
            <Box ml={1}>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>11:30 AM - 2:30 PM</i>
              </Typography>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>4:30 - 9:00 PM</i>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="h6" color="#ffffff" sx={{ textAlign: "left" }}>
              Friday:
            </Typography>
            <Box ml={1}>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>11:30 AM - 2:30 PM</i>
              </Typography>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>4:30 - 9:00 PM</i>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="h6" color="#ffffff" sx={{ textAlign: "left" }}>
              Saturday:
            </Typography>
            <Box ml={1}>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>11:30 AM - 2:30 PM</i>
              </Typography>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>4:30 - 9:00 PM</i>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="h6" color="#ffffff" sx={{ textAlign: "left" }}>
              Sunday:
            </Typography>
            <Box ml={1}>
              <Typography
                variant="h6"
                color="#ffffff"
                sx={{ textAlign: "left" }}
              >
                <i>3:00 PM - 9:00 PM</i>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" color="#ffffff" mt={3}>
        40573 Margarita Rd Ste E Temecula, CA 92591
      </Typography>
      <Typography variant="body2" color="#ffffff">
        (951) 296-0006
      </Typography>
      <Typography variant="body2" color="#ffffff">
        {"Copyright © "}
        <Link color="inherit" href="https://sushisushirestaurant.com/">
          The Sushi Sushi
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};
