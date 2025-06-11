"use client";

import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system"; // Use MUI's styled
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalculateIcon from "@mui/icons-material/Calculate";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Handshake from "../../../assets/10-removebg-preview.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import GetMoreButton from "../../components/Button/page";

// Animation keyframes
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const resources = [
  {
    icon: <MenuBookIcon />,
    title: "Simple Financial Articles",
    desc: "Easy-to-understand articles on finance and investing.",
  },
  {
    icon: <CalculateIcon />,
    title: "Planning Tools & Calculators",
    desc: "Tools and calculators for retirement, SIPs, and goal planning.",
  },
  {
    icon: <LiveTvIcon />,
    title: "Webinars & Expert Videos",
    desc: "Webinars, videos, and expert tips to stay informed.",
  },
  {
    icon: <DownloadIcon />,
    title: "Guides & E-books",
    desc: "Downloadable guides and e-books for every stage of your financial journey.",
  },
];

const EducationalResource = () => {
  return (
    <MainBox>
      <Container maxWidth="lg">
        <Typography
          sx={{
            padding: { xs: "20px 0 5px 0", sm: "30px 0" },
            textAlign: "left",
            fontWeight: 900,
            color: "#49326b",
            fontSize: { xs: "26px", sm: "50px" },
          }}
        >
          Educational Resources
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            color: "#49326b",
            fontSize: "18px",
            marginBottom: { xs: "30px", sm: "40px" },
            fontWeight: 300,
          }}
        >
          Knowledge is the foundation of sound financial decisions. Our platform offers:
        </Typography>

        <QualificationBox image={aboutImg1}>
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "16px",
              border: "10px solid #e4d4fa",
              boxShadow: "0 8px 24px rgba(73, 50, 107, 0.1)",
              padding: { xs: "20px", md: "20px" },
              animation: `${slideIn} 1s ease-in-out`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6} md={6}>
                <List>
                  {resources.map((res, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateX(8px)",
                          background: "#e4d4fa",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <CheckCircleIcon
                          sx={{ color: "#49326b", fontSize: { xs: "18px", sm: "22px" } }}
                        />
                      </ListItemIcon>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <ListItemText
                          primary={res.title}
                          primaryTypographyProps={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#49326b",
                          }}
                        />
                        <Typography
                          sx={{ color: "#49326b", fontSize: "14px", fontWeight: 400 }}
                        >
                          {res.desc}
                        </Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: { xs: "block", sm: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Image
                    src={Handshake}
                    alt="handshake"
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                    }}
                    priority
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "18px", sm: "28px" },
              fontWeight: "900",
              color: "white",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <HighlightSpan>
              Empower yourself with insights that help you take control of your finances.
            </HighlightSpan>
          </Typography>
        </QualificationBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: { xs: "30px", sm: "40px" },
          }}
        >
          <GetMoreButton />
        </Box>
      </Container>
    </MainBox>
  );
};

export default EducationalResource;

// Styled components
const MainBox = styled(Box)`
  padding: 60px 0;
  background-color: #f9f3fe;
  position: "relative";
  overflow: hidden;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const QualificationBox = styled(Box)(({ image }) => ({
  position: "relative",
  width: "100%",
  backgroundColor:'#49326b',
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px",
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(73, 50, 107, 0.3)",
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  "@media (max-width: 600px)": {
    padding: "10px",
  },
}));

const HighlightSpan = styled("span")`
  color: white;
  font-weight: 700;
  &:hover {
    color: #e73ed1;
  }
`;