"use client";

import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import styles from "./Footer.module.css";
import Deepalogo from "../../../assets/EditedLogo-removebg-preview copy.png";
import Instagram from "../../../assets/4-removebg-preview.png";
import LinkedIn from "../../../assets/5-removebg-preview.png";
import Youtube from "../../../assets/6-removebg-preview.png";
import Mail from "../../../assets/7-removebg-preview.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <footer className={styles.footerMain}>
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ width: "100%"}}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{
                fontSize: "15px",
                padding: "5px 0",
                fontWeight: "bold",
                marginLeft:'5px'
              }}
            >
              What We Serve
            </Typography>
            <Box className={styles.links} sx={{marginLeft:'5px'}}>
              <Typography
                component={Link}
                href="/WhatWeServe/investment-solution"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Investment Solutions
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeServe/retirement-planning"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Retirement Planning
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeServe/wealth-management"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Wealth Management
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeServe/educational-resource"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Educational Resources
              </Typography>
            </Box>
          </Grid>

          {/* What We Do */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{
                fontSize: "15px",
                padding: "5px 0",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              What We Do
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/WhatWeDo/mutual-funds"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Mutual Funds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/training-in-financial-markets"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Training in Financial Markets
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/algo-trading"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Algo Trading Solutions
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/advisory-services"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Advisory Services
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/fixed-deposits-&-bond"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Fixed Deposits & Bonds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/alternate-investment-funds-(AIFS)"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Alternative Investment Funds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/real-estate-funds"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Real Estate Funds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/insurances"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Insurances
              </Typography>
            </Box>
          </Grid>

          {/* What We Think */}
          <Grid item xs={12} sm={6} md={8}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{
                fontSize: "15px",
                padding: "5px 0",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              What We Think
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/#card"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Blogs
              </Typography>
              <Typography
                component={Link}
                href="/#media"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Videos
              </Typography>
              <Typography
                component={Link}
                href="/#media"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Reports
              </Typography>
            </Box>
          </Grid>

          {/* Calculator */}
          <Grid item xs={12} sm={6} md={1}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{
                fontSize: "15px",
                padding: "5px 0",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Calculator
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/calculators/sip-calculator"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Sip
              </Typography>
              <Typography
                component={Link}
                href="/calculators/lumpsum-calculator"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Lumpsum
              </Typography>
              <Typography
                component={Link}
                href="/calculators/swp-calculator"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Sip combined with lumbsum
              </Typography>
              <Typography
                component={Link}
                href="/calculators/swp-calculator"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Swp
              </Typography>
            </Box>
          </Grid>

          {/* Address */}
          <Grid item xs={12} sm={12} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{
                fontSize: "15px",
                padding: "5px 0",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Address
            </Typography>
            <Box className={styles.links}>
              <Typography
                className={styles.addressText}
                sx={{ fontSize: "15px" }}
              >
                No 145, 102, Gollavar Agraharam Rd, above ICICI bank,
                Kanniyappan Colony, Sanjeevarayanpet, Washermanpet, Chennai,
                Tamil Nadu 600021
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{
                fontSize: "15px",
                padding: "5px 0",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Contact
            </Typography>
            <Box className={styles.links}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneAndroidIcon sx={{ fontSize: 20, color: "#49326b" }} />
                <Typography
                  className={styles.linkItem}
                  sx={{ fontSize: "15px" }}
                >
                  +91-9884411611
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
              >
                <EmailIcon sx={{ fontSize: 20, color: "#49326b" }} />
                <Typography
                  component="a"
                  href="mailto:enquiry@deepanindia.com"
                  className={styles.linkItem}
                  sx={{
                    textDecoration: "none",
                    color: "49326b",
                    fontSize: "15px",
                  }}
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
        <Grid container spacing={1} alignItems="center" display={'flex'} justifyContent={'space-between'}>
          {/* Social Icons */}
          <Grid item xs={12} md={4}>
            <Box className={styles.bottomLink1} sx={{backgroundColor:'#F9F3FE'}}>
              <a
                href="https://www.instagram.com/deepanindia?igsh=MXNyNXh3a256NGNneg=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  src={Instagram}
                  alt="Instagram"
                  width={70}
                  height={70}
                  className={styles.iconImage}
                />
              </a>
              <a
                href="http://www.youtube.com/@deepanindiafinancialservices"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  src={Youtube}
                  alt="Youtube"
                  width={60}
                  height={60}
                  className={styles.iconImage}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/deepan-india-financial-services-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  src={LinkedIn}
                  alt="LinkedIn"
                  width={60}
                  height={60}
                  className={styles.iconImage}
                />
              </a>
              <a
                href="mailto:Deepanindiafinancialservices@gmail.com"
                className={styles.socialLink}
              >
                <Image
                  src={Mail}
                  alt="Mail"
                  width={60}
                  height={60}
                  className={styles.iconImage}
                />
              </a>
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} md={4}>
            <Typography className={styles.copyrightText} style={{fontWeight:'bold'}}>
              © {new Date().getFullYear()} Deepan India. All rights reserved.
            </Typography>
          </Grid>

          {/* Privacy and Terms */}
          <Grid item xs={12} md={4}>
            <Box className={styles.bottomLink}>
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
