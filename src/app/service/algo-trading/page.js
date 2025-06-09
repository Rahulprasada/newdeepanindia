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
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked"; // Added for Key Benefits
import GetMoreButton from "../../components/Button/page";
import Image from "next/image";

// Static assets
import heroImage from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import financialImage1 from "../../../assets/18-removebg-preview.png"; // Stock SIP image
import financialImage2 from "../../../assets/19-removebg-preview.png"; // Stock Bags and Algo Trading image
import financialImage3 from "../../../assets/22-removebg-preview.png";

// Define algo data - combined points for cleaner rendering
const ALGOS = [
  {
    title: "Stock SIP",
    img: financialImage1,
    alt: "Robot hand placing coins regularly into stocks.",
    points: [
      "Automated SIP into handpicked stocks & ETFs.",
      "Custom frequency & amount.",
      "Eliminates emotional bias.",
      "Minimum as low as Rs.1000 p.m.",
    ],
  },
  {
    title: "Stock Bags",
    img: financialImage2, // Using financialImage2 as per original code for this card
    alt: "Portfolio dashboard UI with smallcase-style stock groups.",
    points: [
      "Algorithmically selected portfolios.",
      "Can be averaged on Dips and traded as a basket.",
      "Auto rebalancing and exit.",
      "Starts from Rs.10000 to any amount.",
    ],
  },
  {
    title: "Day Trading and Positional",
    img: financialImage3, // Using financialImage3 for the third card
    alt: "Portfolio dashboard UI with smallcase-style stock groups.",
    points: [
      "Fully automated trading in stocks, options and commodities.",
      "Medium to high risk with moderate to higher rewards.",
      "Uses delta-neutral, trend-following, and hybrid strategies.",
      "Build your own or deploy our ready-made strategies.",
    ],
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

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem", // Replicated from original
  fontWeight: 900,
  color: "#49326b",
  marginBottom: theme.spacing(2), // Added margin for consistency
  [theme.breakpoints.down("sm")]: { // max-width: 600px
    fontSize: "1.75rem", // Replicated from original
  },
  // Original had "xs" breakpoint, using theme for consistency.
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
}));

// Replicated Point styled component from original for Key Benefits
const Point = styled(Typography)({
  color: "#49326b",
  marginBottom: "6px",
  fontSize: "1rem", // Replicated from original
  display: "flex", // To align icon and text
  alignItems: "center", // To align icon and text
});

const InfoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth:'300px',
  width: "100%",
  height: "100%", // Allow height to adjust based on content
  minHeight: "400px",
  maxHeight: "450px", // Ensured consistent height for cards on larger screens // Replicated from original
  border: "10px solid #e4d4fa", // Replicated from original
  padding: "20px", // Replicated from original
  borderRadius: "16px", // Replicated from original
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // Changed to flex-start for text alignment
  justifyContent: "flex-start", // Aligns content to top
  animation: `${fadeIn} 6s ease-in-out infinite alternate`, // Replicated animation
  transition: "all 0.55s ease-in", // Replicated transition
  backgroundColor: '#F9F3FE', // Background matching the main section

  "&:hover": {
    boxShadow: `0 20px 40px #49326b`, // Replicated shadow
    // Replicated gradient background on hover
  },
  "&::before": { // Replicated pseudo-element
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  "& > *": { // Replicated direct child z-index
    position: "relative",
    zIndex: 2,
  },
  [theme.breakpoints.down("sm")]: { // max-width: 600px
    padding: "20px 10px", // Replicated padding for mobile
    minHeight: "350px", // Adjust for smaller screens
    marginTop: "20px", // Reduce margin top on mobile
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({ // Replicated StyledDivider
  background: "#e4d4fa",
  height: "6px",
  width: "100%",
  margin: '50px 0', // Replicated margin
  [theme.breakpoints.down("sm")]: { // max-width: 600px
    margin: '30px 0', // Smaller margin on mobile
  },
}));

// Reusable component for list items inside cards, with icon and text
const CardListItem = ({ text }) => (
  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", mt: 1 }}>
    <FiberManualRecordIcon
      sx={{
        pr: "10px", // paddingRight
        color: "#49326b",
        mt: "10px", // marginTop
        fontSize: "12px", // Smaller icon
        flexShrink: 0, // Prevent icon from shrinking
      }}
    />
    <Typography
      sx={{
        mt: 1, // marginTop
        color: "#49326b", // Original text color
        fontSize: "1rem", // Replicated font size
        textAlign: "left",
        lineHeight: 1.5, // Added for readability
      }}
    >
      {text}
    </Typography>
  </Box>
);

const AlgoTrading = ({ serviceName = "ALGO TRADING" }) => { // Default serviceName for consistency
  const [imageError, setImageError] = useState({});

  // Handle image loading errors
  const handleImageError = (key) => {
    setImageError((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <>
      {/* Hero Section - Replicated from other service components for consistency */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "180px", sm: "220px", md: "250px" },
        }}
      >
        <Image
          src={heroImage} // Using general hero image
          alt="Algo Trading Banner"
          fill // Use 'fill' to cover the container
          style={{ objectFit: "cover" }}
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
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="error">Failed to load image</Typography>
          </Box>
        )}
        <Box // This Box wraps the Typography for correct absolute positioning
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            textAlign: "left", // Keep left align for banner text
            fontSize: {
              xs: "20px",
              sm: "28px",
              md: "40px",
              lg: "50px",
            },
            px: 2,
            pl: { xs: 2, sm: 4, md: 6 }, // Responsive left padding
          }}
        >
          <Typography
            variant="h4" // Suitable variant for a main banner title
            component="h1" // Semantic HTML
            sx={{
              color: "white",
              fontWeight: 900,
              textAlign: "left", // Override outer Box's text-align if needed
              fontSize: { xs: "24px", sm: "32px", md: "48px", lg: "60px" }, // Adjusted font sizes for banner
            }}
          >
            {serviceName.toUpperCase()}
          </Typography>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ backgroundColor: "#f9f3fe", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Key Benefits Section */}
          <Grid container spacing={3} alignItems="center"> {/* Adjusted spacing */}
            {/* Key Benefits Text and Points */}
            <Grid item xs={12} sm={8} md={8}> {/* Replicated column sizes */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "flex-start", // Align to left
                  padding: "20px",
                }}
              >
                <SectionTitle>Key Benefits</SectionTitle>
                <Box sx={{ p: 0, marginTop: "10px" }}> {/* Removed padding from box around points, added mt */}
                  <Point>
                    <RadioButtonCheckedIcon style={{ paddingRight: "10px", fontSize: "35px" }} />
                    Speed & Efficiency: Executes trades in milliseconds, faster than any human.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon style={{ paddingRight: "10px", fontSize: "35px" }} />
                    Accuracy: Reduces human errors by following set rules and strategies.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon style={{ paddingRight: "10px", fontSize: "35px" }} />
                    Back testing: Allows testing strategies on historical data before going live.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon style={{ paddingRight: "10px", fontSize: "35px" }} />
                    Emotion-Free Trading: Eliminates decisions driven by fear or greed.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon style={{ paddingRight: "10px", fontSize: "35px" }} />
                    Multiple Markets: Can trade in multiple instruments and segments.
                  </Point>
                </Box>
              </Box>
            </Grid>
            {/* Key Benefits Image */}
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={financialImage2} // Original used financialImage2
                  alt="Algo Trading Illustration"
                  width={500} // Increased base width for better quality
                  height={500} // Increased base height
                  style={{
                    width: "100%",
                    maxWidth: "500px", // Max width for image
                    height: "auto",
                    borderRadius: "12px",
                  }}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSCAAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ9aB4zYgAAAABJRU5ErkJggg=="
                  onError={() => handleImageError("keyBenefitsImage")}
                />
                {imageError.keyBenefitsImage && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
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
              </Box>
            </Grid>
          </Grid>

          <StyledDivider /> {/* Custom styled divider */}

          {/* Algo Info Cards */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch"> {/* Adjusted spacing and alignment */}
            {ALGOS.map((algo, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}> {/* Changed sm to 6 for 2 columns on small screens, md to 4 for 3 columns on medium */}
                <InfoCard>
                  <Typography
                    fontWeight="bold"
                    color="#49326b"
                    sx={{
                      borderRadius: "10px",
                      fontSize: "1.0rem", // Replicated font size
                      textAlign: "center",
                    }}
                  >
                    {algo.title}
                  </Typography>

                  <Box
                    sx={{
                      flex: 1, // Allow content to take available space
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start", // Align list items to left
                      justifyContent: "center",
                      width: "100%", // Ensure it takes full width for left alignment
                      mt: 2, // Space between title and points
                    }}
                  >
                    {algo.points.map((point, i) => (
                      <CardListItem key={i} text={point} />
                    ))}
                  </Box>
                </InfoCard>
              </Grid>
            ))}
          </Grid>

          {/* Get More Button */}
          <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}> {/* Increased margin top */}
            <GetMoreButton aria-label="Learn more about algo trading services" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

AlgoTrading.propTypes = {
  serviceName: PropTypes.string,
};

AlgoTrading.defaultProps = {
  serviceName: "ALGO TRADING",
};

export default AlgoTrading;
