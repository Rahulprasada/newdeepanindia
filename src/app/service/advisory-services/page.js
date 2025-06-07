"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { keyframes } from "@emotion/react";
import Container from "@mui/material/Container";
import React from "react";
import financial1 from "../../../assets/14-removebg-preview.png";
import financial2 from "../../../assets/15-removebg-preview.png";
import financial3 from "../../../assets/16-removebg-preview.png";
import financial4 from "../../../assets/17-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GetMoreButton from "../../components/Button/page";
import Image from "next/image"; // Add next/image

const advisory = [
  {
    title: "Short & Medium-Term Stock Bags",
    subtitle: "SIP & Lumpsum options from ₹5,000 to ₹50,000.",
    description: "Actively managed with averaging & timely churning.",
    audience: "Ideal for beginners and progressive investors.",
    img: financial1,
    alt: "Stock bag with multiple logos and a SIP chart.",
  },
  {
    title: "Long-Term Stock Bags for HNIs",
    subtitle: "Starting from ₹1,00,000 to any amount.",
    description: "Blue-chip and growth picks.",
    audience: "Managed with periodic review and realignment.",
    img: financial2,
    alt: "Tree growing from coins with long-term tag.",
  },
  {
    title: "Momentum Delivery-Based Trading",
    subtitle: "Short-term high-potential trades.",
    description: "Uses margin/leveraged funds with strong risk management.",
    audience: "Regular alerts and exits on time.",
    img: financial4,
    alt: "Speedometer with “Momentum” label on dial",
  },
  {
    title: "Swing Trading – Index, Futures & options",
    subtitle: "3 days to 1 month hold",
    description: "Includes hedge-based risk reduction.",
    audience: "Suits active traders seeking calculated exposure.",
    img: financial3,
    alt: "Swing graph with hedge overlay (put/call icons)",
  },
];

const AdvisoryService = ({ serviceName }) => {
  return (
    <>
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Image */}
        <Image
          src={aboutImg1}
          alt="SWP Illustration"
          style={{
            borderRadius: "8px",
            objectFit: "cover",
            width: "100%",
            height: "250px",
          }}
        />

        {/* Text on Image */}
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            textAlign: "center",
            fontSize: {
              xs: "30px", 
              sm: "38px", 
              md: "40px", 
              lg: "50px", 
            },
            px: 2,
          }}
        >
         ADVISORY SERVICES
        </Typography>
      </Box>

      <Box sx={{ px: 2, py: 4 ,backgroundColor:'#F9F3FE'}}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {advisory.map((course, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <InfoCard >
                  <ImageWrapper>
                    <Image
                      src={course.img}
                      alt={course.alt}
                      width={300} 
                      height={270} 
                      style={{
                        width: "100%",
                        height: "270px",
                        borderRadius: "16px",
                        animation: `${imageFloat} 3s ease-in-out infinite alternate`,
                      }}
                    />
                  </ImageWrapper>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#49326b"
                    sx={{
                      mt: 2,
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    {course.title}
                  </Typography>

                  <Box
                    sx={{
                      padding: "20px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "self-start",
                        justifyContent: "left",
                      }}
                    >
                      <FiberManualRecordIcon
                        style={{
                          paddingRight: "10px",
                          color: "#49326b",
                          marginTop: "10px",
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 1,
                          color: "#49326b",
                        }}
                      >
                        {course.subtitle}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "self-start",
                        justifyContent: "left",
                      }}
                    >
                      <FiberManualRecordIcon
                        style={{
                          paddingRight: "10px",
                          color: "#49326b",
                          marginTop: "10px",
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 1,
                          color: "#49326b",
                        }}
                      >
                        {course.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "self-start",
                        justifyContent: "left",
                      }}
                    >
                      <FiberManualRecordIcon
                        style={{
                          paddingRight: "10px",
                          color: "#49326b",
                          marginTop: "10px",
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 1,
                          color: "#49326b",
                        }}
                      >
                        {course.audience}
                      </Typography>
                    </Box>
                  </Box>
                </InfoCard>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GetMoreButton />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AdvisoryService;

const fadeIn = keyframes`
  0% {
    transform: scale(1.02);
    /* opacity: 0.7; */
  }
  50% {
    transform: scale(1.03);
    /* opacity: 0.9; */
  }
  100% {
    transform: scale(1);
    /* opacity: 1; */
  }
`;

const imageFloat = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const InfoCard = styled(Box)(({ image }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  border: "10px solid #e4d4fa",
  padding: "20px",
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  animation: `${fadeIn} 6s ease-in-out infinite alternate`,

  "&:hover": {
    transition: "all 0.55s ease-in",
    boxShadow: `0 20px 40px #49326b`,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  "@media (max-width: 600px)": {
    padding: "20px 10px",
  },
}));

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivider = styled(Divider)`
  background-color: #ffffff;
  height: 6px;
  /* margin: 50px; */
  width: 100%;
`;
