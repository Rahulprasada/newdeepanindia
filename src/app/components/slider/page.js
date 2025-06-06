"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from "next/link"; // Use Next.js Link instead of MUI Link
import Image from "next/image"; // Use Next.js Image component
import BackGroundImage1 from "../../../assets/tree-grows-coin-glass-jar-with-copy-space.jpg";
import BackGroundImage2 from "../../../assets/home pg option 2.jpg";

const backgroundImages = [BackGroundImage1, BackGroundImage2];

const SlideShowBar = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [direction, setDirection] = useState("next");
  const [animationType, setAnimationType] = useState("typewriter"); // "typewriter" or "fade"
  const isManualNavigation = useRef(false);
  const [hover, setIsHover] = useState(false); // Consistent naming
  const typewriterTimeouts = useRef([]); // Track timeouts for cleanup

  const currentSlide = data.length > 0 ? data[currentIndex] : {};
  const {
    subTitle = "Your Trusted Wealth Creation Partner",
    title = "Dream Big, Achieve More!",
    description = "Empower your future with smart investments.",
    button_name = "Get Started",
  } = currentSlide;

  useEffect(() => {
    // Clear any existing timeouts
    typewriterTimeouts.current.forEach(timeout => clearTimeout(timeout));
    typewriterTimeouts.current = [];

    if (animationType === "typewriter") {
      // Typewriter animation (for auto-slide or initial load)
      setDisplayText("");
      setShowButton(false);

      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 300);
      typewriterTimeouts.current.push(buttonTimer);

      const chars = title.split("");
      chars.forEach((char, index) => {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + char);
        }, index * 100);
        typewriterTimeouts.current.push(timeout);
      });
    } else {
      // Fade animation (for manual navigation)
      setDisplayText(title);
      setShowButton(true);
    }

    // Cleanup function
    return () => {
      typewriterTimeouts.current.forEach(timeout => clearTimeout(timeout));
      typewriterTimeouts.current = [];
    };
  }, [currentIndex, title, animationType]);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualNavigation.current) {
        setAnimationType("typewriter");
        setDirection("next");
        setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
      }
      isManualNavigation.current = false; // Reset flag
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    isManualNavigation.current = true;
    setAnimationType("fade");
    setDirection("prev");
    setCurrentIndex((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    isManualNavigation.current = true;
    setAnimationType("fade");
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <MainBox
      onMouseEnter={() => setIsHover(true)} // Consistent naming
      onMouseLeave={() => setIsHover(false)} // Consistent naming
    >
      <BackgroundImage direction={direction}>
        <Image
          src={backgroundImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          style={{
            objectFit: "cover",
            animation:
              direction === "next"
                ? "slideInFromRight 0.6s ease-in-out forwards"
                : "slideInFromLeft 0.6s ease-in-out forwards",
          }}
          priority={currentIndex === 0} // Priority for the first image
        />
      </BackgroundImage>
      <Overlay />
      {hover && (
        <NavigationBox>
          <IconButton
            onClick={handlePrev}
            sx={{
              borderRadius: "50px",
              padding: "30px",
              color: "white",
              marginLeft: "50px",
              backgroundColor: "rgba(249, 243, 252, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(241, 229, 243, 0.7)",
              },
            }}
          >
            <IoArrowBackSharp />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              borderRadius: "50px",
              padding: "30px",
              color: "white",
              marginRight: "100px",
              backgroundColor: "rgba(249, 243, 252, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(241, 229, 243, 0.7)",
              },
            }}
          >
            <IoArrowForwardSharp />
          </IconButton>
        </NavigationBox>
      )}
      <ContentBox>
        <Typography variant="h6" className="subTitle">
          {subTitle}
        </Typography>
        <Typography className="title" component="h1">
          {displayText}
        </Typography>
        <Typography className="description">{description}</Typography>
        {showButton && (
          <Link href="#contact"  >
            <Button
              variant="contained"
              className="ctaButton"
              endIcon={<IoArrowForwardSharp className="arrowIcon" />}
            >
              {button_name}
            </Button>
          </Link>
        )}
      </ContentBox>
    </MainBox>
  );
};

const slideIn = `
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0.8;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
      opacity: 0.8;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

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
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    paddingLeft: theme.spacing(1),
  },
}));

const BackgroundImage = styled(Box)({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
});

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
  textAlign: "center",
  color: "#fff",
  padding: theme.spacing(4),
  boxSizing: "border-box",
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

const NavigationBox = styled(Box)({
  display: "flex",
  position: "absolute",
  justifyContent: "space-between",
  width: "100%",
  top: "50%",
  transform: "translateY(-50%)",
  alignItems: "center",
  padding: "0 20px",
  zIndex: 5,
});

export default SlideShowBar;