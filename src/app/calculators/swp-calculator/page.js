"use client";

import React, { useState, useMemo } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useRouter, usePathname } from "next/navigation";
import { styled, keyframes } from "@mui/system"; // Correct import for MUI styling

// Register Chart.js components
ChartJS.register(ArcElement, ChartTooltip, Legend);

// Define keyframes for animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components matching the first component
const MainBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  backgroundColor: "#f9f3fe",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "30px 0",
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "#49326b",
  height: "6px",
  width: "100%",
  margin: "50px 0",
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0",
  },
}));

const SWPCalculator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [investment, setInvestment] = useState(1000000);
  const [withdrawalAmount, setWithdrawalAmount] = useState(8000);
  const [interestRate, setInterestRate] = useState(12);
  const [years, setYears] = useState(10);
  const [frequency, setFrequency] = useState("monthly");

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

  const handleInvestmentChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInvestment(value === "" ? 0 : Number(value));
  };

  const handleWithdrawalAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setWithdrawalAmount(value === "" ? 0 : Number(value));
  };

  const handleInterestRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setInterestRate(value === "" ? 0 : Number(value));
  };

  const handleYearsChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setYears(value === "" ? 0 : Number(value));
  };

  const { totalWithdrawn, remainingBalance } = useMemo(() => {
    const periodsPerYear = { monthly: 12, quarterly: 4, annually: 1 };
    const n = years * periodsPerYear[frequency];
    const periodicRate = interestRate / 100 / periodsPerYear[frequency];
    const calculatedTotalWithdrawn = withdrawalAmount * n;
    const calculatedRemainingBalance =
      investment === 0 ||
      years === 0 ||
      withdrawalAmount === 0 ||
      interestRate === 0
        ? investment
        : periodicRate === 0
        ? investment - calculatedTotalWithdrawn
        : investment * Math.pow(1 + periodicRate, n) -
          (withdrawalAmount * (Math.pow(1 + periodicRate, n) - 1)) /
            periodicRate;
    return {
      totalWithdrawn: calculatedTotalWithdrawn,
      remainingBalance:
        calculatedRemainingBalance > 0 ? calculatedRemainingBalance : 0,
    };
  }, [investment, withdrawalAmount, interestRate, years, frequency]);

  const chartData = useMemo(
    () => ({
      labels: ["Total Withdrawn", "Remaining Balance"],
      datasets: [
        {
          data: [totalWithdrawn, remainingBalance],
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
        position: isMobile ? "bottom" : "top",
        labels: {
          color: "#49326b",
          font: { size: isMobile ? 12 : 14, weight: "bold" },
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
            return `${label}: ₹${Number(value).toLocaleString("en-IN", {
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
            Systematic Withdrawal Plan Calculator
          </Typography>
        </Box>
        <StyledDivider sx={{ marginBottom: "40px" }} />
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
          <Grid container spacing={4} sx={{ width: "100%" }}>
            <Grid item xs={12} md={6}>
              <CardContent
                sx={{
                  backgroundColor: "#f9f3fe",
                  padding: { xs: "10px", md: "50px" },
                }}
              >
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
                    sx={{
                      fontWeight: 600,
                      color: "#49326b",
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    }}
                  >
                    Initial Investment (₹)
                  </Typography>
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
                        fontSize: { xs: "0.9rem", sm: "1rem" },
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
                </Box>
                <Slider
                  value={investment}
                  onChange={(e, val) => setInvestment(val)}
                  min={10000}
                  max={10000000}
                  step={10000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />
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
                    sx={{
                      fontWeight: 600,
                      color: "#49326b",
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    }}
                  >{`${
                    frequency.charAt(0).toUpperCase() + frequency.slice(1)
                  } Withdrawal (₹)`}</Typography>
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
                        fontSize: { xs: "0.9rem", sm: "1rem" },
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
                </Box>
                <Slider
                  value={withdrawalAmount}
                  onChange={(e, val) => setWithdrawalAmount(val)}
                  min={100}
                  max={100000}
                  step={100}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />
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
                    sx={{
                      fontWeight: 600,
                      color: "#49326b",
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    }}
                  >
                    Expected Return Rate (%)
                  </Typography>
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
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <Typography sx={{ color: "#49326b", ml: 0.5 }}>
                          %
                        </Typography>
                      ),
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
                    alignItems: "center",
                    mt: { xs: "10px", md: "20px" },
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#49326b",
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    }}
                  >
                    Time Period (Years)
                  </Typography>
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
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <Typography sx={{ color: "#49326b", ml: 0.5 }}>
                          years
                        </Typography>
                      ),
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
                    sx={{
                      fontWeight: 600,
                      color: "#49326b",
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    }}
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
                          fontSize: { xs: "0.9rem", sm: "1rem" },
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
            <Grid item xs={12} sx={{maxWidth:'1300px',width:'100%'}}>
              <Grid
                container
                spacing={10}
                justifyContent="center"
                sx={{ mt: { xs: 2, md: 4 } }}
              >
                <Grid item xs={12} sm={6} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(204, 8, 8)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Initial Investment
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >{`₹${Number(investment).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(22, 5, 85)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Total Withdrawn
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >{`₹${Number(totalWithdrawn).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{maxWidth:'300px',width:'100%'}}>
                  <Card
                    sx={{
                      borderTop: "10px solid rgb(20, 94, 42)",
                      boxShadow: 4,
                      backgroundColor: "#f9f3fe",
                      borderRadius: "8px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: "#49326b" }}
                      >
                        Remaining Balance
                      </Typography>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontWeight: 700, color: "#49326b" }}
                      >{`₹${Number(remainingBalance).toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`}</Typography>
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

export default SWPCalculator;
