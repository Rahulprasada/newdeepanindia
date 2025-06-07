"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import AlternativeImage from "../../../assets/11-removebg-preview.png";
import GetMoreButton from "../../components/Button/page";
import Image from "next/image"; // Add next/image

const AlternativeInvestMentFunt = ({ serviceName }) => {
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
              xs: "20px", // mobile
              sm: "28px", // small tablets
              md: "40px", // medium devices
              lg: "50px", // desktop
            },
            px: 2,
          }}
        >
         ALTERNATE-INVESTMENT-FUNDS-(AIFS)
        </Typography>
      </Box>
      <Box sx={{ px: 2, py: 4,backgroundColor: "#F9F3FE"  }}>
        <Container maxWidth="lg">
          <InfoCard>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #f9f3fe",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "left",
                        marginBottom: "8px",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "#49326b", mt: "6px", mr: 1 }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="#49326b"
                      >
                        Structured funds for HNIs.
                      </Typography>
                    </Box>

                    {/* Smart Trading for Wealth */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "self-start",
                        justifyContent: "left",
                        marginBottom: "8px",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "#49326b", mt: "6px", mr: 1 }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="#49326b"
                      >
                        Diversification beyond traditional assets.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "self-start",
                        justifyContent: "left",
                        marginBottom: "8px",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "#49326b", mt: "6px", mr: 1 }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="#49326b"
                      >
                        Includes private equity, venture capital, hedge funds.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "self-start",
                        justifyContent: "left",
                        marginBottom: "8px",
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "#49326b", mt: "6px", mr: 1 }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="#49326b"
                      >
                        Minimum 1 Crore.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box sx={{ mt: 2, maxWidth: 300 }}>
                    <Image
                      src={AlternativeImage}
                      alt="Puzzle of different investment assets forming a portfolio."
                      width={300} // Match maxWidth
                      height={300} // Estimate height to maintain aspect ratio
                      style={{ width: "100%", borderRadius: 8 }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </InfoCard>
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

export default AlternativeInvestMentFunt;

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
  padding: "40px",
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
