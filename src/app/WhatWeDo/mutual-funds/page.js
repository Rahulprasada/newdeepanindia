"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Image from "next/image";
import InsuranceImage from "../../../assets/23-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

const MutualFundsSection = ({ serviceName }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f3fe",
        padding: { xs: 2, sm: 4 },
        borderRadius: "1px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Key Benefits */}
          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                alignItems: "left",
                padding: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  fontWeight: 900,
                  color: "#49326b",
                }}
              >
                Key Benefits
              </Typography>
              <Box sx={{ p: 3, marginTop: "10px" }}>
                <Typography
                  sx={{
                    color: "#49326b",
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RadioButtonCheckedIcon
                    sx={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Diversification across sectors/assets.
                </Typography>
                <Typography
                  sx={{
                    color: "#49326b",
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RadioButtonCheckedIcon
                    sx={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Professional fund management.
                </Typography>
                <Typography
                  sx={{
                    color: "#49326b",
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RadioButtonCheckedIcon
                    sx={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Suitable for every risk profile.
                </Typography>
                <Typography
                  sx={{
                    color: "#49326b",
                    marginBottom: "6px",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RadioButtonCheckedIcon
                    sx={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Liquidity and transparency.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={InsuranceImage}
                alt="Mutual Funds Illustration"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "12px",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        {/* Divider */}
        <Divider
          sx={{
            backgroundColor: "#25143f",
            height: "6px",
            width: "100%",
            margin: "0px 50px 50px 0px",
          }}
        />
        {/* Investment Options */}
        <Grid container spacing={4}>
          {/* SIP */}
          <Grid item xs={12} sm={6} md={2}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: "10px solid #e4d4fa",
                padding: "20px 20px",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
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
                  boxShadow: "0 20px 40px #49326b",
                  background:
                    "linear-gradient(135deg, #49326b 0%, rgba(210, 152, 228, 0.25) 100%)",
                  "& .feature-icon": {
                    transform: "scale(1.1)",
                    background:
                      "linear-gradient(45deg, #49326b, rgb(167, 103, 180))",
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
                padding: { xs: "20px 10px", sm: "20px 20px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.3rem" },
                  fontWeight: 900,
                  textAlign: "center",
                  marginBottom: "10px",
                  backgroundColor: "#f9f3fe",
                  padding: "10px",
                  borderRadius: "8px",
                  color: "#49326b",
                }}
              >
                SIP (Systematic Investment Plan)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box sx={{ pl: 1 }}>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Small, regular investments (monthly/weekly).
                  </Typography>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Builds discipline and long-term wealth.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Rupee cost averaging benefit.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Great for salaried individuals.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Lumpsum */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: "10px solid #e4d4fa",
                padding: "20px 20px",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
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
                  boxShadow: "0 20px 40px #49326b",
                  background:
                    "linear-gradient(135deg, #49326b 0%, rgba(210, 152, 228, 0.25) 100%)",
                  "& .feature-icon": {
                    transform: "scale(1.1)",
                    background:
                      "linear-gradient(45deg, #49326b, rgb(167, 103, 180))",
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
                padding: { xs: "20px 10px", sm: "20px 20px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.3rem" },
                  fontWeight: 900,
                  textAlign: "center",
                  marginBottom: "10px",
                  backgroundColor: "#f9f3fe",
                  padding: "10px",
                  borderRadius: "8px",
                  color: "#49326b",
                }}
              >
                📌 Lumpsum Investment
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box sx={{ pl: 1 }}>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - One-time bulk investment (as & when you get surplus).
                  </Typography>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Best suited during market dips or windfalls.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Potential for higher returns in long-term bull phases.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* SWP */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: "10px solid #e4d4fa",
                padding: "20px 20px",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
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
                  boxShadow: "0 20px 40px #49326b",
                  background:
                    "linear-gradient(135deg, #49326b 0%, rgba(210, 152, 228, 0.25) 100%)",
                  "& .feature-icon": {
                    transform: "scale(1.1)",
                    background:
                      "linear-gradient(45deg, #49326b, rgb(167, 103, 180))",
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
                padding: { xs: "20px 10px", sm: "20px 20px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.3rem" },
                  fontWeight: 900,
                  textAlign: "center",
                  marginBottom: "10px",
                  backgroundColor: "#f9f3fe",
                  padding: "10px",
                  borderRadius: "8px",
                  color: "#49326b",
                }}
              >
                📌 SWP (Systematic Withdrawal Plan)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box sx={{ pl: 1 }}>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Regular income from invested funds.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Ideal for retirees or passive income seekers.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#49326b",
                      marginBottom: "6px",
                      fontSize: "1rem",
                    }}
                  >
                    - Capital remains invested while income is generated.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MutualFundsSection;
