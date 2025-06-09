"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PricingCard from "./PricingCard";
import Investor from "../../../assets/investor.png"; // Ensure these paths are correct
import Trader from "../../../assets/trader.png";
import Wealth from "../../../assets/wealth-management.png";

const plansData = [
  {
    title: "WISE INVESTOR",
    price: "₹1000",
    description: "+ 18% GST per quarter",
    icon: Investor,
    subtitle: "(For long-term value investors)",
    features: [
      "Basic to Advanced Training – Recorded videos on value investing & smart trading",
      "Goal-Based & Time Horizon-Based Recommendations – Mutual funds, stocks, commodities",
      "Online Seminar in all investment domains",
      "Online Investments Strategies for IPO, Long only etc",
      "Online Trading classes for option trading ( Day trading & Positional)",
    ],
  },
  {
    title: "SMART TRADER",
    price: "₹9,000",
    description: "+ GST per quarter",
    icon: Trader,
    subtitle: "(For traders looking for second income)",
    // These are summary features displayed on the card.
    // The dialog will show the full list (WISE INVESTOR features + these two)
    features: [
      "All WISE INVESTOR features PLUS:",
      "Advisory Services for all segments",
      "Algo Trading Software – Automate BUY/SELL decisions with customized option strategies",
    ],
  },
  {
    title: "AGGRESSIVE WEALTH CREATION",
    subtitle: "(Algo Trading in Options)",
    price: "0%",
    icon: Wealth,
    description: "Fixed/Upfront Fees",
    features: [
      "Fully Automated Rule-Based Trading with Proven Backtesting",
      "Performance-Based Pricing:",
      "Pay 20% on profit generated (monthly billing cycle)",
      "OR Pay 50% on profits above 12% per year (quarterly billing for 1st year, then monthly)",
      "Plan shift allowed once per year",
    ],
  },
];

export default function PricingPlans() {
  return (
      <Box
        sx={{
          padding: { xs: "30px 0", sm: "85px 0" },
          backgroundColor: "#f9f3fe",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            padding: "10px",
            textAlign: "center",
            fontWeight: 900,
            color: "#49326b",
            fontSize: { xs: "26px", sm: "50px" },
          }}
        >
          Our Pricing Plans
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: "#49326b",
            fontSize: "18px",
            mb: { xs: 2, sm: 3 },
          }}
        >
          Unlock endless possibilities for your investments
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 3 }}
          sx={{
            marginBottom: "10px",
            marginTop: "10px",
            maxWidth: "100%",
            display: "flex",
            justifyContent: { sm: "center", md: "center" },
            flexDirection: { sm: "column", md: "row", margin: "50px" },
          }} // alignItems: "stretch" for Grid items to have same height
        >
          {plansData.map((plan, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={index}
              sx={{ maxWidth: { md: "20%", sm: "90%", xs: "90%" } }}
            >
              {" "}
              {/* Changed sm to 6 for better intermediate step; keeping md={4} for 3 columns */}
              {/* To strictly enforce 3 columns on small screens if space allows: sm={4} */}
              {/* If you have exactly 3 plans, sm={4} md={4} is ideal: */}
              {/* <Grid item xs={12} sm={4} md={4} key={index}> */}
              <PricingCard
                index={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                subtitle={plan.subtitle}
                features={plan.features}
                icon={plan.icon}
                allPlansData={plansData} // Pass all plans data for reference (e.g., for SMART TRADER inheritance)
                // buttonText, popular, colorClass are not in plansData or used by provided PricingCard
              />
            </Grid>
          ))}
        </Grid>
      </Box>
  );
}
