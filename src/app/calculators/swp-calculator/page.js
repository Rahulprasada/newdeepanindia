"use client";

import React, { useState, useMemo } from "react";
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter, usePathname } from "next/navigation";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

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
    periodicRate === 0
      ? investment - totalWithdrawn
      : investment * Math.pow(1 + periodicRate, n) -
        (withdrawalAmount * (Math.pow(1 + periodicRate, n) - 1)) / periodicRate;

  // Chart data for react-chartjs-2
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
          borderColor: ["#ffffff", "#ffffff"],
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
          label: (context) =>
            `${context.label}: ₹${context.raw.toLocaleString()}`,
        },
      },
    },
  };

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
        <Box
          sx={{
            padding: { xs: "20px 0", md: "10px 0 10px 0" },
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <ArrowBackIosIcon
            sx={{ cursor: "pointer", marginRight: "15px" }}
            onClick={() => handleNavigation("/#calculator")}
          />
          <Typography
            sx={{
              fontWeight: 400,
              color: "#49326b",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              animation: "fadeIn 1s ease-in-out",
              "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
              mb: "20px",
            }}
          >
            Systematic Withdrawal Plan Calculator
          </Typography>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#49326b",
            height: "6px",
            width: "100%",
          }}
        />
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
            {/* Controls */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ backgroundColor: "#f9f3fe", p: "20px" }}>
                {/* Investment Slider */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Initial Investment (₹)
                  </Typography>
                  <Chip
                    label={`₹${investment.toLocaleString()}`}
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
                </Box>
                <Slider
                  value={investment}
                  onChange={(e, val) => setInvestment(val)}
                  min={10000}
                  max={10000000}
                  step={10000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
                />

                {/* Withdrawal Amount Slider */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    {frequency.charAt(0).toUpperCase() + frequency.slice(1)}{" "}
                    Withdrawal (₹)
                  </Typography>
                  <Chip
                    label={`₹${withdrawalAmount.toLocaleString()}`}
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
                </Box>
                <Slider
                  value={withdrawalAmount}
                  onChange={(e, val) => setWithdrawalAmount(val)}
                  min={100}
                  max={100000}
                  step={100}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
                />

                {/* Interest Rate Slider */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Expected Return Rate (%)
                  </Typography>
                  <Chip
                    label={`${interestRate}%`}
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(e, val) => setInterestRate(val)}
                  min={1}
                  max={30}
                  step={0.1}
                  valueLabelDisplay="auto"
                />

                {/* Years Slider */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Withdrawal Period (Years)
                  </Typography>
                  <Chip
                    label={`${years} years`}
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
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

                {/* Frequency Selector */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Withdrawal Frequency
                  </Typography>
                  <Chip
                    label={
                      frequency.charAt(0).toUpperCase() + frequency.slice(1)
                    }
                    sx={{
                      bgcolor: "#e4d4fa",
                      color: "#49326b",
                      fontWeight: 900,
                    }}
                  />
                </Box>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Frequency</InputLabel>
                  <Select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    label="Frequency"
                  >
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="quarterly">Quarterly</MenuItem>
                    <MenuItem value="annually">Annually</MenuItem>
                  </Select>
                </FormControl>
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
                  width: { xs: "100%", sm: "100%", md: "600px" },
                  height: { xs: "250px", sm: "300px", md: "300px" },
                  maxWidth: "400px",
                }}
              >
                <Pie data={chartData} options={chartOptions} />
              </Box>
            </Grid>

            {/* Summary Cards */}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
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
                        ₹{Math.round(withdrawalAmount).toLocaleString()}
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
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Total Withdrawn
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Math.round(totalWithdrawn).toLocaleString()}
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
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Remaining Balance
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Math.round(remainingBalance).toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SWPCalculator;