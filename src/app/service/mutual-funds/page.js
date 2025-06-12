"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// CORRECTED: keyframes should be imported from @emotion/react
import { keyframes } from "@emotion/react";
import { border, styled } from "@mui/system";

// UPDATED: Using Next.js's optimized Image component
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// Your Asset Imports (cleaned up unused imports)
import InsuranceImage from "../../../assets/23-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import GetMoreButton from "../../components/Button/page"; // Assuming this is the correct path

// --- STYLED COMPONENTS ---

const fadeIn = keyframes`
  0% { transform: scale(1.02); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f3fe",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const InfoCard = styled(Box)(({ image }) => ({
  position: "relative",
  maxWidth: "300px",
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
  animation: `${fadeIn} 6s ease-in-out infinite alternate`,
  "&:hover": {
    transition: "all 0.55s ease-in",
    boxShadow: `0 20px 40px #49326b`,
    // CORRECTED: Fixed the background gradient syntax
    border: `linear-gradient(135deg, #49326b 0%, rgba(210, 152, 228, 0.25) 100%)`,
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 900,
  color: "#49326b",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
}));

const SectionTitle1 = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: 900,
  textAlign: "left",
  marginBottom: "10px",
  backgroundColor: "#f9f3fe",
  padding: "10px",
  borderRadius: "8px",
  color: "#49326b",
}));

const Point = styled(Typography)({
  color: "#49326b",
  marginBottom: "6px",
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
});

const Point1 = styled(Typography)({
  color: "#49326b",
  marginBottom: "6px",
  fontSize: "1rem",
});

const StyledDivider = styled(Divider)`
  background-color: #e4d4fa;
  height: 6px;
  width: 100%;
  margin: 50px 0;
`;

const MutualFundsSection = ({ serviceName }) => {
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
          MUTUAL FUNDS
        </Typography>
      </Box>
      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent={"space-between"}>
            {/* Key Benefits */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px",
                  justifyContent: "center",
                }}
              >
                <SectionTitle>Key Benefits</SectionTitle>
                <Box sx={{ mt: 2 }}>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Diversification across sectors/assets.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Professional fund management.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Suitable for every risk profile.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Liquidity and transparency.
                  </Point>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* UPDATED: Using the <Image> component */}
                <Image
                  src={InsuranceImage}
                  alt="Mutual Funds Illustration"
                  width={400}
                  height={400}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <StyledDivider />

          <Grid container spacing={6} justifyContent={"center"}>
            {/* SIP */}
            <Grid item xs={12} sm={6} md={4}>
              <InfoCard>
                <SectionTitle1>SIP (Systematic Investment Plan)</SectionTitle1>

                <Point1>
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />
                  Small, regular investments (monthly/weekly).
                </Point1>

                <Point1>
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />
                  Builds discipline and long-term wealth.
                </Point1>

                <Point1>
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />
                  Rupee cost averaging benefit.
                </Point1>

                <Point1>
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />
                  Great for salaried individuals.
                </Point1>
              </InfoCard>
            </Grid>

            {/* Lumpsum */}
            <Grid item xs={12} sm={6} md={4}>
              <InfoCard>
                <SectionTitle1>Lumpsum Investment</SectionTitle1>
                <Point1>
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />{" "}
                  One-time bulk investment (as & when you get surplus).
                </Point1>
                <Point1>
                  {" "}
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />{" "}
                  Best suited during market dips or windfalls.
                </Point1>
                <Point1>
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />
                  Potential for higher returns in long-term bull phases.
                </Point1>
              </InfoCard>
            </Grid>

            {/* SWP */}
            <Grid item xs={12} sm={12} md={4}>
              {" "}
              {/* Stacks cleanly on small screens */}
              <InfoCard image={aboutImg1}>
                <SectionTitle1>SWP (Systematic Withdrawal Plan)</SectionTitle1>
                <Point1>
                  {" "}
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />
                  Regular income from invested funds.
                </Point1>
                <Point1>
                  {" "}
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />{" "}
                  Ideal for retirees or passive income seekers.
                </Point1>
                <Point1>
                  <FiberManualRecordIcon
                    sx={{
                      mr: 1,
                      mt: 0.25,
                      color: "#49326b",
                      fontSize: "0.7rem",
                      flexShrink: 0,
                    }}
                  />{" "}
                  Capital remains invested while income is generated.
                </Point1>
              </InfoCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
            <GetMoreButton />
          </Box>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default MutualFundsSection;
