"use client";

import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Chip from "@mui/material/Chip";
import { Grid } from "@mui/system";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
import back1Image from "../../../assets/website-faq-section-user-helpdesk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character.png";
import styles from "./Choose.module.css";

const Choose = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const iconMap = {
    0: TrendingUpIcon,
    1: SpeedIcon,
    2: CurrencyRupeeIcon,
    3: SecurityIcon,
    4: VisibilityIcon,
    5: SmartToyIcon,
  };
  const defaultData = [
    {
      title: "Right Asset allocation",
      subTitle:
        "Deploying Right financial solutions for each client after proper profiling.",
    },
    {
      title: "Performance-Based Fees",
      subTitle:
        "Pay only when your portfolio crosses a predefined profit threshold.",
    },
    {
      title: "Wide Range of products",
      subTitle: "Catering to all classes of investors to attain their financial goal charges, making our services cost-effective.",
    },
    {
      title: "Strong Track Record",
      subTitle: "Monitor our past and present performance at any time.",
    },
    {
      title: "Transparent and Accessible",
      subTitle: "A user-friendly platform with clear reporting.",
    },
    {
      title: "Technology-Driven Approach",
      subTitle: "Enhancing investment processes through smart technology.",
    },
  ];

  const reviewData =
    data?.reviewData?.length > 0 ? data.reviewData : defaultData;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f3fe",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2rem",
                    md: "2rem",
                    lg: "2rem",
                  },
                  fontWeight: 900,
                  color: "#49326b",
                }}
              >
                Why Choose 
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  fontWeight: 900,
                  lineHeight: 1.2,
                  mb: 2,
                  color: "#f33d25",
                }}
              >
                Deepan <span style={{ color: "#49326b" }}>India</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#666666",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontWeight: 400,
                  maxWidth: "600px",
                  lineHeight: 1.6,
                }}
              >
                Discover the advantages that set us apart in delivering
                exceptional financial solutions tailored just for you.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Slide in timeout={1000}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 300, md: 400, lg: 450 },
                  mx: "auto",
                }}
              >
                <Box
                  className={styles.circleBackground}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 280, md: 380, lg: 420 },
                    height: { xs: 280, md: 380, lg: 420 },
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, #49326b, rgba(186, 157, 231, 0.19))`,
                  }}
                />

                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Image
                    src={back1Image}
                    alt="Financial Services"
                    width={450}
                    height={450}
                    className={styles.mainImage}
                  />
                </Box>

                <Box
                  className={styles.floatingIcon}
                  sx={{
                    position: "absolute",
                    top: "10%",
                    right: "-10%",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUpIcon sx={{ color: "white", fontSize: "1.5rem" }} />
                </Box>

                <Box
                  className={styles.floatingDot}
                  sx={{
                    position: "absolute",
                    bottom: "15%",
                    left: "-8%",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `#f3f1f1cc`,
                  }}
                />
              </Box>
            </Slide>
          </Grid>
        </Grid>
        <Fade in timeout={800}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              alignItems={"normal"}
           
            >
              {reviewData.map((item, index) => {
                const IconComponent = iconMap[index] || AdsClickIcon;
                return (
                  <Grid item xs={12} key={index}>
                    <Card
                      sx={{
                        width: "350px", // ✅ Add this line
                        height: "180px",
                        maxWidth: "100%", // You already have this
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        borderTop: "10px solid #49326b",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          cursor: "pointer",
                          transform: "translateY(-8px)",
                          boxShadow: `0 20px 40px #49326b`,
                        },
                      }}
                      className={styles.cardHover}
                    >
                      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box
                            className={styles.featureIcon}
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: "50px",
                              backgroundColor: "#49326b",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mr: 2,
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 12px rgba(223, 125, 69, 0.1)",
                              flexShrink: 0,
                            }}
                          >
                            <IconComponent
                              sx={{
                                fontSize: "1.5rem",
                                color: "white",
                              }}
                            />
                          </Box>

                          <Box sx={{ flex: 1 }}>
                            <Typography
                              className={styles.featureTitle}
                              variant="h6"
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1rem", md: "1.1rem" },
                                color: "#49326b",
                                mb: 1,
                                transition: "color 0.3s ease",
                                lineHeight: 1.3,
                              }}
                            >
                              {item.title}
                            </Typography>

                            <Typography
                              variant="body2"
                              sx={{
                                color: "#49326b",
                                lineHeight: 1.6,
                                fontSize: "0.9rem",
                              }}
                            >
                              {item.subTitle.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {(index + 1) % 4 === 0 ? <br /> : " "}
                                </React.Fragment>
                              ))}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Choose;
