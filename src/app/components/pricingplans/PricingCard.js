"use client";

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { keyframes } from "@emotion/react";
import React, { useState } from "react";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";

// --- ANIMATION KEYFRAMES (Moved from styled-components to MUI) ---
const float = keyframes`
  0%, 100% {
    transform: translateY(0px) scale(1.05);
  }
  50% {
    transform: translateY(-10px) scale(1.08);
  }
`;

const PricingCard = ({
  index,
  title,
  price,
  description,
  icon,
  subtitle,
  features,
  allPlansData, // Kept for the SMART TRADER logic
}) => {
  const isCenterCard = index === 1;
  const [open, setOpen] = useState(false);

  // Determine how many features to show initially on the card
  const visibleFeaturesCountOnCard = index === 0 ? 2 : 3;
  const initiallyDisplayedFeatures = features.slice(0, visibleFeaturesCountOnCard);

  // Determine which features to show in the "Read More" dialog
  let featuresForDialog = [];
  if (index === 1 && features[0]?.toLowerCase().includes("all wise investor features")) {
    const wiseInvestorFeatures = allPlansData?.[0]?.features || [];
    const smartTraderSpecificFeatures = features.slice(1);
    featuresForDialog = [...wiseInvestorFeatures, ...smartTraderSpecificFeatures];
  } else {
    // For other cards, show the remaining features
    featuresForDialog = features.slice(visibleFeaturesCountOnCard);
  }

  // Determine if the "Read More" button should be shown
  const showReadMoreButton = featuresForDialog.length > 0;

  return (
    <Box
      sx={{
        // --- CORE LAYOUT ---
        height: "100%",
        display: "flex",
        flexDirection: "column",
        
        // --- STYLES TRANSLATED FROM STYLED-COMPONENTS ---
        padding: isCenterCard ? { xs: "40px 20px", md: "50px 25px" } : "40px 20px 20px",
        borderRadius: "20px",
        background: "rgba(243, 241, 241, 0.34)", // Semi-transparent background for the glass effect
        backdropFilter: "blur(10px)", // The glass effect
        boxShadow: isCenterCard ? "0 8px 20px rgba(0, 0, 0, 0.3)" : "0 4px 10px rgba(0, 0, 0, 0.2)",
        border: "2px solid white",
        textAlign: "left",
        transform: isCenterCard ? "scale(1.05)" : "scale(1)",
        zIndex: isCenterCard ? 2 : 1,

        // --- ANIMATION ---
        animation: isCenterCard ? `${float} 6s ease-in-out infinite` : 'none',

        // --- HOVER EFFECT ---
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: isCenterCard ? "scale(1.1)" : "scale(1.05)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
        },

        // --- RESPONSIVE ADJUSTMENTS ---
        "@media (max-width: 900px)": {
          transform: "scale(1)", // Reset scale on mobile
          animation: "none", // Disable floating animation on mobile
        },
      }}
    >
      <Image src={icon} alt={`${title} icon`} width={50} height={50} />
      
      <Typography component="h2" sx={{ fontSize: "18px", fontWeight: 900, color: "#49326b", pt: 2.5 }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "baseline", my: 1 }}>
        <Typography component="h1" sx={{ fontSize: "30px", fontWeight: 900, color: "#49326b" }}>
          {price}
        </Typography>
        <Typography component="p" sx={{ color: "#49326b", fontWeight: 600, fontSize: "14px", ml: 0.5 }}>
          /{description}
        </Typography>
      </Box>

      <Typography component="p" sx={{ color: "#49326b", fontWeight: 600, mb: 2 }}>
        {subtitle}
      </Typography>

      <Box sx={{ backgroundColor: "red", width: "100%", height: "4px", mb: 2 }} />

      {/* Feature List */}
      <Box component="ul" sx={{ listStyle: "none", padding: 0, m: 0, flexGrow: 1 }}>
        {initiallyDisplayedFeatures.map((feature, i) => (
          <Box component="li" key={i} sx={{ display: 'flex', alignItems: 'flex-start', my: 1 }}>
            <VerifiedIcon sx={{ color: "#65749e", fontSize: 20, mr: 1, mt: "3px" }} />
            <Typography component="span" sx={{ color: "#49326b", fontWeight: 600, textAlign: "left" }}>
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Read More Button */}
      {showReadMoreButton && (
        <Box sx={{ width: "100%", mt: 'auto', pt: 2 }}>
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            sx={{
              width: "100%",
              border: "1px solid red",
              color: "#49326b",
              fontWeight: "bold",
              py: 1.25,
              borderRadius: "10px",
              "&:hover": {
                color: "white",
                backgroundColor: "red",
                border: "1px solid red",
              },
            }}
          >
            Read More
          </Button>
        </Box>
      )}

      {/* Dialog for More Features */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle sx={{ color: "#49326b", fontWeight: "bold" }}>
          {title} - All Features
        </DialogTitle>
        <DialogContent dividers>
          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {featuresForDialog.map((feature, i) => (
              <Box component="li" key={i} sx={{ display: "flex", alignItems: "flex-start", py: 1 }}>
                <VerifiedIcon sx={{ color: "#49326b", fontSize: 20, mr: 1.5, mt: "3px" }} />
                <Typography component="span" sx={{ color: "#49326b", fontWeight: 500, fontSize: "1rem" }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <Button onClick={() => setOpen(false)} sx={{ m: 2 }}>Close</Button>
      </Dialog>
    </Box>
  );
};

export default PricingCard;