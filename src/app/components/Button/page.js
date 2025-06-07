"use client";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import { useRouter, usePathname } from "next/navigation"; // Replace react-router-dom with next/navigation
import styled from "styled-components";
import { IoArrowForwardSharp } from "react-icons/io5";

const GetMoreButton = () => {
  const router = useRouter(); // Replace useNavigate
  const pathname = usePathname(); // Replace useLocation.pathname

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      // Handle anchor links on the same page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#contact")) {
      // Handle anchor links
      const currentPath = pathname;

      if (currentPath === "/contact") {
        // Already on home page, just scroll to the section
        const anchorId = href.substring(2);
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page and then scroll to section
        router.push("/#About"); // Use router.push instead of navigate
        setTimeout(() => {
          const anchorId = href.substring(2);
          const element = document.querySelector(`#${anchorId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      // Handle regular page navigation
      router.push(href); // Use router.push instead of navigate
    }
  };

  return (
    <CustomButton 
      // endIcon={<IoArrowForwardSharp className="arrowIcon" />}
      onClick={() => handleNavigation("/#contact")}
    >
      More Details Click me..
    </CustomButton>
  );
};

export default GetMoreButton;

const blinkAnimation = `
@keyframes blink {
  0% { color: red; }
  50% { color: grey; }
  100% { color: red; }
}
`;

const CustomButton = styled(Typography)`
  font-size: 1rem; /* Corrected: use valid unit */
  padding: 50px 0px 20px 0px;
  animation: blink 1s infinite;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  ${blinkAnimation}
`;