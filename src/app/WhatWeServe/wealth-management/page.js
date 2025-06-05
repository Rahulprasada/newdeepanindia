"use client";

import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import Image from "next/image";
import Handshake from "../../../assets/9-removebg-preview.png";

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

const WealthManagement = () => {
  return (
    <Box
      sx={{
        padding: { xs: "30px 0", sm: "60px 0" },
        backgroundColor: "#f9f3fe",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
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

        <Typography
          sx={{
            textAlign: "left",
            color: "#49326b",
            fontSize: { xs: "16px", sm: "22px" },
            marginBottom: { xs: "30px", sm: "40px" },
            fontWeight: 300,
          }}
        >
          Our comprehensive wealth management solutions are tailored for high-net-worth individuals and families. We offer:
        </Typography>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            backgroundColor:'#33197a',
            backgroundImage: `linear-gradient(rgba(73, 50, 107, 0.7), rgba(73, 50, 107, 0.7)), url(/assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: { xs: "20px 10px", sm: "40px 40px" },
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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
          }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  border: "2px solid white",
                  padding: "20px",
                  borderRadius: "16px",
                  animation: "slideIn 0.5s ease-in-out",
                  "@keyframes slideIn": {
                    from: { opacity: 0, transform: "translateY(-20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Stepper orientation="vertical" nonLinear>
                  {steps.map((step, index) => (
                    <Step key={index} active>
                      <StepLabel
                        icon={step.icon}
                        sx={{
                          "& .MuiStepIcon-root": {
                            color: "white", // Default icon color
                            "&.Mui-active": {
                              color: "yellow", // Color for active step icon
                            },
                          },
                          "& .MuiStepLabel-label": {
                            color: "white", // Label color
                            fontWeight: "bold",
                          },
                        }}
                      >
                        <Typography sx={{ color: "white", fontWeight: "bold" }}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={Handshake}
                  alt="handshake"
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    display: { xs: "none", sm: "block" },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "18px", sm: "28px" },
              fontWeight: "900",
              color: "white",
              marginTop: "20px",
              padding: "10px",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#e73ed1",
              },
            }}
          >
            With a strategic and holistic approach, we protect and grow your wealth over generations.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WealthManagement;