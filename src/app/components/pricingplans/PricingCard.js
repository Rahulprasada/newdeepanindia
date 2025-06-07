"use client";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions"; // For better dialog button placement
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Image from "next/image"; // Assuming next/image setup is correct
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";
const PricingCard = ({
  index,
  title,
  price,
  description,
  icon,
  subtitle,
  features,
  allPlansData, // Passed from PricingPlans for feature inheritance
}) => {
  const isCenterCard = index === 1;
  // Determine how many features to show on the card initially
  const visibleFeaturesCountOnCard = index === 0 ? 2 : 3;
  const [open, setOpen] = useState(false);

  // Features to display directly on the card
  const initiallyDisplayedFeatures = features.slice(
    0,
    visibleFeaturesCountOnCard
  );

  // Determine the full list of features for the "Read More" dialog
  let featuresForDialog = [];
  if (
    index === 1 &&
    features[0]?.toLowerCase().includes("all wise investor features")
  ) {
    // For SMART TRADER, combine WISE INVESTOR features with its own specific additions
    const wiseInvestorFeatures = allPlansData?.[0]?.features || [];
    // Take features from SMART TRADER list, skipping the "All WISE..." summary line
    const smartTraderSpecificFeatures = features.slice(1);
    featuresForDialog = [
      ...wiseInvestorFeatures,
      ...smartTraderSpecificFeatures,
    ];
  } else {
    // For other cards, the dialog shows features not initially displayed on the card
    featuresForDialog = features.slice(visibleFeaturesCountOnCard);
  }

  // Show "Read More" button if the dialog will have content to display
  // or if it's the SMART TRADER card (as per image showing its button)
  const showReadMoreButton =
    index === 1 &&
    features[0]?.toLowerCase().includes("all wise investor features")
      ? featuresForDialog.length > 0 // Smart trader shows button if inherited features exist
      : features.length > visibleFeaturesCountOnCard;

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: isCenterCard
          ? { xs: "35px 20px 20px", md: "45px 25px 25px" }
          : "30px 20px 20px",
        borderRadius: "20px",
        background: "#F9F3FE",
        boxShadow: isCenterCard
          ? "0 12px 28px rgba(0,0,0,0.25)"
          : "0 8px 16px rgba(0,0,0,0.15)",
        border: "1px solid #e0e0e0",
        color: "#49326b",
        textAlign: "left",
        transform: isCenterCard ? "scale(1.08)" : "scale(1)",
        transition: "none",
        position: "relative",
        zIndex: isCenterCard ? 1 : 0,

        "@media (max-width: 900px)": {
          transform: "scale(1)", // Prevent shifting on small screens
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px 20px 20px",
        },
      }}
    >
      <Image
        src={icon}
        alt={`${title} icon`}
        width={50}
        height={50}
        style={{ marginBottom: "10px" }}
      />
      <Box
        component="h2"
        sx={{
          fontSize: "18px",
          fontWeight: 900,
          color: "#49326b",
          padding: "10px 0px 0px 0px",
          textAlign: "left",
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          margin: "10px 0",
        }}
      >
        <Box
          component="h1"
          sx={{
            fontSize: "30px",
            fontWeight: 900,
            color: "#49326b",
            textAlign: "left",
          }}
        >
          {price}
        </Box>
        <Box
          component="p"
          sx={{
            color: "#49326b",
            fontWeight: 600,
            textAlign: "left",
            fontSize: "14px",
            ml: 0.5,
          }}
        >
          /{description}
        </Box>
      </Box>
      <Box
        component="p"
        sx={{ color: "#49326b", fontWeight: 600, textAlign: "left", mb: 2 }}
      >
        {subtitle}
      </Box>
      <Box
        sx={{ backgroundColor: "red", width: "100%", height: "3px", mb: 2 }}
      />{" "}
      {/* Adjusted height & margin */}
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 20px 0", // Adjusted margin
          flexGrow: 1, // This makes the feature list expand, pushing button to bottom
        }}
      >
        {initiallyDisplayedFeatures.map((feature, i) => (
          <Box
            component="li"
            key={i}
            sx={{ display: "flex", alignItems: "flex-start", margin: "10px 0" }} // alignItems: "flex-start" for multi-line features
          >
            <VerifiedIcon
              sx={{ color: "#65749e", fontSize: 20, mr: 1, mt: "3px" }}
            />{" "}
            {/* Added margin top for better alignment with text */}
            <Box
              component="span"
              sx={{ color: "#49326b", fontWeight: 600, textAlign: "left" }}
            >
              {feature}
            </Box>
          </Box>
        ))}
      </Box>
      {showReadMoreButton && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            marginTop: "auto",
            pt: 1,
          }}
        >
          {" "}
          {/* marginTop: "auto" pushes this Box to the bottom */}
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              border: "2px solid red", // Made border thicker
              color: "#49326b",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "white",
                backgroundColor: "red",
                border: "2px solid red",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Read More
          </Button>
        </Box>
      )}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{ color: "#49326b", fontWeight: "bold", textAlign: "center" }}
        >
          {title} - All Features
        </DialogTitle>
        <DialogContent dividers>
          {" "}
          {/* 'dividers' adds top/bottom borders */}
          <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
            {featuresForDialog.length > 0 ? (
              featuresForDialog.map((feature, i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    margin: "12px 0",
                    padding: "5px 0",
                  }}
                >
                  <VerifiedIcon
                    sx={{ color: "#49326b", fontSize: 20, mr: 1.5, mt: "3px" }}
                  />
                  <Box
                    component="span"
                    sx={{
                      color: "#49326b",
                      fontWeight: 500,
                      textAlign: "left",
                      fontSize: "1rem",
                    }}
                  >
                    {feature}
                  </Box>
                </Box>
              ))
            ) : (
              <Typography sx={{ textAlign: "center", my: 2 }}>
                No additional features to display.
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: "16px 24px" }}>
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
            sx={{
              color: "red",
              borderColor: "red",
              "&:hover": {
                borderColor: "darkred",
                backgroundColor: "rgba(255,0,0,0.04)",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PricingCard;
