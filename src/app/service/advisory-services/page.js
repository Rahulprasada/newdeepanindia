"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { keyframes } from "@emotion/react";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GetMoreButton from "../../components/Button/page";
import Image from "next/image";

// Static assets
import heroImage from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import financialImage1 from "../../../assets/14-removebg-preview.png";
import financialImage2 from "../../../assets/15-removebg-preview.png";
import financialImage3 from "../../../assets/16-removebg-preview.png";
import financialImage4 from "../../../assets/17-removebg-preview.png";

// Define advisory data
const ADVISORY = [
  {
    title: "Short & Medium-Term Stock Bags",
    subtitle: "SIP & Lumpsum options from ₹5,000 to ₹50,000.",
    description: "Actively managed with averaging & timely churning.",
    audience: "Ideal for beginners and progressive investors.",
    img: financialImage1,
    alt: "Stock bag with multiple logos and a SIP chart.",
  },
  {
    title: "Long-Term Stock Bags for HNIs",
    subtitle: "Starting from ₹1,00,000 to any amount.",
    description: "Blue-chip and growth picks.",
    audience: "Managed with periodic review and realignment.",
    img: financialImage2,
    alt: "Tree growing from coins with long-term tag.",
  },
  {
    title: "Momentum Delivery-Based Trading",
    subtitle: "Short-term high-potential trades.",
    description: "Uses margin/leveraged funds with strong risk management.",
    audience: "Regular alerts and exits on time.",
    img: financialImage4,
    alt: "Speedometer with “Momentum” label on dial",
  },
  {
    title: "Swing Trading – Index, Futures & options",
    subtitle: "3 days to 1 month hold",
    description: "Includes hedge-based risk reduction.",
    audience: "Suits active traders seeking calculated exposure.",
    img: financialImage3,
    alt: "Swing graph with hedge overlay (put/call icons)",
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
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Styled components
const InfoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "380px", // Slightly reduced height
  maxHeight:'350px',
  minHeight:'300px',
  height: "100%",
  border: "8px solid #e4d4fa",
  padding: theme.spacing(2),
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F9F3FE",
  animation: `${fadeIn} 6s ease-in-out infinite alternate`,
  transition: "all 0.55s ease-in",
  "&:hover": {
    transform: "translateY(-8px)",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "250px",
    minHeight: "330px",
    padding: theme.spacing(1.5),
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "150px",
  [theme.breakpoints.down("xs")]: {
    height: "120px",
  },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  mt: 0.5,
  minHeight: "40px",
  [theme.breakpoints.down("xs")]: {
    minHeight: "36px",
  },
}));

const AdvisoryService = ({ serviceName = "Advisory Services" }) => {
  const [imageError, setImageError] = useState({});

  // Handle image loading errors
  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
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
          alt="Gradient purple background for advisory services"
          fill
          style={{
            borderRadius: "8px",
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
              borderRadius: "8px",
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
            transform: "translateY(-50%)", // Only vertical centering
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            textAlign: "left",
            fontSize: {
              xs: "20px", // mobile
              sm: "28px",
              md: "40px",
              lg: "50px",
            },
            px: 2,
            pl: { xs: 2, sm: 4, md: 6 }, // Responsive left padding
          }}
        >
          {serviceName.toUpperCase()}
        </Typography>
      </Box>

      {/* Advisory Cards Section */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 4, md: 6 },
          backgroundColor: "#F9F3FE",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
            {ADVISORY.map((course, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Box display="flex" justifyContent="center">
                  <InfoCard>
                    <ImageWrapper>
                      <Image
                        src={course.img}
                        alt={course.alt}
                        width={240}
                        height={150}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "12px",
                          objectFit: "cover",
                          animation: `${imageFloat} 3s ease-in-out infinite alternate`,
                        }}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ9aB4zYgAAAABJRU5ErkJggg=="
                        onError={() => handleImageError(index)}
                      />
                      {imageError[index] && (
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
                        fontSize: { xs: "0.9rem", sm: "1.1rem" },
                        
                      }}
                    >
                      {course.title}
                    </Typography>
                    <TextWrapper>
                      <FiberManualRecordIcon
                        sx={{
                          pr: 0.5,
                          mt: 0.5,
                          color: "#49326b",
                          fontSize: "0.7rem",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#49326b",
                          textAlign:'left',
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                      >
                        {course.subtitle}
                      </Typography>
                    </TextWrapper>
                    <TextWrapper>
                      <FiberManualRecordIcon
                        sx={{
                          pr: 0.5,
                          mt: 0.5,
                          color: "#49326b",
                          fontSize: "0.7rem",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#49326b",
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                      >
                        {course.description}
                      </Typography>
                    </TextWrapper>
                    <TextWrapper>
                      <FiberManualRecordIcon
                        sx={{
                          pr: 0.5,
                          mt: 0.5,
                          color: "#49326b",
                          fontSize: "0.7rem",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#49326b",
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                      >
                        {course.audience}
                      </Typography>
                    </TextWrapper>
                  </InfoCard>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: 3, md: 4 },
            }}
          >
            <GetMoreButton aria-label="Learn more about advisory services" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

// Prop validation
AdvisoryService.propTypes = {
  serviceName: PropTypes.string,
};

// Default props
AdvisoryService.defaultProps = {
  serviceName: "Advisory Services",
};

export default AdvisoryService;
