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
  "from": {
    opacity: 0,
    transform: "translateY(30px)",
  },
  "to": {
    opacity: 1,
    transform: "translateY(0)",
  },
};

const slideInRight = {
  "from": {
    opacity: 0,
    transform: "translateX(50px)",
  },
  "to": {
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
        padding: { xs: "20px 0", md: "20px 0" },
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
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      > 
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            fontWeight: 900,
            color: "white",
            textAlign: "left",
            mb: { xs: 4, md: 6 },
            animation: "fadeInUp 1s ease-out",
            "@keyframes fadeInUp": fadeInUp,
          }}
        >
          About Us
        </Typography>

        {/* Grid for Text and Image */}
        <Box sx={{width:'100%'}}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Text Column */}
          <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    fontWeight: 700,
                    color: "white",
                    textAlign: "left",
                    mt: { xs: 2, md: 3 },
                    mb: { xs: 2, md: 3 },
                    lineHeight: 1.6,
                    animation: "fadeInUp 1.4s ease-out",
                    "@keyframes fadeInUp": fadeInUp,
                  }}
                >
                  {title ||
                    "Deepan India, we believe that wealth creation should be accessible to everyone. Our mission is to empower investors with financial education, strategic investment guidance, and risk management solutions"}
                </Typography>

                <Box
                  sx={{
                    border: "2px solid white",
                    borderRadius: "15px",
                    p: { xs: 2, md: 3 },
                    animation: "fadeInUp 1.6s ease-out",
                    "@keyframes fadeInUp": fadeInUp,
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
              </Box>
          </Grid>

          {/* Image Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              mt: { xs: 4, md: 0 }, // Margin-top on mobile to separate from text
              animation: "slideInRight 1.2s ease-out",
              "@keyframes slideInRight": slideInRight,
            }}
          >
            <Slide direction="right" in={isVisible} timeout={1200}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 300, sm: 400, md: 500 },
                  mx: "auto",
                  display:'flex',
                  justifyContent:'center'
                }}
              >
                <Image
                  src={aboutImg}
                  alt="About Us"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, rgba(220, 20, 60, 0.1), rgba(245, 61, 37, 0.1))",
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
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  );
};