"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Import Grid for layout
import { styled, keyframes } from "@mui/system"; // Correct import for styled and keyframes

import Image from "next/image"; // Next.js Image component
import { useRouter } from "next/navigation";

// Material-UI Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Image assets (ensure paths are correct)
import Handshake from "../../../assets/3-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import GetMoreButton from "../../components/Button/page";

// Keyframes animations using @mui/system keyframes
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// List of points for the investment solution
const points = [
  "Setting short, medium, and long-term financial goals.",
  "Assessing your risk tolerance and return expectations.",
  "Selecting the right mix of investment avenues – equity, debt, mutual funds, etc.",
  "Creating a diversified portfolio aligned with your life goals.",
  "Regular monitoring and rebalancing to stay on track.",
];

// Styled component for the main container box
const MainBox = styled(Box)(({ theme }) => ({
  // Use theme for responsive breakpoints
  padding: "60px 0",
  backgroundColor: "#f9f3fe",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    // media screen and (max-width: 600px)
    padding: "30px 0",
  },
}));

// Styled component for the Qualification box with background image
const QualificationBox = styled(Box)(({ theme }) => ({
  // Use theme for responsive breakpoints
  position: "relative",
  width: "100%",
  // Using imported image asset src for background
  backgroundImage: `linear-gradient(rgba(73, 50, 107, 0.7), rgba(73, 50, 107, 0.7)), url(${aboutImg1.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px 20px", // Default padding for larger screens
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 24px rgba(73, 50, 107, 0.1)", // Added shadow for consistency

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(73, 50, 107, 0.3)",
    zIndex: 1,
  },

  "& > *": {
    position: "relative",
    zIndex: 2,
  },

  [theme.breakpoints.down("sm")]: {
    // media screen and (max-width: 600px)
    padding: "20px 12px", // Adjusted padding for smaller screens
  },
}));

// Styled component for the "Get Started" button
const StyledButton = styled(Button)(({ theme }) => ({
  // Use theme for responsive breakpoints
  backgroundColor: "#49326b",
  color: "#ffffff",
  fontWeight: 600,
  padding: "12px 32px",
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "18px",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "#e4d4fa",
    color: "#49326b",
    transform: "scale(1.05)",
  },

  [theme.breakpoints.down("sm")]: {
    // media screen and (max-width: 600px)
    padding: "10px 24px",
    fontSize: "16px",
  },
}));

const InvestmentSolution = () => {
  const router = useRouter();
  const [imageError, setImageError] = useState({});

  // Handler for image loading errors, showing a fallback text
  const handleImageError = (key) => {
    setImageError((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <MainBox>
      <Container maxWidth="lg">
        {/* Main Title */}
        <Typography
          sx={{
            padding: { xs: "20px 0", md: "20px 0" },
            textAlign: "left",
            fontWeight: 900,
            color: "#49326b",
            fontSize: { xs: "24px", sm: "32px", md: "48px" },
            animation: `${fadeIn} 1s ease-in-out`,
          }}
        >
          Investment Solutions
        </Typography>

        {/* Introductory Text */}
        <Typography
          sx={{
            textAlign: "left",
            color: "#49326b",
            fontSize: { xs: "14px", sm: "16px", md: "16px" },
            marginBottom: { xs: "20px", md: "40px" },
            fontWeight: 400,
            lineHeight: 1.6,
            animation: `${fadeIn} 1.2s ease-in-out`,
          }}
        >
          We help you grow and secure your wealth through goal-oriented
          investment strategies.
        </Typography>

        {/* Qualification Card Section */}
        <QualificationBox>
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "16px",
              border: "10px solid #e4d4fa",
              boxShadow: "0 8px 24px rgba(73, 50, 107, 0.1)",
              padding: { xs: "12px", sm: "16px", md: "20px" }, // Responsive padding
              animation: `${slideIn} 1s ease-in-out`,
              width: "100%", // Take full width within QualificationBox
              maxWidth: "1300px", // Limit max width of the card itself for better readability
            }}
          >
            <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="center">
              {" "}
              {/* Grid for layout inside Card */}
              {/* Points List */}
              <Grid item xs={12} sm={7} md={8}>
                {" "}
                {/* Adjust grid item sizes as needed */}
                <List sx={{ width: "100%" }}>
                  {points.map((point, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        py: 0.5, // Reduced padding
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: { xs: "none", sm: "translateX(8px)" }, // Hover effect only on larger screens
                          background: "#e4d4fa",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "32px" }}>
                        <CheckCircleIcon
                          sx={{
                            color: "#49326b",
                            fontSize: { xs: "18px", sm: "22px" },
                          }} // Responsive icon size
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{
                          fontSize: '16px', // Responsive font size for list items
                          fontWeight: 600,
                          color: "#49326b",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              {/* Handshake Image */}
              <Grid item xs={12} sm={5} md={4}>
                {" "}
                {/* Adjust grid item sizes as needed */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    mt: { xs: 2, sm: 0 }, // Add margin top on mobile, none on larger screens
                  }}
                >
                  {!imageError.handshake ? (
                    <Image
                      src={Handshake}
                      alt="Handshake illustration"
 // Base height for Next.js Image
                      style={{
                        maxHeight:'600px',
                        width: "100%",
                        height: "100%",
                        maxWidth:'350px', // Responsive max width
                        animation: `${slideIn} 1.2s ease-in-out`,
                      }}
                      priority // Optimizes image loading
                      onError={() => handleImageError("handshake")}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: { xs: "150px", sm: "200px", md: "250px" },
                        height: { xs: "150px", sm: "200px", md: "250px" },
                        bgcolor: "#e4d4fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                      }}
                    >
                      <Typography color="error" variant="body2">
                        Image not available
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Card>

          {/* Call to action text */}
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "18px", sm: "22px", md: "28px" }, // Responsive font size
              fontWeight: 700,
              color: "#ffffff",
              marginTop: { xs: "20px", md: "40px" },
              padding: { xs: "10px", md: "20px" },
              animation: `${fadeIn} 1.4s ease-in-out`,
            }}
          >
            Whether you’re planning for a home, child’s education, or wealth
            creation, we ensure your investments work smarter.
          </Typography>

          {/* Get Started Button */}
        </QualificationBox>
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <GetMoreButton />
        </Box>
      </Container>
    </MainBox>
  );
};

export default InvestmentSolution;
