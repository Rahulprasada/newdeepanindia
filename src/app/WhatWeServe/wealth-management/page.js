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
import { useRouter } from "next/navigation"; // For Next.js navigation
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Material-UI Icons
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

// Image assets (ensure paths are correct)
import Handshake from "../../../assets/9-removebg-preview.png"; // Using the correct image path for Wealth Management
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import GetMoreButton from "../../components/Button/page";

// Keyframes animations using @mui/system keyframes
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// List of steps for the wealth management section, including icons
const steps = [
  {
    label: "Personalized financial planning across life stages.",
    icon: <StarIcon />,
  },
  {
    label: "Investment advisory and portfolio management.",
    icon: <AccountBalanceWalletIcon />,
  },
  { label: "Tax optimization and legal structuring.", icon: <GavelIcon /> },
  { label: "Estate and succession planning.", icon: <AccountBalanceIcon /> },
  { label: "Insurance and risk management.", icon: <VerifiedUserIcon /> },
  {
    label: "Family office services for legacy building.",
    icon: <FamilyRestroomIcon />,
  },
];

// Styled component for the main container box
const MainBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  backgroundColor: "#f9f3fe",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    // @media screen and (max-width: 600px)
    padding: "30px 0",
  },
}));

// Styled component for the Qualification box with background image
const QualificationBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  backgroundImage: `linear-gradient(rgba(73, 50, 107, 0.7), rgba(73, 50, 107, 0.7)), url(${aboutImg1.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px 40px", // Default padding for larger screens
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
    // @media (max-width: 600px)
    padding: "20px 10px",
  },
}));

// Styled component for the Highlight Span within Typography
const HighlightSpan = styled("span")(({ theme }) => ({
  color: "white", // Default color
  fontWeight: 700,
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#e73ed1", // Hover color
  },
}));

const WealthManagement = () => {
  const router = useRouter(); // Initialize useRouter for navigation
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
            padding: { xs: "20px 0 5px 0", sm: "30px 0" },
            textAlign: "left",
            fontWeight: 900,
            color: "#49326b",
            fontSize: { xs: "26px", sm: "50px" },
          }}
        >
          Wealth Management
        </Typography>

        {/* Introductory Text */}
        <Typography
          sx={{
            textAlign: "left",
            color: "#49326b",
            fontSize: { xs: "16px", sm: "22px" },
            marginBottom: { xs: "30px", sm: "40px" },
            fontWeight: 300,
          }}
        >
          Our comprehensive wealth management solutions are tailored for
          high-net-worth individuals and families.
        </Typography>

        {/* Qualification Card Section */}
        <QualificationBox>
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "16px",
              border: "10px solid #e4d4fa",
              boxShadow: "0 8px 24px rgba(73, 50, 107, 0.1)",
              padding: { xs: "20px", md: "20px" },
              animation: `${slideIn} 1s ease-in-out`,
              width: "100%", // Take full width within QualificationBox
              maxWidth: "1000px", // Increased max width for better layout on large screens
            }}
          >
            <Grid container spacing={{ xs: 2, md: 6 }} alignItems="center">
              {" "}
              {/* Grid for layout inside Card */}
              {/* Points List */}
              <Grid item xs={12} sm={6} md={6}>
                <List sx={{ width: "100%" }}>
                  <Typography sx={{ color: "#49326b" }}> We offer:</Typography>
                  {steps.map((step, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        py: 1, // Adjusted vertical padding for list items
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: { xs: "none", sm: "translateX(8px)" }, // Hover effect only on larger screens
                          background: "#e4d4fa",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <CheckCircleIcon
                          sx={{
                            color: "#49326b",
                            fontSize: { xs: "18px", sm: "22px" },
                          }} // Responsive icon size
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={step.label}
                        primaryTypographyProps={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#49326b",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              {/* Handshake Image */}
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    mt: { xs: 2, sm: 0 }, // Margin top on mobile, none on larger screens
                  }}
                >
                  {!imageError.handshake ? (
                    <Image
                      src={Handshake}
                      alt="Wealth Management Handshake"
                      width={400} // Base width for Next.js Image
                      height={400} // Base height for Next.js Image
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        display: "block", // Ensure image is a block element for sizing
                        animation: `${slideIn} 1.2s ease-in-out`,
                      }}
                      priority // Optimizes image loading
                      onError={() => handleImageError("handshake")}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "400px" }, // Fallback width
                        height: { xs: "200px", sm: "400px" }, // Fallback height
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
              fontSize: { xs: "18px", sm: "28px" },
              fontWeight: "900",
              color: "white",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <HighlightSpan>
              With a strategic and holistic approach, we protect and grow your
              wealth over generations.
            </HighlightSpan>
          </Typography>
        </QualificationBox>
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <GetMoreButton />
        </Box>
      </Container>
    </MainBox>
  );
};

export default WealthManagement;
