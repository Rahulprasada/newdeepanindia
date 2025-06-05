"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Image from "next/image";
import fixed from "../../../assets/13-removebg-preview.png";

const FixedDepost = ({ serviceName }) => {
  return (
    <Box sx={{ px: { xs: 1, sm: 2 }, py: { xs: 2, sm: 4 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg" sx={{ backgroundcolor: "#fff" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            border: "10px solid #e4d4fa",
            marginTop: "100px",
            marginBottom: "100px",
            backgroundColor: "#fff",
            padding: { xs: "20px 10px", sm: "20px" },
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            animation: "fadeIn 6s ease-in-out infinite alternate",
            "@keyframes fadeIn": {
              "0%": {
                transform: "scale(1.02)",
              },
              "50%": {
                transform: "scale(1.03)",
              },
              "100%": {
                transform: "scale(1)",
              },
            },
            "&:hover": {
              transition: "all 0.55s ease-in",
              boxShadow: "0 5px 10px #49326b",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            },
            "& > *": {
              position: "relative",
              zIndex: 2,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{
                  alignItems: "left",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#49326b",
                      fontSize: "1.3rem",
                    }}
                  >
                    Safe, stable returns.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#49326b",
                      fontSize: "1.3rem",
                    }}
                  >
                    Ideal for conservative investors.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ color: "#49326b", mt: "4px", mr: 1 }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#49326b",
                      fontSize: "1.3rem",
                    }}
                  >
                    Includes corporate FDs, government & tax-saving bonds.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Image
                    src={fixed}
                    alt="img"
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FixedDepost;
