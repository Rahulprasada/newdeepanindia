"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import Image from "next/image";
import InsuranceImage from "../../../assets/23-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import sip from "../../../assets/about-sip.png";
import lumpsum from "../../../assets/lumpsum-removebg-preview.png";
import swp from "../../../assets/swp-removebg-preview.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import GetMoreButton from "../../components/Button/page";

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

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f3fe",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

// Styled card
const InfoCard = styled(Box)(({ image }) => ({
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 900,
  color: "#49326b",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
}));
const Point = styled(Typography)({
  color: "#49326b",
  marginBottom: "6px",
  fontSize: "1.5rem",
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
  margin: 0px 50px 50px 0px;
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
            left: "30%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            textAlign: "center",
            fontSize: {
              xs: "30px", // mobile
              sm: "38px", // small tablets
              md: "40px", // medium devices
              lg: "50px", // desktop
            },
            px: 2,
          }}
        >
          MUTUAL FUNDS
        </Typography>
      </Box>

      <SectionWrapper>
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
                <SectionTitle>Key Benefits</SectionTitle>
                <Box sx={{ p: 3, marginTop: "10px" }}>
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
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          {/* SIP */}
          <StyledDivider />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={2}>
              <InfoCard sx={{width:'350px'}}>
                <SectionTitle1>SIP (Systematic Investment Plan)</SectionTitle1>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ pl: 1 }}>
                    <Point1>
                      - Small, regular investments (monthly/weekly).
                    </Point1>
                    <Point1>- Builds discipline and long-term wealth.</Point1>
                    <Point1>- Rupee cost averaging benefit.</Point1>
                    <Point1>- Great for salaried individuals.</Point1>
                  </Box>
                </Box>
              </InfoCard>
            </Grid>

            {/* Lumpsum */}
            <Grid item xs={12} sm={6} md={2}>
              <InfoCard sx={{width:'350px'}}>
                <SectionTitle1>Lumpsum Investment</SectionTitle1>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ pl: 1 }}>
                    <Point1>
                      - One-time bulk investment (as & when you get surplus).
                    </Point1>
                    <Point1>
                      - Best suited during market dips or windfalls.
                    </Point1>
                    <Point1>
                      - Potential for higher returns in long-term bull phases.
                    </Point1>
                  </Box>
                </Box>
              </InfoCard>
            </Grid>

            {/* SWP */}
            <Grid item xs={12} sm={6} md={2}>
              <InfoCard image={aboutImg1} sx={{width:'350px'}}>
                <SectionTitle1>SWP (Systematic Withdrawal Plan)</SectionTitle1>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ pl: 1 }}>
                    <Point1>- Regular income from invested funds.</Point1>
                    <Point1>
                      - Ideal for retirees or passive income seekers.
                    </Point1>
                    <Point1>
                      - Capital remains invested while income is generated.
                    </Point1>
                  </Box>
                </Box>
              </InfoCard>
            </Grid>
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
      </SectionWrapper>
    </>
  );
};

export default MutualFundsSection;
