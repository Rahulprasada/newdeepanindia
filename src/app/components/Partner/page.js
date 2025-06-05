"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SchoolIcon from "@mui/icons-material/School";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styles from "./Partner.module.css";
import Handshake from "../../../assets/2-removebg-preview.png";
import Handshake1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

const Partner = () => {
  const benefits = [
    {
      icon: <WorkOutlineIcon fontSize="large" />,
      title: "Zero Office Expenses",
      description: "Work independently, from anywhere.",
    },
    {
      icon: <CurrencyRupeeIcon fontSize="large" />,
      title: "High Revenue Sharing",
      description: "Earn a substantial commission on referrals.",
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Training & Customer Support",
      description: "We equip you with all the necessary tools and knowledge.",
    },
    {
      icon: <BrandingWatermarkIcon fontSize="large" />,
      title: "Marketing & Branding Support",
      description: "We help you establish credibility.",
    },
    {
      icon: <DashboardIcon fontSize="large" />,
      title: "Personal Dashboard",
      description:
        "Get a dedicated login with detailed reports on clients, revenue, and AUM.",
    },
  ];

  return (
    <div id="partner" className={styles.mainBox} style={{ backgroundImage: `url(${Handshake1.src})` }}>
      <Container maxWidth="lg" >
        <Typography
          sx={{
            padding: { xs: "20px 0", sm: "30px 0" },
            textAlign: "center",
            fontWeight: 900,
            color: "white",
            fontSize: { xs: "26px", sm: "40px", md: "50px" },
          }}
        >
          Become Our Affiliate Partner
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#f9f3fe",
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            marginBottom: { xs: "30px", sm: "40px" },
            fontWeight: 600,
          }}
        >
          Are you looking for an{" "}
          <span className={styles.highlightSpan}>Independent income opportunities</span> in the
          financial sector?
        </Typography>

        <div className={styles.qualificationBox}>
          <Box sx={{ width: '100%',display:'flex' }}>
            <Grid
              container
              spacing={{ xs: 2, sm: 4 }}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems="center"
              justifyContent="center"
            >
              {/* Left Column - Text Content */}
              <Grid item xs={12} sm={6}>
                <List sx={{ padding: { xs: 1, sm: 2 } }}>
                  {[
                    "Do you have a strong network?",
                    "Do you want to help others grow their wealth?",
                    "Are you an Insurance Agent, Mutual Fund Advisor, Real Estate Agent, or Sub-Broker?",
                    "Do you want to earn passive income?",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ py: { xs: 0.5, sm: 1 } }}>
                      <ListItemIcon sx={{ minWidth: { xs: "30px", sm: "40px" } }}>
                        <CheckCircleIcon sx={{ color: "#e4d4fa", fontSize: { xs: "20px", sm: "24px" } }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{
                          sx: {
                            color: "#f9f3fe",
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            fontWeight: 600,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>

              {/* Right Column - Image */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  padding: { xs: 1, sm: 2 },
                }}>
                  <Image
                    src={Handshake}
                    alt="handshake"
                    width={400}
                    height={400}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      animation: 'zoominout 3s ease-in-out infinite',
                      '@keyframes zoominout': {
                        '0%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.05)' },
                        '100%': { transform: 'scale(1)' },
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ padding: { xs: "8px 0", sm: "10px 0" }, backgroundColor: "#f9f3fe", borderRadius: "10px" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "18px", sm: "24px", md: "28px" },
                fontWeight: "900",
                color: "#49326b",
                marginTop: { xs: "10px", sm: "20px" },
                padding: { xs: "8px", sm: "10px" },
              }}
            >
              If so,{" "}
              <a href="#contact">
                <span className={styles.highlightSpan}>
                  partner with
                  <span style={{ fontWeight: 900, color: "#f20707" }}> Deepan</span>{" "}
                  <span style={{ fontWeight: 900, color: "rgb(5, 4, 59)" }}> India</span>{" "}
                  today!
                </span>
              </a>
            </Typography>
          </Box>
        </div>

        <Typography
          sx={{
            padding: { xs: "20px 0 10px", sm: "30px 0 20px" },
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            fontSize: { xs: "22px", sm: "28px", md: "32px" },
          }}
        >
          Benefits of Our Affiliate Program:
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          sx={{
            marginBottom: { xs: "30px", sm: "40px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className={styles.benefitCard}>
                <CardContent>
                  <div className={styles.iconContainer}>{benefit.icon}</div>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "#49326b",
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#49326b" }}>
                    {benefit.description}
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Partner;