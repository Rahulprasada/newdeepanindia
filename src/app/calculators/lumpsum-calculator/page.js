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
import { useRouter, usePathname } from "next/navigation";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { styled, keyframes } from "@mui/system"; // USE MUI's styled utility

// Register Chart.js components
ChartJS.register(ArcElement, ChartTooltip, Legend);

// Define keyframes for the fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled component for the main container box, matching SIPCalculator
const MainBox = styled(Box)(({ theme }) => ({
  padding: '60px 0',
  backgroundColor: '#f9f3fe',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '30px 0',
  },
}));

// Styled component for the main divider, matching SIPCalculator
const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: '#49326b',
  height: '6px',
  width: '100%',
  margin: '50px 0',
  [theme.breakpoints.down('sm')]: {
    margin: '30px 0',
  },
}));

const LumpsumCalculator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State variables for calculator inputs
  const [investment, setInvestment] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);

  // Function to handle navigation
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
        router.push(`/#${anchorId}`);
      }
    } else {
      router.push(href);
    }
  };

  // Handlers for TextField input changes
  const handleInvestmentChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInvestment(value === "" ? 0 : Number(value));
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setInterestRate(value === "" ? 0 : Number(value));
  };

  const handleYearsChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setYears(value === "" ? 0 : Number(value));
  };

  // Calculations for Lumpsum, memoized for performance
  const { totalInvested, maturityAmount, totalReturns } = useMemo(() => {
    const rate = interestRate / 100;
    const calculatedTotalInvested = investment;
    const calculatedMaturityAmount =
      investment * Math.pow(1 + rate, years);
    const calculatedTotalReturns =
      calculatedMaturityAmount - calculatedTotalInvested;

    return {
      totalInvested: calculatedTotalInvested,
      maturityAmount: calculatedMaturityAmount.toFixed(2),
      totalReturns: calculatedTotalReturns > 0 ? calculatedTotalReturns.toFixed(2) : 0,
    };
  }, [investment, interestRate, years]);

  // Chart.js data configuration, memoized for performance
  const chartData = useMemo(() => ({
    labels: ["Invested", "Returns"],
    datasets: [
      {
        data: [Number(totalInvested), Number(totalReturns)],
        backgroundColor: ["#d32f2f", "#17307a"],
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
        position: isMobile ? "bottom" : "top",
        labels: {
          color: "#49326b",
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
            return `${label}: ₹${Number(value).toLocaleString('en-IN', {
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
        {/* Header Section */}
        <Box
          sx={{
            padding: { xs: "20px 0", md: "10px 0 10px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ArrowBackIosIcon
            sx={{
              cursor: "pointer",
              marginRight: { xs: "15px", sm: "20px" },
              color: "#49326b",
              fontSize: { xs: "24px", sm: "32px" },
            }}
            onClick={() => handleNavigation("/#calculator")}
          />
          <Typography
            sx={{
              fontWeight: 400,
              color: "#49326b",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              animation: `${fadeIn} 1s ease-in-out`,
              marginBottom: { xs: "0", sm: "20px" },
            }}
          >
            Lumpsum Investment Calculator
          </Typography>
        </Box>

        <StyledDivider sx={{ marginBottom: "40px" }} />

        {/* Calculator Main Content Area */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            padding: { xs: "20px", md: "40px" },
            backgroundColor: "#f9f3fe",
          }}
        >
          <Grid container spacing={4} sx={{width:'100%'}}>
            {/* Input Sliders and TextFields */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ backgroundColor: "#f9f3fe", padding: { xs: "10px", md: "50px" } }}>
                {/* Total Investment Input */}
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
                    Total Investment (₹)
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={investment}
                      onChange={handleInvestmentChange}
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
                    {investment < 1000 && (
                      <Tooltip title="Minimum value is ₹1,000">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={investment}
                  onChange={(e, val) => setInvestment(val)}
                  min={1000}
                  max={10000000}
                  step={1000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `₹${value.toLocaleString('en-IN')}`}
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
                  min={1}
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
                  min={1}
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
              md={6} // CORRECTED: Set to 6 to be side-by-side with inputs
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
              <Grid container spacing={10} justifyContent="center" sx={{ mt: { xs: 2, md: 4 }}}>
                {/* Invested Amount Card */}
                <Grid item xs={12} sm={6} md={4} sx={{maxWidth:'300px',width:'100%'}} >
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(204, 8, 8)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600, color: "#49326b" }}>
                        Invested Amount
                      </Typography>
                      <Typography variant="h5" align="center" sx={{ fontWeight: 700, color: "#49326b" }}>
                        ₹{Number(totalInvested).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Est. Returns Card */}
                <Grid item xs={12} sm={6} md={4}  sx={{maxWidth:'300px',width:'100%'}} >
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(22, 5, 85)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600, color: "#49326b" }}>
                        Est. Returns
                      </Typography>
                      <Typography variant="h5" align="center" sx={{ fontWeight: 700, color: "#49326b" }}>
                        ₹{Number(totalReturns).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Total Value Card */}
                <Grid item xs={12} sm={6} md={4}  sx={{maxWidth:'300px',width:'100%'}} >
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(20, 94, 42)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600, color: "#49326b" }}>
                        Total Value
                      </Typography>
                      <Typography variant="h5" align="center" sx={{ fontWeight: 700, color: "#49326b" }}>
                        ₹{Number(maturityAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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

export default LumpsumCalculator;