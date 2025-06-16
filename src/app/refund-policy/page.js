"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Import Grid for layout
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import aboutImg1 from "../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg"; // Re-using for consistency

const RefundPolicy = () => {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on page load or route change
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Refund Policy | Capital Investments Trading Fund</title>
        <meta
          name="description"
          content="Review the refund policy for advisory services and algo trading solutions at Capital Investments Trading Fund."
        />
        <meta
          property="og:title"
          content="Refund Policy | Capital Investments Trading Fund"
        />
        <meta
          property="og:description"
          content="Review the refund policy for advisory services and algo trading solutions at Capital Investments Trading Fund."
        />
        <meta
          property="og:url"
          content="https://yourdomain.com/refund-policy" // Update with your actual domain
        />
        <meta property="og:type" content="website" />
      </Head>

      <Box
        sx={{
          backgroundColor: "white",
          padding: { xs: "10px", sm: "20px" },
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "95%", sm: "90%", md: "80%", lg: "1000px" },
            mx: "auto",
            backgroundColor: "white",
            my: { xs: 4, md: 8 },
            overflow: "hidden",
            boxShadow: 3,
            borderRadius: "8px",
          }}
        >
          {/* Last Updated Section (consistent with Privacy Policy) */}
          <Box className="bg-blue-50 p-6 border-b border-blue-100">
            <Typography variant="body2" sx={{ color: "#49326b" }} className="text-sm">
              Last Updated: April 4, 2025 {/* Update this date if needed */}
            </Typography>
          </Box>

          {/* Policy Content */}
          <Box className="p-6 sm:p-8">
            <Box className="prose max-w-none" sx={{ color: "#49326b" }}>
              <Typography
                variant="h5"
                component="h2"
                className="text-2xl font-semibold text-blue-900 mb-4"
              >
                Refund Policy
              </Typography>
              <Typography variant="body1" sx={{ color: "#49326b" }}>
                We aim to provide the highest level of service and customer satisfaction.
                Please review our refund policy carefully before making any purchases:
              </Typography>

              {/* 1. Advisory Services */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  1. Advisory Services – 7-Day Refund Policy
                </Typography>
                <Typography variant="body1"                   sx={{ color: "#49326b" }}>
                  We offer a 100% refund on our advisory services if a cancellation request is made
                  within 7 days of purchase.
                </Typography>
                <Typography variant="body1"                  sx={{ color: "#49326b" }}>
                  To request a refund, please email us at support@deepanindia.com with your
                  order details and reason for cancellation. Refunds will be processed
                  to the original mode of payment within 7–10 business days.
                </Typography>
                <Box sx={{ backgroundColor: '#e4d4fa', padding: '10px', borderLeft: '7px solid #49326b', borderRadius: '5px', mb: 4,marginTop:'10px' }}>
                  <Typography variant="body1" sx={{ color: '#49326b', fontWeight: 'bold' }}>
                    No refunds will be issued after the 7-day period.
                  </Typography>
                </Box>
              </Box>

              {/* 2. Algo Trading Solutions */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  2. Algo Trading Solutions – No Refund Policy
                </Typography>
                <Typography variant="body1" sx={{ color: "#49326b" }}>
                  Due to the nature of digital products and the proprietary logic embedded
                  in our algo trading systems, no refunds will be issued for algo trading
                  solutions once they have been delivered or accessed.
                </Typography>
                <Typography variant="body1"                  sx={{ color: "#49326b" }}>
                  We strongly recommend reviewing all available documentation, features,
                  and Paper trading results till you are comfortable before purchasing.
                </Typography>
              </Box>

              {/* Disclaimer */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  Disclaimer
                </Typography>
                <ul className="list-disc pl-6 text-gray-700 space-y-2"style={{ color: "#49326b" }}>
                  <li>All investment and trading-related decisions are at the sole discretion and risk of the user.</li>
                  <li>Past performance is not indicative of future returns.</li>
                  <li>We do not guarantee profits or specific outcomes from any of our services.</li>
                  <li>Our advisory and algo products are tools for informed decision-making, not guarantees for market success.</li>
                  <li>Users are expected to understand the risks associated with financial markets before subscribing.</li>
                </ul>
              </Box>

              {/* FAQs Section */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  FAQs
                </Typography>

                <Box className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <Typography variant="subtitle1" component="h4" className="font-medium text-gray-900 mb-2" sx={{ color: '#49326b' }}>
                    Q1. What qualifies for a refund in advisory services?
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#49326b' }}>
                    If you cancel within 7 days of subscribing to any of our advisory plans,
                    you are eligible for a full refund—no questions asked.
                  </Typography>
                </Box>

                <Box className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500" >
                  <Typography variant="subtitle1" component="h4" className="font-medium text-gray-900 mb-2" sx={{ color: '#49326b' }}>
                    Q2. Can I get a refund for algo trading products if I didn’t use them?
                  </Typography>
                  <Typography variant="body2"sx={{ color: '#49326b' }}>
                    Unfortunately, once access has been granted, no refunds are issued
                    regardless of usage, due to the sensitive and non-reversible nature of
                    our digital solutions.
                  </Typography>
                </Box>

                <Box className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <Typography variant="subtitle1" component="h4" className="font-medium text-gray-900 mb-2" sx={{ color: '#49326b' }}>
                    Q3. How do I request a refund?
                  </Typography>
                  <Typography variant="body2"sx={{ color: '#49326b' }}>
                    Please mail to support@deepanindia.com with your name, order details,
                    and the reason for the refund. We will respond within 2 working days.
                  </Typography>
                </Box>

                <Box className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <Typography variant="subtitle1" component="h4" className="font-medium text-gray-900 mb-2" sx={{ color: '#49326b' }}>
                    Q4. What if I face a technical issue?
                  </Typography>
                  <Typography variant="body2"sx={{ color: '#49326b' }}>
                    Our support team is available to assist you with any technical
                    problems related to the product or service. Please reach out, and
                    we’ll work to resolve it promptly.
                  </Typography>
                </Box>

                <Box className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <Typography variant="subtitle1" component="h4" className="font-medium text-gray-900 mb-2" sx={{ color: '#49326b' }}>
                    Q5. Can I transfer my subscription to someone else?
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#49326b' }}>
                    No, all subscriptions are non-transferable and linked to the
                    original buyer's account.
                  </Typography>
                </Box>
              </Box>

              {/* Contact Us Section (consistent with Privacy Policy) */}
              <Box sx={{borderRadius:'10px'}}>
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  Contact Us
                </Typography>
                <Box
                  sx={{
                    backgroundImage: `url(${aboutImg1.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius:'10px',
                    position: "relative",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      zIndex: 1,
                    },
                  }}
                  className="text-white p-6"
                >
                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Typography variant="body1" className="mb-4">
                      For any questions regarding our refund policy, please reach out to us:
                    </Typography>
                    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="subtitle1"
                          component="h4"
                          className="font-medium text-blue-200 mb-1"
                        >
                          Email
                        </Typography>
                        <Typography variant="body2">
                          <EmailIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          enquiry@deepanindia.com
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="subtitle1"
                          component="h4"
                          className="font-medium text-blue-200 mb-1"
                        >
                          Phone
                        </Typography>
                        <Typography variant="body2">
                          <LocalPhoneIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                          +91-9884411611
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="subtitle1"
                          component="h4"
                          className="font-medium text-blue-200 mb-1"
                        >
                          Address
                        </Typography>
                        <Typography variant="body2">
                          145/102, G.A.Road 1st floor Old Washermenpet, Chennai 600021.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RefundPolicy;