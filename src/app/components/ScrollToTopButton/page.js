"use client";

import { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // This function will be called when the user scrolls
    const handleScroll = () => {
      // Show button if user has scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // This function will be called when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for a smooth scrolling experience
    });
  };

  return (
    // Use MUI's Zoom transition for a nice effect
    <Zoom in={showButton}>
      <Fab
        onClick={scrollToTop}
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 24, // 24px from the bottom
          right: 24,  // 24px from the right corner
          zIndex: 1050, // Ensure it's on top of content
          
          // Your original styles, translated to the sx prop
          backgroundColor: '#49326b',
          color: 'white',
          '&:hover': {
            backgroundColor: '#3a2651', // A slightly darker shade on hover is common
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}