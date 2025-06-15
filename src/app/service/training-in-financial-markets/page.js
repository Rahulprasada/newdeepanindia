"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { styled, keyframes } from "@mui/material/styles"; // Correct import for styled and keyframes
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GetMoreButton from "../../components/Button/page";
import Image from "next/image";

// Static assets
import heroImage from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import financialImage1 from "../../../assets/20-removebg-preview.png";
import financialImage2 from "../../../assets/21-removebg-preview.png";
import financialImage3 from "../../../assets/22-removebg-preview.png";

// Define course data
const COURSES = [
  {
    title: "Wise Investor Course",
    description:
      "Beginner-friendly course covering savings, budgeting, mutual funds, and basic stock investing.",
    audience:
      "Perfect for: Students, Working Professionals, Housewives, Retirees",
    img: financialImage1,
    alt: "Student at laptop learning finance",
  },
  {
    title: "Smart Trading for Wealth",
    description:
      "Intermediate-level program focusing on stock & index trading, technical analysis, charting tools, and risk management.",
    audience: "Includes hands-on learning with live market sessions.",
    img: financialImage2,
    alt: "Candlestick chart with annotations",
  },
  {
    title: "Pro Trader for Full-time Career",
    description:
      "Advanced training in professional trading systems, trader psychology, capital management, and option strategies.",
    audience:
      "Covers derivatives, intraday/swing trading, and includes mentorship & placement support.",
    img: financialImage3,
    alt: "Dual-screen setup, trader analyzing markets",
  },
];

// Keyframe animations
const fadeIn = keyframes`
  0% {
    transform: scale(1.02);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
`;

const imageFloat = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px); /* Increased float height */
  }
  100% {
    transform: translateY(0px);
  }
`;

// Styled components
const InfoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth:'350px',
  width: "100%", // Take full width of the grid item// Adjust height based on content
  minHeight: "400px",
  maxHeight:'550px',
  height:'100%', // Ensure consistent height for all cards for better alignment
  border: "10px solid #e4d4fa", // Match original border
  padding: "30px", // Match original padding
  borderRadius: "16px", // Match original border-radius
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center overall content within the card
  justifyContent: "flex-start", // Start content from the top
  backgroundColor: "#F9F3FE",
  animation: `${fadeIn} 6s ease-in-out infinite alternate`, // Pulsing animation
  transition: "all 0.55s ease-in", // Smooth transition for hover
  textAlign: "center", // Center text within the card

  "&:hover": {
    boxShadow: `0 20px 40px rgba(73, 50, 107, 0.4)`, // Enhanced shadow on hover
    // Original code had a background gradient change on hover for SIP/Lumpsum cards.
    // Applying a subtle background color change for consistency.
    backgroundColor: '#F0F0FA', // Lighter shade on hover
  },

  [theme.breakpoints.down("sm")]: { // Apply for screens <= 600px
    padding: "20px 10px", // Adjusted padding for mobile
    minHeight: "350px", // Adjust minHeight for mobile
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "180px", // Fixed height for image container
  marginBottom: theme.spacing(2), // Space below image
  [theme.breakpoints.down("sm")]: { // Apply for screens <= 600px
    height: "150px", // Adjust height for mobile
    marginBottom: theme.spacing(1.5),
  },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  textAlign: "left", // Ensure text aligns left within this wrapper
  mt: 1, // Margin top for spacing
  minHeight: "auto", // Let content define height
  color: "#49326b", // Default text color
  [theme.breakpoints.down("sm")]: { // Apply for screens <= 600px
    mt: 0.5,
  },
}));



const TrainingInFinancialMarketing = ({
  serviceName = "Training in Financial Markets",
}) => {
  const [imageError, setImageError] = useState({});

  const handleImageError = (key) => { 
    setImageError((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "180px", sm: "220px", md: "250px" },
        }}
      >
        <Image
          src={heroImage}
          alt="Gradient purple background for financial training"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ9aB4zYgAAAABJRU5ErkJggg=="
          onError={() => handleImageError("hero")}
        />
        {imageError.hero && (
          <Box
            sx={{
              bgcolor: "#e4d4fa",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="error">Failed to load image</Typography>
          </Box>
        )}
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            textAlign: "left",
            fontSize: {
              xs: "20px",
              sm: "28px",
              md: "40px",
              lg: "50px",
            },
            px: 2,
            pl: { xs: 2, sm: 4, md: 6 },
          }}
        >
          {serviceName.toUpperCase()}
        </Typography>
      </Box>

      {/* Courses Section */}
      <Box
        sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4, backgroundColor: "#F9F3FE" }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4} // Increased spacing between cards
            justifyContent="center"
            alignItems="stretch" // Ensure cards in a row stretch to equal height
          >
            {COURSES.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={course.title}> {/* Responsive grid for 1, 2, or 3 columns */}
                <InfoCard>
                  <ImageWrapper>
                    <Image
                      src={course.img}
                      alt={course.alt}
                      width={240} // Base width for Next.js Image
                      height={150} // Base height for Next.js Image
                      style={{
                        width: "100%",
                        height: "100%", // Fill ImageWrapper
                        borderRadius: "12px",
                        objectFit: "cover",
                        animation: `${imageFloat} 3s ease-in-out infinite alternate`,
                      }}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ9aB4zYgAAAABJRU5ErkJggg=="
                      onError={() => handleImageError(course.title)} // Use title as unique key for image error
                    />
                    {imageError[course.title] && ( // Check error by title
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
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
                  </ImageWrapper>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mt: 1.5,
                      fontWeight: "bold",
                      color: "#49326b",
                      textAlign: "center",
                      fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjusted font size for titles
                    }}
                  >
                    {course.title}
                  </Typography>
                  <TextWrapper sx={{ mt: 1.5 }}> 
                    <FiberManualRecordIcon
                      sx={{
                        mr: 1, 
                        mt: 0.7, 
                        color: "#49326b",
                        fontSize: "0.7rem", // Small icon size
                        flexShrink: 0, // Prevent icon from shrinking
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#49326b",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" }, // Adjusted font size for description
                        textAlign: "left", // Ensure text aligns left
                      }}
                    >
                      {course.description}
                    </Typography>
                  </TextWrapper>
                  <TextWrapper sx={{ mt: 1 }}> {/* Added margin top for separation */}
                    <FiberManualRecordIcon
                      sx={{
                        mr: 1,
                        mt: 0.7,
                        color: "#49326b",
                        fontSize: "0.7rem",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#49326b",
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        textAlign: "left",
                      }}
                    >
                      {course.audience}
                    </Typography>
                  </TextWrapper>
                </InfoCard>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 5, // Increased margin top
            }}
          >
            <GetMoreButton aria-label="Learn more about financial training courses" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

// Prop validation
TrainingInFinancialMarketing.propTypes = {
  serviceName: PropTypes.string,
};

// Default props
TrainingInFinancialMarketing.defaultProps = {
  serviceName: "Training in Financial Marketing",
};

export default TrainingInFinancialMarketing;