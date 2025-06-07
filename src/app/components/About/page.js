"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";
import Image from "next/image";
import aboutImg from "../../../assets/WhatsApp Image 2025-05-24 at 11.31.47 AM (1).jpeg";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

// Define keyframes directly in the component
const fadeInUp = {
  from: {
    opacity: 0,
    transform: "translateY(30px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
};

const slideInRight = {
  from: {
    opacity: 0,
    transform: "translateX(50px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
};

export const About = ({ data }) => {
  const { title, description } = data?.[0] || {};
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      id="About"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${aboutImg1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 }, // Add vertical padding
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth={"lg"} sx={{ position: "relative", zIndex: 2 }}>
        {/* STEP 1: Center the main title above the grid */}
        <Fade in={true} timeout={1000}>
          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              fontWeight: 900,
              color: "white",
              textAlign: "center",
              mb: { xs: 4, md: 6 },
              animation: "fadeInUp 1s ease-out",
              "@keyframes fadeInUp": fadeInUp,
            }}
          >
            About Us
          </Typography>
        </Fade>
        {/* Grid for Text and Image */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
          }}
        >
          {/* Text Section */}
          <Box sx={{ flex: 1 }}>
            <Fade in={true} timeout={1200}>
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  fontWeight: 700,
                  color: "white",
                  textAlign: "left",
                  lineHeight: 1.6,
                  mb: 3,
                  animation: "fadeInUp 1.4s ease-out",
                  "@keyframes fadeInUp": fadeInUp,
                }}
              >
                {title ||
                  "Deepan India, we believe that wealth creation should be accessible to everyone. Our mission is to empower investors with financial education, strategic investment guidance, and risk management solutions."}
              </Typography>
            </Fade>

            <Fade in={true} timeout={1400}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  p: { xs: 3, md: 4 },
                  backdropFilter: "blur(5px)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    fontWeight: 500,
                    color: "white",
                    textAlign: "left",
                    lineHeight: 1.8,
                  }}
                >
                  {description ||
                    "We offer personalized investment and trading strategies tailored for individual financial goals and risk appetites. Whether you're a beginner or an experienced investor, our technology-driven approach ensures transparent, data-backed and result-oriented wealth management solutions with lifetime support."}
                </Typography>
              </Box>
            </Fade>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fade in={true} timeout={1200}>
              <Slide direction="right" in={isVisible} timeout={1200}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: { xs: "350px", md: "500px" },
                  }}
                >
                  <Image
                    src={aboutImg}
                    alt="About Us"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(220, 20, 60, 0.1), rgba(245, 61, 37, 0.1))",
                      borderRadius: "10px",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      zIndex: 1,
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              </Slide>
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
