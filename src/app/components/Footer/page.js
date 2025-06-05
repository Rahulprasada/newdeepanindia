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

export default function Footer() {
  return (
    <footer className={styles.footerMain}>
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{width:'100%'}}>
          {/* Logo Section */}
          <Grid item xs={12} sm={12} md={4}>
            <Box className={styles.logoContainer}>
              <Link href="/">
                <Image
                  src={Deepalogo}
                  alt="Deepan India Logo"
                  className={styles.logo}
                  width={300}
                  height={300}
                />
              </Link>
            </Box>
          </Grid>

          {/* What We Serve */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className={styles.footTitle}>
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
            <Typography variant="h6" className={styles.footTitle}>
              What We Do
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/WhatWeDo/mutual-funds"
                className={styles.linkItem}
              >
                Mutual Funds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/training-in-financial-markets"
                className={styles.linkItem}
              >
                Training in Financial Markets
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/algo-trading"
                className={styles.linkItem}
              >
                Algo Trading Solutions
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/advisory-services"
                className={styles.linkItem}
              >
                Advisory Services
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/fixed-deposits-&-bond"
                className={styles.linkItem}
              >
                Fixed Deposits & Bonds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/alternate-investment-funds-(AIFS)"
                className={styles.linkItem}
              >
                Alternative Investment Funds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/real-estate-funds"
                className={styles.linkItem}
              >
                Real Estate Funds
              </Typography>
              <Typography
                component={Link}
                href="/WhatWeDo/insurances"
                className={styles.linkItem}
              >
                Insurances
              </Typography>
            </Box>
          </Grid>

          {/* What We Think */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className={styles.footTitle}>
              What We Think
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/#card"
                className={styles.linkItem}
              >
                Blogs
              </Typography>
              <Typography
                component={Link}
                href="/#media"
                className={styles.linkItem}
              >
                Videos
              </Typography>
              <Typography
                component={Link}
                href="/#media"
                className={styles.linkItem}
              >
                Reports
              </Typography>
            </Box>
          </Grid>

          {/* Calculator */}
          <Grid item xs={12} sm={6} md={1}>
            <Typography variant="h6" className={styles.footTitle}>
              Calculator
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/calculators/sip-calculator"
                className={styles.linkItem}
              >
                Sip
              </Typography>
              <Typography
                component={Link}
                href="/calculators/lumpsum-calculator"
                className={styles.linkItem}
              >
                Lumpsum
              </Typography>
              <Typography
                component={Link}
                href="/calculators/swp-calculator"
                className={styles.linkItem}
              >
                Sip combined with lumbsum
              </Typography>
              <Typography
                component={Link}
                href="/calculators/swp-calculator"
                className={styles.linkItem}
              >
                Swap
              </Typography>
            </Box>
          </Grid>

          {/* Address */}
          <Grid item xs={12} sm={12} md={2}>
            <Typography variant="h6" className={styles.footTitle}>
              Address
            </Typography>
            <Box className={styles.links}>
              <Typography className={styles.addressText}>
                No 145, 102, Gollavar Agraharam Rd, above ICICI bank,
                Kanniyappan Colony, Sanjeevarayanpet, Washermanpet, Chennai,
                Tamil Nadu 600021
              </Typography>
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
        <Grid container spacing={2} alignItems="center">
          {/* Social Icons */}
          <Grid item xs={12} md={4}>
            <Box className={styles.bottomLink1}>
              <a
                href="https://www.instagram.com/deepanindia?igsh=MXNyNXh3a256NGNneg=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  src={Instagram}
                  alt="Instagram"
                  width={50}
                  height={32}
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
                  width={50}
                  height={32}
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
                  width={50}
                  height={32}
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
                  width={50}
                  height={32}
                  className={styles.iconImage}
                />
              </a>
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} md={4}>
            <Typography className={styles.copyrightText}>
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