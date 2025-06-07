"use client";

import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import financial1 from "../../../assets/18-removebg-preview.png";
import financial2 from "../../../assets/19-removebg-preview.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import GetMoreButton from "../../components/Button/page";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

import Image from "next/image"; // Add next/image

const AlgoTrading = ({ serviceName }) => {
  const algos = [
    {
      title: "Stock SIP",
      subtitle: "Automated SIP into handpicked stocks & ETFs.",
      description: "Custom frequency & amount.",
      audience: "Eliminates emotional bias.",
      desc: "Minimum as low as Rs.1000 p.m.",
      img: financial1,
      alt: "Robot hand placing coins regularly into stocks.",
    },
    {
      title: "Stock Bags",
      subtitle: "Algorithmically selected portfolios.",
      description: "Can be averaged on Dips and traded as a basket.",
      audience: "Auto rebalancing and exit.",
      desc: "Starts from Rs.10000 to any amount.",
      img: financial2,
      alt: "Portfolio dashboard UI with smallcase-style stock groups.",
    },
    {
      title: "Day Trading and Positional",
      subtitle: "Fully automated trading in stocks, options and commodities.",
      description: "Medium to high risk with moderate to higher rewards.",
      audience: "Uses delta-neutral, trend-following, and hybrid strategies.",
      desc: "Build your own or deploy our ready-made strategies.",
      img: financial2,
      alt: "Portfolio dashboard UI with smallcase-style stock groups.",
    },
  ];

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
          ALGO TRADING
        </Typography>
      </Box>
      <Box sx={{ px: 2, py: 4,backgroundColor:'#F9F3FE'  }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {/* Key Benefits */}
            <Grid item xs={12} sm={8} md={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                <SectionTitle>Key Benefits</SectionTitle>
                <Box sx={{ p: 3, marginTop: "10px" }}>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Speed & Efficiency: Executes trades in milliseconds, faster
                    than any human.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Accuracy: Reduces human errors by following set rules and
                    strategies.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Back testing: Allows testing strategies on historical data
                    before going live.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Emotion-Free Trading: Eliminates decisions driven by fear or
                    greed.
                  </Point>
                  <Point>
                    <RadioButtonCheckedIcon
                      style={{ paddingRight: "10px", fontSize: "35px" }}
                    />
                    Multiple Markets: Can trade in multiple instruments and
                    segments
                  </Point>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={financial2}
                  alt="algo trading"
                  width={500}
                  height={500} // Add height to match maxWidth for proper aspect ratio
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          {/* SIP */}
          <StyledDivider />
          <Grid container spacing={3}>
            {algos.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <InfoCard sx={{width:'350px'}}>
                  <Typography
                    fontWeight="bold"
                    color="#49326b"
                    sx={{
                      mt: 2,
                      borderRadius: "10px",
                      fontSize: "1.2rem",
                      textAlign: "center",
                    }}
                  >
                    {course.title}
                  </Typography>

                  <Box
                    sx={{
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
                        {course.desc}
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
              marginTop: "30px",
            }}
          >
            <GetMoreButton />
          </Box>
        </Container>
      </Box>
    </>
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
const Point = styled(Typography)({
  color: "#49326b",
  marginBottom: "6px",
  fontSize: "1rem",
});
const InfoCard = styled(Box)(({ image }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  marginTop: "40px",
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
  background-color: #e4d4fa;
  height: 6px;
  /* margin: 50px; */
  width: 100%;
`;
