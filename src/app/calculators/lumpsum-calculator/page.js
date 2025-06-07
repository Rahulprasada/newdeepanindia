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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WarningAmberIcon from "@mui/icons-material/WarningAmber"; // Added for validation icons
import { useRouter, usePathname } from "next/navigation";
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
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

// Styled components matching SWPCalculator
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

const LumpsumCalculator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [investment, setInvestment] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const [frequency, setFrequency] = useState("annually"); // Added for consistency, but not used in calculations
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

  // Calculations
  const rate = interestRate / 100;
  const totalInvested = investment;
  const maturityAmount = investment * Math.pow(1 + rate, years);
  const totalReturns = maturityAmount - totalInvested;

  // Chart data for react-chartjs-2
  const chartData = useMemo(
    () => ({
      labels: ["Invested", "Returns"],
      datasets: [
        {
          data: [
            totalInvested,
            totalReturns > 0 ? totalReturns : 0,
          ],
          backgroundColor: ["#d32f2f", "#17307a"],
          borderColor: ["#ffffff", "#ffffff"],
          borderWidth: 2,
        },
      ],
    }),
    [totalInvested, totalReturns]
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
            alignItems: "center",
          }}
        >
          <ArrowBackIosIcon
            sx={{ cursor: "pointer", marginRight: "20px", color: "#49326b" }} // Updated to match SWPCalculator
            onClick={() => handleNavigation("/#calculator")}
          />
          <Typography
            sx={{
              fontWeight: 400,
              color: "#49326b",
              fontSize: { xs: "28px", sm: "36px", md: "48px" }, // Updated to match SWPCalculator
              animation: `${fadeIn} 1s ease-in-out`,
              marginBottom: "20px",
            }}
          >
            Lumpsum Investment Calculator
          </Typography>
        </Box>
        <StyledDivider sx={{ marginBottom: "40px" }} /> {/* Updated to match SWPCalculator */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            p: "40px",
          }}
        >
          <Grid container spacing={4}>
            {/* Inputs */}
            <Grid item xs={12} md={6} >
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
                    One-time Investment
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
                  min={0} // Updated to match SWPCalculator
                  max={10000000}
                  step={10000}
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
                  min={0} // Updated to match SWPCalculator
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
                    Time Period
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
                  min={0} // Updated to match SWPCalculator
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
                    Compounding Frequency
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
              md={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "80%", md: "400px" }, // Updated to match SWPCalculator
                  height: { xs: "250px", sm: "300px", md: "300px" }, // Updated to match SWPCalculator
                  maxWidth: "400px", // Updated to match SWPCalculator
                }}
              >
                <Pie data={chartData} options={chartOptions} />
              </Box>
            </Grid>

            {/* Summary */}
            <Grid item xs={12}>
              <Grid container spacing={3} >
                <Grid item xs={12} md={4} >
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
                        sx={{ fontWeight: 600, color: "#49326b" }} // Removed gutterBottom
                      >
                        Invested Amount
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(totalInvested).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
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
                        sx={{ fontWeight: 600, color: "#49326b" }} // Removed gutterBottom
                      >
                        Est. Returns
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(totalReturns).toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
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
                        sx={{ fontWeight: 600, color: "#49326b" }} // Removed gutterBottom
                      >
                        Total Value
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹
                        {Number(maturityAmount).toLocaleString("en-IN", {
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

export default LumpsumCalculator;