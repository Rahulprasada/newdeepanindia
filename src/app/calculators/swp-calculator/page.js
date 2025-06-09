"use client";

import React, { useState, useMemo } from "react";
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'; // Added for input fields
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip'; // Added for validation tooltips
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WarningAmberIcon from "@mui/icons-material/WarningAmber"; // Added for validation icons
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components"; // Added for styled components
import { keyframes } from "@emotion/react";
// Added for animations

// Register Chart.js components
ChartJS.register(ArcElement, ChartTooltip, Legend);

// Define keyframes for animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components matching the first component
const Main2Box = styled(Box)`
  padding: 60px 0;
  background-color: #f9f3fe;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const StyledDivider = styled(Divider)`
  background-color: #49326b;
  height: 6px;
  width: 100%;
`;

const SWPCalculator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [investment, setInvestment] = useState(100000);
  const [withdrawalAmount, setWithdrawalAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const [frequency, setFrequency] = useState("monthly");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  // Define periods per year based on frequency
  const periodsPerYear = { monthly: 12, quarterly: 4, annually: 1 };
  const n = years * periodsPerYear[frequency];
  const periodicRate = interestRate / 100 / periodsPerYear[frequency];

  // Calculate total withdrawn
  const totalWithdrawn = withdrawalAmount * n;

  // Calculate remaining balance using the formula for future value with withdrawals
  const remainingBalance =
    investment === 0 ||
    years === 0 ||
    withdrawalAmount === 0 ||
    interestRate === 0
      ? 0
      : periodicRate === 0
        ? investment - totalWithdrawn
        : investment * Math.pow(1 + periodicRate, n) -
          (withdrawalAmount * (Math.pow(1 + periodicRate, n) - 1)) / periodicRate;

  // Chart data for react-chartjs-2, updated to include percentage in tooltip
  const chartData = useMemo(
    () => ({
      labels: ["Total Withdrawn", "Remaining Balance"],
      datasets: [
        {
          data: [
            totalWithdrawn,
            remainingBalance > 0 ? remainingBalance : 0,
          ],
          backgroundColor: ["#d32f2f", "#17307a"],
          borderColor: ["#ffffff", "#ffffff"], // Fixed to match the first component
          borderWidth: 2,
        },
      ],
    }),
    [totalWithdrawn, remainingBalance]
  );

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 14, weight: "bold" },
          color: "#49326b",
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
            return `${label}: ₹${value.toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} (${percentage}%)`;
          },
        },
      },
    },
  };

  // Handlers for TextField input changes
  const handleInvestmentChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setInvestment(value === "" ? 0 : Number(value));
  };

  const handleWithdrawalAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setWithdrawalAmount(value === "" ? 0 : Number(value));
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow numbers and decimal
    setInterestRate(value === "" ? 0 : Number(value));
  };

  const handleYearsChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setYears(value === "" ? 0 : Number(value));
  };

  return (
    <Main2Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: { xs: "20px 0", md: "10px 0 10px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <ArrowBackIosIcon
            sx={{ cursor: "pointer", marginRight: "20px", color: "#49326b" }} // Adjusted margin to match first component
            onClick={() => handleNavigation("/#calculator")}
          />
          <Typography
            sx={{
              fontWeight: 400,
              color: "#49326b",
              fontSize: { xs: "28px", sm: "36px", md: "48px" }, // Adjusted to match first component
              animation: `${fadeIn} 1s ease-in-out`,
              marginBottom: "20px",
            }}
          >
            Systematic Withdrawal Plan Calculator
          </Typography>
        </Box>
        <StyledDivider sx={{ marginBottom: "40px" }} /> {/* Adjusted to match first component */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            p: "40px",
          }}
        >
          <Grid container spacing={4} sx={{width:'100%'}}>
            {/* Controls */}
            <Grid item xs={12} md={6}> {/* Adjusted to match first component */}
              <CardContent sx={{ backgroundColor: "#f9f3fe", p: "20px" }}>
                {/* Investment Amount Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Initial Investment
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
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ color: "#49326b", mr: 0.5 }}>
                            ₹
                          </Typography>
                        ),
                      }}
                    />
                    {investment === 0 && (
                      <Tooltip title="Minimum value is 10000">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={investment}
                  onChange={(e, val) => setInvestment(val)}
                  min={0} // Adjusted to match first component
                  max={10000000}
                  step={10000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />

                {/* Withdrawal Amount Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    {frequency.charAt(0).toUpperCase() + frequency.slice(1)}{" "}
                    Withdrawal
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      value={withdrawalAmount}
                      onChange={handleWithdrawalAmountChange}
                      size="small"
                      sx={{
                        width: "120px",
                        bgcolor: "#e4d4fa",
                        "& .MuiInputBase-input": {
                          color: "#49326b",
                          fontWeight: 900,
                          textAlign: "center",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ color: "#49326b", mr: 0.5 }}>
                            ₹
                          </Typography>
                        ),
                      }}
                    />
                    {withdrawalAmount === 0 && (
                      <Tooltip title="Minimum value is 100">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={withdrawalAmount}
                  onChange={(e, val) => setWithdrawalAmount(val)}
                  min={0} // Adjusted to match first component
                  max={100000}
                  step={100}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />

                {/* Interest Rate Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Expected Return Rate
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
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ color: "#49326b", ml: 0.5 }}>
                            %
                          </Typography>
                        ),
                      }}
                    />
                    {interestRate === 0 && (
                      <Tooltip title="Minimum value is 1">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(e, val) => setInterestRate(val)}
                  min={0} // Adjusted to match first component
                  max={30}
                  step={0.1}
                  valueLabelDisplay="auto"
                />

                {/* Years Input */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Withdrawal Period
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
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Typography sx={{ color: "#49326b", ml: 0.5 }}>
                            years
                          </Typography>
                        ),
                      }}
                    />
                    {years === 0 && (
                      <Tooltip title="Minimum value is 1">
                        <WarningAmberIcon sx={{ color: "red", ml: 1 }} />
                      </Tooltip>
                    )}
                  </Box>
                </Box>
                <Slider
                  value={years}
                  onChange={(e, val) => setYears(val)}
                  min={0} // Adjusted to match first component
                  max={30}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value} years`}
                />

                {/* Frequency Selector */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: "20px",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Withdrawal Frequency
                  </Typography>
                  <FormControl sx={{ width: "120px" }}>
                    <Select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      variant="standard"
                      sx={{
                        bgcolor: "#e4d4fa",
                        color: "#49326b",
                        fontWeight: 900,
                        "& .MuiSelect-select": {
                          textAlign: "center",
                          py: 0.5,
                        },
                      }}
                    >
                      <MenuItem value="monthly">Monthly</MenuItem>
                      <MenuItem value="quarterly">Quarterly</MenuItem>
                      <MenuItem value="annually">Annually</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
            </Grid>

            {/* Chart */}
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
                  width: { xs: "100%", sm: "80%", md: "600px" }, // Adjusted to match first component
                  height: { xs: "250px", sm: "300px", md: "300px" }, // Adjusted to match first component
                  maxWidth: "1000px", // Adjusted to match first component
                }}
              >
                <Pie data={chartData} options={chartOptions} />
              </Box>
            </Grid>

            {/* Summary Cards */}
            <Grid item xs={12} sx={{maxWidth:'1000px',width:'100%'}}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={4} sx={{maxWidth:'300px',width:'100%'}}> {/* Adjusted to match first component */}
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(204, 8, 8)",
                      boxShadow: 4,
                      backgroundColor: "#f3f1f155",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        {frequency.charAt(0).toUpperCase() + frequency.slice(1)}{" "}
                        Withdrawal
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(withdrawalAmount).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(19, 20, 119)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Total Withdrawn
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(totalWithdrawn).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(40, 128, 40)",
                      boxShadow: 4,
                      backgroundColor: "#f3f1f155",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Remaining Balance
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(remainingBalance).toLocaleString("en-IN", {
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
    </Main2Box>
  );
};

export default SWPCalculator;