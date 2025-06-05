"use client";

import React from "react";
import Box from '@mui/material/Box';
import { keyframes } from "@mui/system";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AlbumIcon from "@mui/icons-material/Album";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import financial1 from "../../../assets/20-removebg-preview.png";
import financial2 from "../../../assets/21-removebg-preview.png";
import financial3 from "../../../assets/22-removebg-preview.png";
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';

const TrainingInFinancialMarketing = ({ serviceName }) => {
  const courses = [
    {
      title: "Wise Investor Course",
      description:
        "Beginner-friendly course covering savings, budgeting, mutual funds, and basic stock investing.",
      audience: "Perfect for: Students, Working Professionals, Housewives, Retirees",
      img: financial1,
      alt: "Student at laptop learning finance",
    },
    {
      title: "Smart Trading for Wealth",
      description:
        "Intermediate-level program focusing on stock & index trading, technical analysis, charting tools, and risk management.",
      audience: "Includes hands-on learning with live market sessions.",
      img: financial2,
      alt: "Candlestick chart with annotations",
    },
    {
      title: "Pro Trader for Full-time Career",
      description:
        "Advanced training in professional trading systems, trader psychology, capital management, and option strategies.",
      audience:
        "Covers derivatives, intraday/swing trading, and includes mentorship & placement support.",
      img: financial3,
      alt: "Dual-screen setup, trader analyzing markets",
    },
  ];

  return (
    <Box sx={{ px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 }, backgroundColor: '#fff' }}>
      <Container maxWidth="slg">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <InfoCard>
                <ImageWrapper>
                  <Image
                    src={course.img}
                    alt={course.alt}
                    style={{
                      width: "40%",
                      height: "auto",
                      borderRadius: "16px",
                      animation: "imageFloat 3s ease-in-out infinite alternate",
                    }}
                  />
                </ImageWrapper>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#49326b"
                  sx={{ 
                    mt: { xs: 1, sm: 2 }, 
                    display: "flex", 
                    alignItems: "center",
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }
                  }}
                >
                  <AlbumIcon sx={{ 
                    paddingRight: "10px", 
                    color: "#49326b", 
                    fontSize: { xs: "1.5rem", sm: "1.75rem" } 
                  }} />
                  {course.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    mt: { xs: 0.5, sm: 1 },
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ 
                      paddingRight: "8px", 
                      color: "#49326b", 
                      fontSize: { xs: "1rem", sm: "1.25rem" } 
                    }}
                  />
                  <Typography 
                    sx={{ 
                      color: "#49326b", 
                      fontSize: { xs: "0.875rem", sm: "1rem" } 
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
                    justifyContent: "flex-start",
                    mt: { xs: 0.5, sm: 1 },
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ 
                      paddingRight: "8px", 
                      color: "#49326b", 
                      fontSize: { xs: "1rem", sm: "1.25rem" } 
                    }}
                  />
                  <Typography 
                    sx={{ 
                      color: "#49326b", 
                      fontSize: { xs: "0.875rem", sm: "1rem" } 
                    }}
                  >
                    {course.audience}
                  </Typography>
                </Box>
              </InfoCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

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
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const InfoCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  border: "10px solid #e4d4fa",
  padding: { xs: "15px 10px", sm: "20px", md: "30px" },
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  animation: `${fadeIn} 6s ease-in-out infinite alternate`,
  "&:hover": {
    transition: "all 0.55s ease-in",
    boxShadow: "0 20px 40px #49326b",
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
}));

const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivider = styled(Divider)`
  background-color: #ffffff;
  height: 6px;
  width: 100%;
`;

export default TrainingInFinancialMarketing;