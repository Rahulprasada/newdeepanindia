"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import BackGroundImage1 from "../../../assets/tree-grows-coin-glass-jar-with-copy-space.jpg";
import BackGroundImage2 from "../../../assets/still-life-green-grapes-vineyard.jpg";

const backgroundImages = [BackGroundImage1, BackGroundImage2];

const SlideShowBar = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const [hover, setIsHover] = useState(false);

  const currentSlide = data.length > 0 ? data[currentIndex] : {};
  const {
    subTitle = "Your Trusted Wealth Creation Partner",
    title = "Dream Rich, Dare to Reach!",
    description = "Empower your future with smart investments.",
    button_name = "Get Started",
  } = currentSlide;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualNavigation) {
        setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
      }
      setIsManualNavigation(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [isManualNavigation]);

  const handleDotClick = (index) => {
    setIsManualNavigation(true);
    setCurrentIndex(index);
  };

  return (
    <MainBox
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={backgroundImages[currentIndex]}
        alt="Background image"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          objectFit: "cover",
        }}
        priority={true}
      />
      <Overlay />
      <NavigationDots>
        {backgroundImages.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex} // Use $active to avoid passing to DOM
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationDots>
      <ContentBox>
        <Typography variant="h6" className="subTitle">
          {subTitle}
        </Typography>
        <Typography className="title" component="h1">
          {title}
        </Typography>
        <Typography className="description">{description}</Typography>
        <Link href="#contact" passHref>
          <Button
            variant="contained"
            className="ctaButton"
            endIcon={<IoArrowForwardSharp className="arrowIcon" />}
          >
            {button_name}
          </Button>
        </Link>
      </ContentBox>
    </MainBox>
  );
};

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "600px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: theme.spacing(4),
  overflow: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    height: "450px",
    paddingLeft: theme.spacing(2),
    justifyContent: "center", // Center content on smaller screens
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to right, rgba(73, 50, 107, 0.8), rgba(73, 50, 107, 0.4))",
  zIndex: 2,
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 4,
  textAlign: "left",
  color: "#fff",
  padding: theme.spacing(4),
  boxSizing: "border-box",
  // maxWidth: "600px", // Limit content width for readability
  [theme.breakpoints.down("sm")]: {
    textAlign: "center", // Center text on mobile
    padding: theme.spacing(2),
  },
  "& .title": {
    fontSize: "3.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "#e4d4fa",
    marginBottom: theme.spacing(2),
    position: "relative",
    zIndex: 5,
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  "& .subTitle": {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& .description": {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  "& .ctaButton": {
    padding: theme.spacing(1.5, 4),
    fontSize: "1.25rem",
    fontWeight: 600,
    backgroundColor: "#ff4d4f",
    textTransform: "none",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e63946",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
      padding: theme.spacing(1.2, 3),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
      padding: theme.spacing(1, 2),
    },
  },
  "& .arrowIcon": {
    fontSize: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
}));

const NavigationDots = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: theme.spacing(1),
  zIndex: 5,
  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(1),
    gap: theme.spacing(0.5),
  },
}));

const Dot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$active", // Prevent $active from being passed to DOM
})(({ theme, $active }) => ({
  width: "40px",
  height: "4px",
  backgroundColor: $active ? "white" : "rgba(255, 255, 255, 0.5)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: $active ? "#e63946" : "rgba(255, 255, 255, 0.8)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "20px", // Smaller dots on mobile
    height: "3px",
  },
}));

export default SlideShowBar;