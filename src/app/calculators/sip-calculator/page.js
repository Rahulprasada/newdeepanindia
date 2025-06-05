"use client";

import { useState } from "react";
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
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter, usePathname } from "next/navigation";
import styles from "./SipCalculator.module.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SIPCalculator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
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

  const months = years * 12;
  const rate = interestRate / 100 / 12;
  const totalInvested = monthlyInvestment * months;
  const maturityAmount = (
    monthlyInvestment *
    ((Math.pow(1 + rate, months) - 1) / rate) *
    (1 + rate)
  ).toFixed(2);
  const totalReturns = (maturityAmount - totalInvested).toFixed(2);

  // Chart.js data configuration
  const chartData = {
    labels: ["Invested", "Returns"],
    datasets: [
      {
        data: [totalInvested, Number(totalReturns)],
        backgroundColor: ["#d32f2f", "#17307a"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  // Chart.js options for responsiveness and customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? "bottom" : "right",
        labels: {
          color: "#49326b",
          font: {
            size: isMobile ? 12 : 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(0);
            return `${label}: ₹${value.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <Box className={styles.mainBox}>
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: { xs: "20px 0", md: "10px 0 10px 0px" },
            fontSize: { xs: "28px", sm: "36px", md: "48px" },
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "left",
          }}
        >
          <ArrowBackIosIcon
            style={{ cursor: "pointer", marginRight: "15px" }}
            onClick={() => handleNavigation("/#calculator")}
          />
          <Typography
            sx={{
              fontWeight: 400,
              color: "#49326b",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              marginBottom: "20px",
            }}
            className={styles.fadeIn}
          >
            Systematic Investment Plan Calculator
          </Typography>
        </Box>
        <Divider className={styles.styledDivider} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid rgb(220, 218, 221)",
            borderRadius: "8px",
            padding: "40px",
          }}
        >
          <Grid container spacing={1} width={"100%"}>
            {/* Inputs */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#49326b" }}
                >
                  Monthly Investment (₹)
                </Typography>
                <Chip
                  label={`₹${monthlyInvestment.toLocaleString()}`}
                  sx={{
                    bgcolor: "#e4d4fa",
                    color: "#49326b",
                    fontWeight: 900,
                  }}
                />
              </Box>
              <Slider
                value={monthlyInvestment}
                onChange={(e, val) => setMonthlyInvestment(val)}
                min={1000}
                max={200000}
                step={1000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
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
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
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
            </Grid>
            {/* Chart */}
            <Grid
              item
              xs={12}
              md={4}
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
                  maxWidth: "600px",
                }}
              >
                <Pie data={chartData} options={chartOptions} />
              </Box>
            </Grid>
            {/* Summary */}
            <Grid item xs={12}>
              <Grid container spacing={3} marginTop={2}>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(204, 8, 8)",
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
                        Invested Amount
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{totalInvested.toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(22, 5, 85)",
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
                        ₹{Number(totalReturns).toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(20, 94, 42)",
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
                        Total Value
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >
                        ₹{Number(maturityAmount).toLocaleString()}
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

export default SIPCalculator;