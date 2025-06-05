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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter, usePathname } from "next/navigation";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

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
            justifyContent: "left",
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
              marginBottom: "20px",
            }}
          >
            Lumpsum Investment Calculator
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
            padding: "40px",
          }}
        >
          <Grid container spacing={4}>
            {/* Inputs */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ backgroundColor: "#f9f3fe", padding: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    One-time Investment (₹)
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Time Period (Years)
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
                {/* Frequency Selector (added for consistency, not used in calculations) */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#49326b" }}
                  >
                    Compounding Frequency
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

            {/* Summary */}
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
                        ₹{Math.round(totalInvested).toLocaleString()}
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
                        ₹{Math.round(totalReturns).toLocaleString()}
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
                        ₹{Math.round(maturityAmount).toLocaleString()}
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

export default LumpsumCalculator;