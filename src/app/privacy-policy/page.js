"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head"; // For managing document head (title, meta tags)
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import aboutImg1 from "../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
// Import MUI components

const PrivacyPolicy = () => {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on page load or route change
    window.scrollTo(0, 0);
  }, [router.pathname]); // Dependency ensures scroll on route change

  return (
    <>
      <Head>
        <title>Privacy Policy | Capital Investments Trading Fund</title>
        <meta
          name="description"
          content="Learn how Capital Investments Trading Fund collects, uses, discloses, and safeguards your information in our Privacy Policy."
        />
        <meta
          property="og:title"
          content="Privacy Policy | Capital Investments Trading Fund"
        />
        <meta
          property="og:description"
          content="Learn how Capital Investments Trading Fund collects, uses, discloses, and safeguards your information in our Privacy Policy."
        />
        <meta
          property="og:url"
          content="https://yourdomain.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
      </Head>

      <Box
        sx={{
          backgroundColor: "white", // Matches original inline style
          padding: { xs: "10px", sm: "20px" }, // Responsive padding
          minHeight: "100vh", // Ensures it takes full viewport height
        }}
      >
        <Box
          sx={{
            // Replaces the original `main` with maxWidth: '80%'
            maxWidth: { xs: "95%", sm: "90%", md: "80%", lg: "1000px" }, // More flexible max-width
            mx: "auto", // Centers the content horizontally
            backgroundColor: "white", // Ensures white background
            my: { xs: 4, md: 8 }, // Responsive vertical margin
            overflow: "hidden",
            boxShadow: 3, // Add subtle shadow for better visual separation
            borderRadius: "8px", // Optional: subtle rounding
          }}
        >
          {/* Last Updated Section */}
          <Box className="bg-blue-50 p-6 border-b border-blue-100">
            <Typography
              variant="body2"
              sx={{ color: "#49326b" }}
              className="text-sm"
            >
              Last Updated: April 4, 2025
            </Typography>
          </Box>

          {/* Introduction */}
          <Box className="p-6 sm:p-8">
            <Box className="prose max-w-none" sx={{ color: "#49326b" }}>
              <Typography
                variant="h5"
                component="h2"
                className="text-2xl font-semibold text-blue-900 mb-4"
              >
                Introduction
              </Typography>
              <Typography variant="body1" className="mb-6 text-gray-700">
                Deepan India Financial Services Pvt. Ltd (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you engage with
                our trading fund services, website, and mobile application.
              </Typography>
              <Typography variant="body1" className="mb-6 text-gray-700">
                Please read this Privacy Policy carefully. By accessing or using
                our services, you acknowledge that you have read, understood,
                and agree to be bound by all the terms of this Privacy Policy.
              </Typography>

              {/* Information We Collect */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  Information We Collect
                </Typography>

                <Box className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <Typography
                    variant="subtitle1"
                    component="h4"
                    className="font-medium text-gray-900 mb-2"
                    sx={{ color: "#49326b" }}
                  >
                    Personal Information
                  </Typography>
                  <Typography variant="body2" className="text-gray-700">
                    We may collect personal information that you voluntarily
                    provide when opening an account, including but not limited
                    to your name, email address, phone number, postal address,
                    date of birth, social security number, tax identification
                    number, bank account information, and government-issued
                    identification.
                  </Typography>
                </Box>

                <Box className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                  <Typography
                    variant="subtitle1"
                    component="h4"
                    className="font-medium text-gray-900 mb-2"
                    sx={{ color: "#49326b" }}
                  >
                    Financial Information
                  </Typography>
                  <Typography variant="body2" className="text-gray-700">
                    We collect information about your financial status,
                    investment experience, investment objectives, and
                    transaction history to comply with regulatory requirements
                    and to provide appropriate investment recommendations.
                  </Typography>
                </Box>

                <Box className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <Typography
                    variant="subtitle1"
                    component="h4"
                    className="font-medium text-gray-900 mb-2"
                    sx={{ color: "#49326b" }}
                  >
                    Automatically Collected Information
                  </Typography>
                  <Typography variant="body2" className="text-gray-700">
                    When you access our platform, we automatically collect
                    device information, log data, and usage information through
                    cookies and similar technologies.
                  </Typography>
                </Box>
              </Box>

              {/* How We Use Your Information */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  How We Use Your Information
                </Typography>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Process and manage your investment account</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>
                    Assess your financial needs and provide appropriate
                    investment recommendations
                  </li>
                  <li>
                    Communicate with you about your account, transactions, and
                    our services
                  </li>
                  <li>Improve our platform and develop new features</li>
                  <li>
                    Detect and prevent fraud, unauthorized activities, and
                    illegal behavior
                  </li>
                </ul>
              </Box>

              {/* Disclosure of Your Information */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  Disclosure of Your Information
                </Typography>
                <Typography variant="body1" className="mb-4 text-gray-700">
                  We may share your information with:
                </Typography>
                <Grid container spacing={2}>
                  {" "}
                  {/* Using MUI Grid for responsive columns */}
                  <Grid item xs={12} md={6}>
                    <Box className="bg-blue-50 p-4 rounded-lg">
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        className="font-medium text-blue-900 mb-2"
                        sx={{ color: "#49326b" }}
                      >
                        Service Providers
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-700 text-sm"
                      >
                        Third-party vendors who perform services on our behalf
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box className="bg-blue-50 p-4 rounded-lg">
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        className="font-medium text-blue-900 mb-2"
                        sx={{ color: "#49326b" }}
                      >
                        Financial Partners
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-700 text-sm"
                      >
                        Custodians, brokers, and other financial institutions
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box className="bg-blue-50 p-4 rounded-lg">
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        className="font-medium text-blue-900 mb-2"
                        sx={{ color: "#49326b" }}
                      >
                        Regulatory Authorities
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-700 text-sm"
                      >
                        Government and regulatory bodies as required by law
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box className="bg-blue-50 p-4 rounded-lg">
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        className="font-medium text-blue-900 mb-2"
                        sx={{ color: "#49326b" }}
                      >
                        Legal Situations
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-700 text-sm"
                      >
                        In response to a legal process or request
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Data Security */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ color: "#49326b" }}
                >
                  Data Security
                </Typography>
                <Typography variant="body1" className="mb-4 text-gray-700">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, accidental loss, damage, or destruction. However, no
                  method of transmission over the Internet or electronic storage
                  is 100% secure.
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "#49326b",
                    padding: "10px",
                    borderLeft: "7px solid #FFD700",
                    borderRadius: "5px",
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    We maintain strict security standards and procedures with
                    respect to your information, including:
                  </Typography>
                  <ul
                    style={{ color: "#fff" }}
                    className="mt-2 list-disc pl-6 text-gray-700 space-y-1"
                  >
                    <li>Advanced encryption for data in transit and at rest</li>
                    <li>
                      Regular security assessments and penetration testing
                    </li>
                    <li>
                      Employee training on data privacy and security practices
                    </li>
                    <li>
                      Access controls to limit data access to authorized
                      personnel
                    </li>
                  </ul>
                </Box>
              </Box>

              {/* Your Rights */}
              <Box className="mb-8">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-xl font-semibold text-blue-800 mb-3"
                  sx={{ color: "#49326b" }}
                >
                  Your Rights
                </Typography>
                <Typography variant="body1" className="mb-4 text-gray-700">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </Typography>
                {/* Table with responsive overflow */}
                <Box className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-600">
                        <th className="py-2 px-4 border-b text-left text-white">
                          Right
                        </th>{" "}
                        {/* Added text-white */}
                        <th className="py-2 px-4 border-b text-left text-white">
                          Description
                        </th>{" "}
                        {/* Added text-white */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">
                          Access
                        </td>
                        <td className="py-2 px-4 border-b">
                          Request a copy of your personal information
                        </td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">
                          Correction
                        </td>
                        <td className="py-2 px-4 border-b">
                          Request correction of inaccurate information
                        </td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">
                          Deletion
                        </td>
                        <td className="py-2 px-4 border-b">
                          Request deletion of your information
                        </td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">
                          Restriction
                        </td>
                        <td className="py-2 px-4 border-b">
                          Request restriction of processing
                        </td>
                      </tr>
                      <tr className="bg-gray-400">
                        <td className="py-2 px-4 border-b font-medium">
                          Portability
                        </td>
                        <td className="py-2 px-4 border-b">
                          Request transfer of your information
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Box>

              {/* Contact Us */}
              <Box>
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
                    // Use the imported image as a background
                    backgroundImage: `url(${aboutImg1.src})`,
                    backgroundSize: "cover", // Ensure the image covers the entire Box
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent tiling
                    // Add a semi-transparent overlay to improve text readability (optional)
                    position: "relative",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay with 30% opacity
                      zIndex: 1,
                    },
                  }}
                  className="text-white p-6 " // Keep text-white and padding
                >
                  {/* Ensure content is above the overlay */}
                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Typography variant="body1" className="mb-4">
                      If you have any questions or concerns about this Privacy
                      Policy or our data practices, please contact us at:
                    </Typography>
                    <Grid
                      container
                      spacing={2}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="subtitle1"
                          component="h4"
                          className="font-medium text-blue-200 mb-1"
                        >
                          Email
                        </Typography>
                        <Typography variant="body2">
                          <EmailIcon />
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
                          <LocalPhoneIcon />
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
                          145/102, G.A.Road 1st floor Old Washermenpet, Chennai
                          600021.
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

export default PrivacyPolicy;
