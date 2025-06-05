"use client";

import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import financial1 from "../../../assets/14-removebg-preview.png";
import financial2 from "../../../assets/15-removebg-preview.png";
import financial3 from "../../../assets/16-removebg-preview.png";
import financial4 from "../../../assets/17-removebg-preview.png";

const AdvisoryService = ({ serviceName }) => {
  const advisory = [
    {
      title:
        "Short & Medium-Term Stock Bags SIP & Lumpsum options from ₹5,000 to ₹50,000.",
      description: "Actively managed with averaging & timely churning.",
      audience: "Ideal for beginners and progressive investors.",
      img: financial1,
      alt: "Stock bag with multiple logos and a SIP chart.",
    },
    {
      title: "Long-Term Stock Bags for HNIs Starting from ₹10,000 to any amount.",
      description: "Blue-chip and growth picks.",
      audience: "Managed with periodic review and realignment.",
      img: financial2,
      alt: "Tree growing from coins with long-term tag.",
    },
    {
      title:
        "Momentum Delivery-Based Trading (e.g., MTF) Short-term high-potential trades.",
      description: "Uses margin/leveraged funds with strong risk management.",
      audience: "Regular alerts and exit strategies.",
      img: financial4,
      alt: "Speedometer with 'Momentum' label on dial",
    },
    {
      title:
        "Swing Trading – Index & Futures (With Hedges) 3–10 day trading strategies.",
      description: "Includes hedge-based risk reduction.",
      audience: "Suits active traders seeking calculated exposure.",
      img: financial3,
      alt: "Swing graph with hedge overlay (put/call icons)",
    },
  ];

  return (
    <Box sx={{ px: 2, py: 4, backgroundColor:'#fff'}}>
      <Container maxWidth="lg" sx={{display:'flex',flexDirection:'row'}}>
        <Grid container spacing={3}>
          {advisory.map((course, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Box
                sx={{
                  position: "relative",
                  border: "10px solid #e4d4fa",
                  padding: { xs: "20px 10px", sm: "20px" },
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: {xs:'column',sm:'column',md:'row'},
                  justifyContent: "center",
                  animation: "fadeIn 6s ease-in-out infinite alternate",
                  "@keyframes fadeIn": {
                    "0%": {
                      transform: "scale(1.02)",
                    },
                    "50%": {
                      transform: "scale(1.03)",
                    },
                    "100%": {
                      transform: "scale(1)",
                    },
                  },
                  "&:hover": {
                    transition: "all 0.55s ease-in",
                    boxShadow: "0 5px 5px #49326b",
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
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={course.img}
                    alt={course.alt}
                    width={400}
                    height={270}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "16px",
                      animation: "imageFloat 3s ease-in-out infinite alternate",
                    }}
                    sx={{
                      "@keyframes imageFloat": {
                        "0%": {
                          transform: "translateY(0px)",
                        },
                        "50%": {
                          transform: "translateY(-10px)",
                        },
                        "100%": {
                          transform: "translateY(0px)",
                        },
                      },
                      sm: {
                        width: "100%",
                        height: "auto",
                      },
                    }}
                  />
                </Box>
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
                      sx={{ paddingRight: "10px", color: "#49326b" }}
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
                      sx={{ paddingRight: "10px", color: "#49326b" }}
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
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvisoryService;