

"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { keyframes } from "@emotion/react";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GetMoreButton from "../../components/Button/page";
import Image from "next/image";
import { useTheme } from "@mui/material"; // Import useTheme

// Static assets (updated to public paths)

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
      alt: "Speedometer with 'Momentum' label on dial",
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
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  `;
  
  const imageFloat = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  `;
  
  // Styled components
  const InfoCard = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "clamp(380px, 90vw, 360px)",
    height: "clamp(420px, 90vh, 500px)",
    border: "8px solid #e4d4fa",
    padding: theme.spacing(2),
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F3FE",
    transition: "all 0.3s ease-in",
    "&:hover": {
      transform: "translateY(-8px)",
      animation: `${fadeIn} 1.5s ease-in-out`,
    },
    [theme.breakpoints.down("sm")]: {
      width: "clamp(240px, 85vw, 300px)",
      height: "clamp(400px, 80vh, 440px)",
      padding: theme.spacing(1.5),
    },
  }));
  
  const ImageWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    aspectRatio: "3/2",
    [theme.breakpoints.down("sm")]: {
      aspectRatio: "3/2",
    },
  }));
  
  const TextWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    mt: theme.spacing(0.5),
    minHeight: "clamp(28px, 4vh, 32px)",
    [theme.breakpoints.down("sm")]: {
      minHeight: "clamp(24px, 3.5vh, 28px)",
    },
  }));
  
  const AdvisoryService = ({ serviceName = "Advisory Services" }) => {
    const [imageError, setImageError] = useState({});
    const theme = useTheme(); // Access theme
  
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
            height: "clamp(150px, 30vh, 250px)",
          }}
        >
          <Image
            src={heroImage}
            alt="Gradient purple background for advisory services"
            fill
            style={{
              borderRadius: theme.shape.borderRadius, // Corrected from theme.radius
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
                borderRadius: theme.shape.borderRadius,
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
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              textAlign: "left",
              fontSize: "clamp(1.25rem, 5vw, 2.5rem)",
              px: theme.spacing(2),
              pl: {
                xs: theme.spacing(2),
                sm: theme.spacing(4),
                md: theme.spacing(6),
              },
            }}
          >
            {serviceName.toUpperCase()}
          </Typography>
        </Box>
  
        {/* Advisory Cards Section */}
        <Box
          sx={{
            px: {
              xs: theme.spacing(2),
              sm: theme.spacing(3),
              md: theme.spacing(4),
            },
            py: {
              xs: theme.spacing(4),
              md: theme.spacing(6),
            },
            backgroundColor: "#F9F3FE",
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{
                xs: theme.spacing(2),
                sm: theme.spacing(3),
                md: theme.spacing(4),
              }}
              justifyContent="center"
            >
              {ADVISORY.map((course, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <InfoCard>
                    <ImageWrapper>
                      <Image
                        src={course.img}
                        alt={course.alt}
                        width={240}
                        height={160}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: theme.shape.borderRadius,
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
                            borderRadius: theme.shape.borderRadius,
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
                        mt: theme.spacing(1.5),
                        fontWeight: "bold",
                        color: "#49326b",
                        textAlign: "center",
                        fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                        minHeight: "clamp(40px, 5vh, 48px)",
                      }}
                    >
                      {course.title}
                    </Typography>
                    <TextWrapper>
                      <FiberManualRecordIcon
                        sx={{
                          pr: theme.spacing(0.5),
                          mt: theme.spacing(0.5),
                          color: "#49326b",
                          fontSize: "1rem",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#49326b",
                          textAlign: "left",
                          fontSize: "clamp(0.875rem, 2vw, 1rem)",
                          flex: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {course.subtitle}
                      </Typography>
                    </TextWrapper>
                    <TextWrapper>
                      <FiberManualRecordIcon
                        sx={{
                          pr: theme.spacing(0.5),
                          mt: theme.spacing(0.5),
                          color: "#49326b",
                          fontSize: "1rem",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#49326b",
                          textAlign: "left",
                          fontSize: "clamp(0.875rem, 2vw, 1rem)",
                          flex: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {course.description}
                      </Typography>
                    </TextWrapper>
                    <TextWrapper>
                      <FiberManualRecordIcon
                        sx={{
                          pr: theme.spacing(0.5),
                          mt: theme.spacing(0.5),
                          color: "#49326b",
                          fontSize: "1rem",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#49326b",
                          textAlign: "left",
                          fontSize: "clamp(0.875rem, 2vw, 1rem)",
                          flex: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
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
                mt: {
                  xs: theme.spacing(3),
                  md: theme.spacing(4),
                },
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