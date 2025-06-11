"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import BlogImg from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import solar1 from "../../../assets/27.bf489713640d49349896.png";
import solar2 from "../../../assets/Images2.ce46d0faf28ef10da28f.png";
import solar3 from "../../../assets/Images3.0ad5ed0fe36204bc8345.png";
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
    icon: solar3,
  },
  {
    title:
      "Leverage Your Assets – Pledge your holding for additional income using automated rule-based option trading strategies.",
    icon: solar2,
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
      <Container maxWidth={'lg'}>
        <Box className={styles.contentWrapper}>
          <Box className={styles.textBox}>
          <Typography
              sx={{
                fontSize: { xs: 24, md: 32 },
                color: "white",
                fontWeight: 900,
                "& .deepan": {
                  color: "#f33d25",
                  fontSize: { xs: 28, md: 42 },
                  fontWeight: 900,
                },
                "& .india": {
                  color: "#e4d4fa",
                  fontSize: { xs: 28, md: 42 },
                  fontWeight: 900,
                },
              }}
            >
              How <span className="deepan">Deepan</span>{" "}
              <span className="india">India</span><br /> helps You Build Wealth?
            </Typography>
          </Box>

          <Grid
            container
            spacing={6}
            display="flex"
            direction="row"
            alignItems="left"
            maxWidth={'1300px'}
          >
            {itemsToRender.map((product, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{ display: "flex", flexDirection: "wrap", gap: "20px",maxWidth:'350px',width:'100%' }}
              >
                <Box className={styles.productCard}>
                  <Image
                    src={
                      typeof product.icon === "string" &&
                      product.icon.startsWith("/Docs")
                        ? `${process.env.NEXT_PUBLIC_API_URL}${product.icon}`
                        : product.icon
                    }
                    alt={product.title}
                    width={300}
                    height={300}
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
