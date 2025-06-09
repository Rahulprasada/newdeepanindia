"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useRouter, usePathname } from "next/navigation"; // Import for Next.js navigation

// Icon imports (using MUI icons as per your initial React component)
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Import your CSS Module styles
import styles from "./Footer.module.css";

// Image imports
import Deepalogo from "../../../assets/EditedLogo-removebg-preview.png"; // Assuming this is your main logo
// Note: Original code used separate images for social icons like Instagram, LinkedIn etc.
// For consistency with MUI icons, I've used MUI icons where possible in the social section.
// If you prefer the image assets, you can revert the social icon section to use Image components.
// For now, I'm assuming the icon images are placeholder or less preferred than MUI icons.

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  // Replicating the handleNavigation logic for anchor links in Next.js
  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      // Handle anchor links on the same page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      // Handle anchor links from other pages
      if (pathname === "/") {
        // Already on home page, just scroll to the section
        const anchorId = href.substring(2);
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page and then scroll to section
        router.push("/");
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
      router.push(href);
    }
  };

  return (
    <footer className={styles.footerMain} >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 10 }} sx={{ width: "100%", margin: 0 }}>
          {/* What We Serve */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className={styles.footTitle}sx={{fontSize:'16px' ,fontWeight:'bold'}}>
              What We Serve
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/WhatWeServe/investment-solution"
                className={styles.linkItem}
              >
                Investment Solutions
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeServe/retirement-planning"
                className={styles.linkItem}
              >
                Retirement Planning
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeServe/wealth-management"
                className={styles.linkItem}
              >
                Wealth Management
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeServe/educational-resource"
                className={styles.linkItem}
              >
                Educational Resources
              </Typography>
            </Box>
          </Grid>

          {/* What We Do */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className={styles.footTitle}sx={{fontSize:'16px' ,fontWeight:'bold'}}>
              What We Do
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/service/mutual-funds"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Mutual Funds
              </Typography>
              <Typography
                component={Link}
                href="/service/training-in-financial-markets"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Training in Financial Markets
              </Typography>
              <Typography
                component={Link}
                href="/service/algo-trading"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Algo Trading Solutions
              </Typography>
              <Typography
                component={Link}
                href="/service/advisory-services"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Advisory Services
              </Typography>
              <Typography
                component={Link}
                href="/service/fixed-deposits-&-bond"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Fixed Deposits & Bonds
              </Typography>
              <Typography
                component={Link}
                href="/service/alternate-investment-funds-(AIFS)"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Alternative Investment Funds
              </Typography>
              <Typography
                component={Link}
                href="/service/real-estate-funds"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Real Estate Funds
              </Typography>
              <Typography
                component={Link}
                href="/service/insurances"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Insurances
              </Typography>
            </Box>
          </Grid>

          {/* What We Think */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className={styles.footTitle}sx={{fontSize:'16px' ,fontWeight:'bold'}}>
              What We Think
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/blogs-list" // Changed to blogs-list as per original
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Blogs
              </Typography>
              <Typography
                component="a" // Use 'a' tag for external/anchor links
                onClick={() => handleNavigation("/#media")} // Use handleNavigation for anchor
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Videos
              </Typography>
              <Typography
                component="a" // Use 'a' tag for external/anchor links
                onClick={() => handleNavigation("/#media")} // Use handleNavigation for anchor
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Reports
              </Typography>
            </Box>
          </Grid>

          {/* Calculator */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className={styles.footTitle}sx={{fontSize:'16px' ,fontWeight:'bold'}}>
              Calculator
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/calculators/sip-calculator"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                SIP
              </Typography>
              <Typography
                component={Link}
                href="/calculators/lumpsum-calculator"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                Lumpsum
              </Typography>
              <Typography
                component={Link}
                href="/calculators/swp-calculator"
                className={styles.linkItem}
                sx={{fontSize:'15px'}}
              >
                SWP
              </Typography>
            </Box>
          </Grid>

          {/* Address */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className={styles.footTitle} sx={{fontSize:'16px' ,fontWeight:'bold'}}>
              Address
            </Typography>
            <Box className={styles.links} sx={{fontSize:'15px'}}>
              <Typography className={styles.addressText}sx={{fontSize:'15px'}}>
                145/102, G.A.Road 1st floor 
                <br />
                Old Washermenpet, Chennai 600021.
              </Typography>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className={styles.footTitle} sx={{fontSize:'16px' ,fontWeight:'bold'}}>
              Contact
            </Typography>
            <Box className={styles.links}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalPhoneIcon sx={{ fontSize: 20, color: "#49326b" }} />
                <Typography className={styles.linkItem}>
                  +91-9884411611
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                <EmailIcon sx={{ fontSize: 20, color: "#49326b" }} />
                <Typography
                  component="a"
                  href="mailto:enquiry@deepanindia.com"
                  className={styles.linkItem}
                  sx={{ textDecoration: "none", color: "#49326b" }}
                >
                  enquiry@deepanindia.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Google Maps Iframe */}
        <Box className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6682900232054!2d80.29056200000001!3d13.120187999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670a343aef1d%3A0x89acc915e36fd6e6!2sFirst%20Choice%20Investment!5e0!3m2!1sen!2sin!4v1748239450808!5m2!1sen!2sin"
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Deepan India Office Location"
          />
        </Box>

        <Divider className={styles.styledDivider} />

        {/* Bottom Section */}
        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }} // Center on small, space-between on medium+
          sx={{ textAlign: { xs: "center", md: "left" } }} // Center text on small, left align on medium+
        >
          {/* Social Icons */}
          <Grid item xs={12} md={4}>
            <Box className={styles.bottomLink1}>
              <a
                href="https://www.instagram.com/deepanindia?igsh=MXNyNXh3a256NGNneg=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <InstagramIcon className={styles.iconImage} />
              </a>
              <a
                href="http://www.youtube.com/@deepanindiafinancialservices"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <YouTubeIcon className={styles.iconImage} />
              </a>
              <a
                href="https://www.linkedin.com/company/deepan-india-financial-services-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <LinkedInIcon className={styles.iconImage} />
              </a>
              <a
                href="mailto:Deepanindiafinancialservices@gmail.com"
                className={styles.socialLink}
              >
                <EmailIcon className={styles.iconImage} />
              </a>
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} md={4}>
            <Typography className={styles.copyrightText} sx={{ fontWeight: 'bold' }}>
              © {new Date().getFullYear()} Deepan India. All rights reserved.
            </Typography>
          </Grid>

          {/* Privacy and Terms */}
          <Grid item xs={12} md={4}>
            <Box className={styles.bottomLink} sx={{ justifyContent: { xs: "center", md: "flex-end" } }}>
              <Typography
                component={Link}
                href="/persionalservice/privacy-policy"
                className={styles.bottomLinkItem}
              >
                Privacy Policy
              </Typography>
              <Typography
                component={Link}
                href="/persionalservice/terms-of-service"
                className={styles.bottomLinkItem}
              >
                Terms of Service
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
