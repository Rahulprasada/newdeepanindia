"use client";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import BlogImg from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import solar1 from "../../../assets/wealthyIcons.png";
import styles from "./Wealthy.module.css";

const products = [
  {
    title:
      "Start Investing – SIP or lump sum in our recommended mutual funds, stocks, or risk-free bonds",
    icon: solar1,
  },
  {
    title:
      "Short-Term Trading – Trade in qualified short-term equity delivery-based recommendations",
    icon: solar1,
  },
  {
    title:
      "Leverage Your Assets – Pledge your holding for additional income using automated rule-based option trading strategies.",
    icon: solar1,
  },
];

const Wealthy = ({ data }) => {
  const itemsToRender =
    Array.isArray(data) && data.length > 0
      ? data.map((item) => ({
          title: item.title,
          icon: item.image,
        }))
      : products;

  return (
    <Box className={styles.mainBox}>
      <Image
        src={BlogImg}
        alt="Background"
        fill
        style={{ objectFit: "cover", zIndex: 1 }}
        priority
      />
      <Container sx={{minWidth:'100%'}}>
        <Box className={styles.contentWrapper}>
          <Box className={styles.textBox}>
            <Typography className={styles.title}>
              How{" "}
              <span
                style={{ color: "#f33d25", fontSize: "42px", fontWeight: 900 }}
              >
                Deepan
              </span>{" "}
              <span
                style={{ color: "#e4d4fa", fontSize: "42px", fontWeight: 900 }}
              >
                India
              </span>{" "}
              Helps You Build Wealth?
            </Typography>
          </Box>

          <Grid container spacing={6} display="flex" direction="row" alignItems="left">
            {itemsToRender.map((product, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box className={styles.productCard}>
                  <Image
                    src={
                      typeof product.icon === "string" && product.icon.startsWith("/Docs")
                        ? `${process.env.NEXT_PUBLIC_API_URL}${product.icon}`
                        : product.icon
                    }
                    alt={product.title}
                    width={100}
                    height={100}
                    className={styles.iconWrapper}
                  />
                  <Tooltip title={product.title} arrow>
                    <Typography className={styles.productTitle}>
                      {product.title}
                    </Typography>
                  </Tooltip>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Wealthy;