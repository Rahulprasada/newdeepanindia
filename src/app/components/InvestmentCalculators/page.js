"use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "styled-components";
import backimage from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Calculate returns on your Systematic Investment Plan.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063144.png",
    link: "/calculators/sip-calculator",
  },
  {
    title: "Lumpsum Calculator",
    description: "Estimate returns on your one-time investment.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063147.png",
    link: "/calculators/lumpsum-calculator",
  },
  {
    title: "SWP Calculator",
    description: "Plan your Systematic Withdrawal Plan effectively.",
    icon: "https://cdn-icons-png.flaticon.com/512/3063/3063150.png",
    link: "/calculators/swp-calculator",
  },
];

const FinancialCalculatorsMUI = () => {
  return (
    <MainBox id="calculator">
      {/* Add Image tag as the background */}
      <Image
        src={backimage}
        alt="Background image"
        fill // Makes the image fill the parent container
        style={{
          objectFit: "cover", // Equivalent to backgroundSize: "cover"
          objectPosition: "center", // Equivalent to backgroundPosition: "center"
          zIndex: 0, // Ensure the image is behind the overlay and content
        }}
      />
      <Container maxWidth="lg">
        <Typography
          align="center"
          gutterBottom
          sx={{
            color: "white",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            fontWeight: 900,
            mb: 5,
          }}
        >
          Investment Calculators
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 3,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {calculators.map((calc, index) => (
            <StyledCard key={index} style={{ borderRadius: "20px" }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2, // optional margin below icon
                  }}
                >
                  <Icon src={calc.icon} alt={`${calc.title} icon`} />
                </Box>

                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    color: "#49326b",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {calc.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#49326b",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {calc.description}
                </Typography>
              </CardContent>

              <CardActions
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  href={calc.link}
                  sx={{
                    textTransform: "none",
                    color: "#3b2752",
                    animation: "blink 1s infinite",
                    "&:hover": { backgroundColor: "#3b2752", color: "white" },
                    borderColor: "#3b2752",
                  }}
                >
                  Go to Calculator
                </Button>
              </CardActions>
            </StyledCard>
          ))}
        </Box>
      </Container>
    </MainBox>
  );
};

export default FinancialCalculatorsMUI;

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative", // Required for absolute positioning of the Image
  width: "100%",
  minHeight: "auto",
  // Removed backgroundImage, backgroundSize, and backgroundPosition
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  padding: "50px 0px 50px 0px",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1, // Overlay above the Image
  },

  "& > *": {
    position: "relative",
    zIndex: 2, // Content above the overlay
  },
}));

const StyledCard = styled(Card)(() => ({
  background: "#f9f3fe",
  border: "10px solid #e4d4fa",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  textAlign: "center",
  height: "100%",
}));

const Icon = styled.img(() => ({
  width: "60px",
  height: "60px",
  marginBottom: "15px",
}));
