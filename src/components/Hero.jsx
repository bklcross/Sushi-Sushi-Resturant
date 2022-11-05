import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "https://res.cloudinary.com/memescloud/image/upload/v1663976674/Sushi/dragon_roll_j47xlh.jpg",
  "https://res.cloudinary.com/memescloud/image/upload/v1663976673/Sushi/deluxe_combo_r7gccn.jpg",
  "https://res.cloudinary.com/memescloud/image/upload/v1663976669/Sushi/vege_catapillar_roll_zdcysj.jpg",
];

export const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        fontFamily: "Poppins",
      }}
      id={"hero"}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          zIndex: 1,
          backgroundColor: "rgba(10, 10 ,10, .5)",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <Box
          sx={{
            color: "#ffffff",
            width: "375px",
            margin: "auto",
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontFamily: "Poppins", fontSize: "57px" }}
            className={"hero-toolbar"}
          >
            Best Sushi in Temecula
          </Typography>
          <Typography variant="p" sx={{ fontFamily: "Poppins" }}>
            We serve only best freshest ingredient, friendly atmosphere, and
            wide sake bar selection
          </Typography>
        </Box>
      </Box>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((src) => (
          <img
            src={src}
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};
