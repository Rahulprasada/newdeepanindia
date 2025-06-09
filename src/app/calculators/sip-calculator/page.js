"use client";

import React, { useState, useMemo } from "react";
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter, usePathname } from "next/navigation"; // For Next.js navigation
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { styled, keyframes } from "@mui/system"; // Correct import for styled and keyframes

// Register Chart.js components for use
ChartJS.register(ArcElement, ChartTooltip, Legend);

// Define keyframes for the fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled component for the main container box, replicating original Main2Box
const MainBox = styled(Box)(({ theme }) => ({
  padding: '60px 0', // Default padding for larger screens
  backgroundColor: '#f9f3fe',
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: { // media screen and (max-width: 600px)
    padding: '30px 0', // Adjusted padding for smaller screens
  },
}));

// Styled component for the main divider, replicating original StyledDivider
const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: '#49326b', // Color as per original
  height: '6px',
  width: '100%',
  margin: '50px 0', // Vertical margin as per original
  [theme.breakpoints.down('sm')]: { // media screen and (max-width: 600px)
    margin: '30px 0', // Smaller vertical margin for mobile
  },
}));

const SIPCalculator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check for mobile breakpoint

  // State variables for calculator inputs
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);

  // Function to handle navigation, including anchor links for Next.js
  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      const anchorId = href.substring(2);
      if (pathname === "/") {
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${anchorId}`); // Navigate to home and then scroll
      }
    } else {
      router.push(href); // Regular page navigation
    }
  };

  // Handlers for TextField input changes, with number-only validation
  const handleMonthlyInvestmentChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setMonthlyInvestment(value === "" ? 0 : Number(value));
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow numbers and decimal
    setInterestRate(value === "" ? 0 : Number(value));
  };

  const handleYearsChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setYears(value === "" ? 0 : Number(value));
  };

  // Calculations for SIP, memoized for performance
  const { totalInvested, maturityAmount, totalReturns } = useMemo(() => {
    const months = years * 12;
    const rate = interestRate / 100 / 12;

    // Handle zero or invalid input to prevent errors and show 0 for results
    const calculatedTotalInvested = monthlyInvestment * months;
    const calculatedMaturityAmount =
      years === 0 || monthlyInvestment === 0 || interestRate === 0
        ? 0
        : (
            monthlyInvestment *
            ((Math.pow(1 + rate, months) - 1) / rate) *
            (1 + rate)
          ).toFixed(2);
    const calculatedTotalReturns =
      calculatedMaturityAmount - calculatedTotalInvested;

    return {
      totalInvested: calculatedTotalInvested,
      maturityAmount: calculatedMaturityAmount,
      totalReturns: calculatedTotalReturns > 0 ? calculatedTotalReturns : 0, // Ensure returns are not negative
    };
  }, [monthlyInvestment, interestRate, years]);

  // Chart.js data configuration, memoized for performance
  const chartData = useMemo(() => ({
    labels: ["Invested", "Returns"],
    datasets: [
      {
        data: [totalInvested, Number(totalReturns)],
        backgroundColor: ["#d32f2f", "#17307a"], // Red for invested, deep blue for returns
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  }), [totalInvested, totalReturns]);

  // Chart.js options for responsiveness and customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? "bottom" : "top", // Legend position: bottom on mobile, top on desktop
        labels: {
          color: "#49326b", // Label color
          font: {
            size: isMobile ? 12 : 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage =
              total === 0 ? 0 : ((value / total) * 100).toFixed(0);
            return `${label}: ₹${Number(value).toLocaleString('en-IN', { // Format with Indian locale
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <MainBox>
      <Container maxWidth="lg">
        {/* Header Section: Back button and Title */}
        <Box
          sx={{
            padding: { xs: "20px 0", md: "10px 0 10px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // Align items vertically
          }}
        >
          <ArrowBackIosIcon
            sx={{
              cursor: "pointer",
              marginRight: { xs: "15px", sm: "20px" },
              color: "#49326b",
              fontSize: { xs: "24px", sm: "32px" }, // Responsive icon size
            }}
            onClick={() => handleNavigation("/#calculator")} // Navigate to calculator section
          />
          <Typography
            sx={{
              fontWeight: 400,
              color: "#49326b",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              animation: `${fadeIn} 1s ease-in-out`, // Apply fade-in animation
              marginBottom: { xs: "0", sm: "20px" }, // Adjust margin for alignment
            }}
          >
            Systematic Investment Plan Calculator
          </Typography>
        </Box>

        <StyledDivider sx={{ marginBottom: "40px" }} />

        {/* Calculator Main Content Area */}
        <Box
          sx={{
            display: "flex",
            width:'100%',
            justifyContent:'space-between',
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            padding: { xs: "20px", md: "40px" }, // Responsive padding
            backgroundColor: "#f9f3fe", // Background for the main calculation box
          }}
        >
          <Grid container spacing={4} sx={{maxWidth:'1300px',width:'100%'}}>
            {/* Input Sliders and TextFields */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ backgroundColor: "#f9f3fe", padding: { xs: "10px", md: "50px" } }}>
                {/* Monthly Investment Input */}
                <Box
                  sx={{
                    display: "flex",
                    maxWidth:'1600px',
                    width:'100%',
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: { xs: "10px", md: "20px" },
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b", fontSize: { xs: "0.9rem", sm: "1.1rem" } }}
                  >
                    Monthly Investment (₹)
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={monthlyInvestment}
                      onChange={handleMonthlyInvestmentChange}
                      size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                          fontSize: { xs: "0.9rem", sm: "1rem" }
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ color: "#49326b", mr: 0.5 }}>₹</Typography>
                        ),
                      }}
                    />
                    {monthlyInvestment < 1000 && (
                      <Tooltip title="Minimum value is ₹1,000">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={monthlyInvestment}
                  onChange={(e, val) => setMonthlyInvestment(val)}
                  min={1000} // Minimum investment is 1000
                  max={200000}
                  step={1000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `₹${value.toLocaleString('en-IN')}`} // Format label as currency
                />

                {/* Expected Return Rate Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: { xs: "10px", md: "20px" },
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b", fontSize: { xs: "0.9rem", sm: "1.1rem" } }}
                  >
                    Expected Return Rate (%)
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={interestRate}
                      onChange={handleInterestRateChange}
                      size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                          fontSize: { xs: "0.9rem", sm: "1rem" }
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <Typography sx={{ color: "#49326b", ml: 0.5 }}>%</Typography>
                        ),
                      }}
                    />
                    {interestRate < 1 && (
                      <Tooltip title="Minimum value is 1%">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(e, val) => setInterestRate(val)}
                  min={1} // Minimum interest rate is 1%
                  max={30}
                  step={0.1}
                  valueLabelDisplay="auto"
                />

                {/* Time Period (Years) Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: { xs: "10px", md: "20px" },
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b", fontSize: { xs: "0.9rem", sm: "1.1rem" } }}
                  >
                    Time Period (Years)
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={years}
                      onChange={handleYearsChange}
                      size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                          fontSize: { xs: "0.9rem", sm: "1rem" }
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <Typography sx={{ color: "#49326b", ml: 0.5 }}>years</Typography>
                        ),
                      }}
                    />
                    {years < 1 && (
                      <Tooltip title="Minimum value is 1 year">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={years}
                  onChange={(e, val) => setYears(val)}
                  min={1} // Minimum time period is 1 year
                  max={30}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value} years`}
                />
              </CardContent>
            </Grid>

            {/* Pie Chart */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "80%", md: "500px" },
                  height: { xs: "250px", sm: "300px", md: "300px" },
                  maxWidth: "1000px",
                }}
              >
                <Pie data={chartData} options={chartOptions} />
              </Box>
            </Grid>

            {/* Summary Cards */}
            <Grid item xs={12} sx={{maxWidth:'1300px',width:'100%'}}>
              <Grid container spacing={10} sx={{ mt: { xs: 2, md: 4 } }}> {/* Adjusted margin top */}
                {/* Invested Amount Card */}
                <Grid item xs={12} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(204, 8, 8)", // Red border
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px", // Added border-radius
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Invested Amount
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Number(totalInvested).toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Est. Returns Card */}
                <Grid item xs={12} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(22, 5, 85)", // Deep blue border
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px", // Added border-radius
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Est. Returns
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Number(totalReturns).toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Total Value Card */}
                <Grid item xs={12} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(20, 94, 42)", // Green border
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px", // Added border-radius
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Total Value
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Number(maturityAmount).toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MainBox>
  );
};

export default SIPCalculator;
