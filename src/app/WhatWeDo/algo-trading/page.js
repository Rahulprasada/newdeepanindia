"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import styled from "styled-components";
import financial1 from "../../../assets/18-removebg-preview.png";
import financial2 from "../../../assets/19-removebg-preview.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AlbumIcon from "@mui/icons-material/Album";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { keyframes } from "@emotion/react";
import Image from "next/image";

const AlgoTrading = ({ serviceName }) => {
  const algos = [
    {
      title: "Stock SIP (Algo-Based) Automated SIP into hand-picked stocks.",
      description: "Custom frequency & amount.",
      audience: "Eliminates emotional bias.",
      img: financial1,
      alt: "Robot hand placing coins regularly into stocks.",
    },
    {
      title:
        "Stock Bag for Lumpsum (Like Smallcase) Themed portfolios value, growth, sectoral.",
      description: " Lumpsum investment, algorithmically selected.",
      audience: "One-click rebalancing and exit.",
      img: financial2,
      alt: "Portfolio dashboard UI with smallcase-style stock groups.",
    },
  ];
  return (
    <Box sx={{ px: 2, py: 4,backgroundColor:'#fff' }}>
      <Container maxWidth="slg">
        <Grid container spacing={3}>
          {algos.map((course, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <InfoCard>
                <ImageWrapper>
                  <Image
                    width={400}
                    height={400}
                    src={course.img}
                    alt={course.alt}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
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
                    display: "flex",
                    alignItems: "center",
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
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <FiberManualRecordIcon
                      style={{ paddingRight: "10px", color: "#49326b" }}
                    />
                    <Typography
                      sx={{
                        mt: 1,
                        color: "#49326b",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    >
                      {course.description}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <FiberManualRecordIcon
                      style={{ paddingRight: "10px", color: "#49326b" }}
                    />
                    <Typography
                      sx={{
                        mt: 1,
                        color: "#49326b",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
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
      </Container>
    </Box>
  );
};

export default AlgoTrading;

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
    background: `linear-gradient(135deg, #49326b 0%, #rgba(210, 152, 228, 0.25)00%)`,
    "& .feature-icon": {
      transform: "scale(1.1)",
      background: `linear-gradient(45deg, #49326b,rgb(167, 103, 180))`,
    },
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
