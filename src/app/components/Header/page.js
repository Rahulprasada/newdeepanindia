"use client";

// STEP 1: Import necessary dependencies
import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap"; // Fixed import
import { FaAngleDown } from "react-icons/fa"; // Fixed import
import Divider from "@mui/material/Divider"; // Fixed import
import styles from "./Header.module.css";
import Deepalogo from "@/assets/EditedLogo-removebg-preview.png"; // Adjusted path
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // STEP 3: Create a ref for the navigation container (desktop)
  const navContainerRef = useRef(null);

  let hoverTimeout;

  // STEP 4: Handle mobile detection after hydration
  useEffect(() => {
    setIsHydrated(true);
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // STEP 5: Handle closing mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // STEP 6: Handle click outside for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        setVisibleDropdown(null);
      }
    };

    if (visibleDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibleDropdown]);

  // Handles hover effect for desktop
  const handleMouseEnter = (index) => {
    if (window.innerWidth > 920) {
      clearTimeout(hoverTimeout);
      setVisibleDropdown(index);
    }
  };

  // Handles mouse leaving for desktop
  const handleMouseLeave = () => {
    if (window.innerWidth > 920) {
      hoverTimeout = setTimeout(() => {
        setVisibleDropdown(null);
      }, 300);
    }
  };

  // Handles clicks for desktop dropdowns
  const handleDropdownToggle = (index) => {
    setVisibleDropdown((prev) => (prev === index ? null : index));
  };

  const handleNavigation = (href) => {
    setIsOpen(false);
    setVisibleDropdown(null);
    handleMouseLeave();
    setOpenDropdown(null); // Close mobile dropdown

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      if (pathname === "/") {
        const anchorId = href.substring(2);
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/").then(() => {
          const anchorId = href.substring(2);
          const element = document.querySelector(`#${anchorId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    } else {
      router.push(href);
    }
  };

  // Handle dropdown open/close
  const handleMenuOpen = (menu) => {
    if (isMobile) {
      setOpenDropdown((prev) => (prev === menu ? null : menu));
    }
  };

  // Avoid rendering navigation until hydrated
  if (!isHydrated) {
    return null;
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.topHeader}>
        <Navbar expand="lg" className={styles.myTopHeader}>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              height: "60px",
              alignItems: "center",
            }}
          >
            <div className={styles.topMenuItem}>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me d-flex align-items-center">
                  <Link
                    style={{ marginLeft: "20px" }}
                    href="/#ourstory"
                    className={styles.styledNavLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/#ourstory");
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    style={{ marginLeft: "20px" }}
                    href="/#About"
                    className={styles.styledNavLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/#About");
                    }}
                  >
                    Who We Are
                  </Link>
                  <Nav.Link
                    style={{ marginLeft: "20px" }}
                    onClick={() => handleNavigation("/")}
                    className={styles.algoTradingLink}
                  >
                    Algo Trading
                  </Nav.Link>
                  <Link
                    style={{ marginLeft: "20px" }}
                    href="/#partner"
                    className={styles.styledNavLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/#partner");
                    }}
                  >
                    Partner with us
                  </Link>
                  <Nav.Link
                    style={{ marginLeft: "20px" }}
                    onClick={() => handleNavigation("/#contact")}
                    className={styles.btnTopHeader}
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
      <Divider className={styles.styledDivider} />
      <div className={styles.headerBottom}>
        <Container>
          <div className={styles.myContainer}>
            <div
              className={styles.logoContainer}
              onClick={() => handleNavigation("/")}
            >
              <Image
                src={Deepalogo}
                alt="Logo"
                style={{
                  width: "auto",
                  height: "100px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={
                  isOpen ? styles.hamburgerLine1Open : styles.hamburgerLine
                }
              ></div>
              <div
                className={
                  isOpen ? styles.hamburgerLine2Open : styles.hamburgerLine
                }
              ></div>
              <div
                className={
                  isOpen ? styles.hamburgerLine3Open : styles.hamburgerLine
                }
              ></div>
            </div>

            {/* UNIFIED NAVIGATION */}
            <nav
              className={`${styles.navBtn} ${isOpen ? styles.navBtnOpen : ""}`}
            >
              {isMobile && isOpen ? (
                // Mobile view with Collapse Dropdowns
                <ul
                  style={{
                    paddingLeft: "0",
                    margin: "0",
                    listStyle: "none",
                    width: "100%",
                  }}
                >
                  {/* Home */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                      onClick={() => handleNavigation("/#ourstory")}
                    >
                      Home
                    </Button>
                  </li>
                  {/* Who We Are */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                      onClick={() => handleNavigation("/#About")}
                    >
                      Who We Are
                    </Button>
                  </li>
                  {/* Partner With Us */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                      onClick={() => handleNavigation("/#partner")}
                    >
                      Partner With Us
                    </Button>
                  </li>
                  {/* What We Serve */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        textTransform: "none",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                        display:'flex'
                      }}
                      onClick={() => handleMenuOpen("WhatWeServe")}
                      endIcon={<FaAngleDown />}
                    >
                      What We Serve
                    </Button>
                    <Collapse in={openDropdown === "WhatWeServe"} timeout={300}>
                      <Box
                        sx={{
                          width: "100vw",
                          maxWidth: "100%",
                          maxHeight: "70vh",
                          overflowY: "auto",
                          backgroundColor: "#fff",
                          color: "#49326b",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                          borderRadius: "0",
                          marginTop: "0.5rem",
                          padding: "0",
                        }}
                      >
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation(
                              "/WhatWeServe/investment-solution"
                            );
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Investment Solutions
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation(
                              "/WhatWeServe/retirement-planning"
                            );
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Retirement Planning
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/WhatWeServe/wealth-management");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Wealth Management
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation(
                              "/WhatWeServe/educational-resource"
                            );
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Educational Resources
                        </Box>
                      </Box>
                    </Collapse>
                  </li>
                  {/* What We Do */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        textTransform: "none",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                                                display:'flex'
                      }}
                      onClick={() => handleMenuOpen("WhatWeDo")}
                      endIcon={<FaAngleDown />}
                    >
                      What We Do
                    </Button>
                    <Collapse in={openDropdown === "WhatWeDo"} timeout={300}>
                      <Box
                        sx={{
                          width: "100vw",
                          maxWidth: "100%",
                          maxHeight: "70vh",
                          overflowY: "auto",
                          backgroundColor: "#fff",
                          color: "#49326b",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                          borderRadius: "0",
                          marginTop: "0.5rem",
                          padding: "0",
                                                    textAlign:'center'
                        }}
                      >
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/service/mutual-funds");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Mutual Funds
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation(
                              "/service/training-in-financial-markets"
                            );
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Training in Financial Markets
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/service/algo-trading");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Algo Trading Solutions
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/service/advisory-services");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Advisory Services
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/service/fixed-deposits-&-bond");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Fixed Deposits & Bonds
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation(
                              "/service/alternate-investment-funds-(AIFS)"
                            );
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Alternative Investment Funds
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/service/real-estate-funds");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Real Estate Funds
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/service/insurances");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Insurances
                        </Box>
                      </Box>
                    </Collapse>
                  </li>
                  {/* What We Think */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        justifyContent: "center",
                        textTransform: "none",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleMenuOpen("WhatWeThink")}
                      endIcon={<FaAngleDown />}
                    >
                      What We Think
                    </Button>
                    <Collapse in={openDropdown === "WhatWeThink"} timeout={300}>
                      <Box
                        sx={{
                          width: "100vw",
                          maxWidth: "100%",
                          maxHeight: "70vh",
                          overflowY: "auto",
                          backgroundColor: "#fff",
                          color: "#49326b",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                          borderRadius: "0",
                          marginTop: "0.5rem",
                          padding: "0",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/Blog/blogs");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Blogs
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/#media");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Videos
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/#media");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Reports
                        </Box>
                      </Box>
                    </Collapse>
                  </li>
                  {/* Calculator */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        justifyContent: "center",
                        textTransform: "none",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleMenuOpen("Calculator")}
                      endIcon={<FaAngleDown />}
                    >
                      Calculator
                    </Button>
                    <Collapse in={openDropdown === "Calculator"} timeout={300}>
                      <Box
                        sx={{
                          width: "100vw",
                          maxWidth: "100%",
                          maxHeight: "70vh",
                          overflowY: "auto",
                          backgroundColor: "#fff",
                          color: "#49326b",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                          borderRadius: "0",
                          marginTop: "0.5rem",
                          padding: "0",
                          textAlign: "center",
                        }}
                      >
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/calculators/sip-calculator");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          SIP
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/calculators/lumpsum-calculator");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          Lumpsum
                        </Box>
                        <Box
                          component="li"
                          onClick={() => {
                            handleNavigation("/calculators/swp-calculator");
                          }}
                          sx={{
                            color: "#49326b",
                            padding: "12px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                          }}
                        >
                          SWP
                        </Box>
                      </Box>
                    </Collapse>
                  </li>
                  <Box
                    sx={{
                      backgroundColor: "#49326b",
                      padding: "10px",
                      maxWidth: "200px",
                      width: "100%",
                      borderRadius: "5px",
                      margin: "10px auto",
                    }}
                  >
                    <Button
                      fullWidth
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                      onClick={() => handleNavigation("/")}
                    >
                      Algo Trading
                    </Button>
                  </Box>
                </ul>
              ) : (
                // Desktop view
                <ul className={styles.navLinks} ref={navContainerRef}>
                  <li
                    className={styles.navLink}
                    onClick={() => handleDropdownToggle(0)}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: "flex",letterSpacing:'1px'}}
                  >
                    What We Serve <FaAngleDown style={{ marginTop: "5px" }} />
                    <div
                      className={`${styles.dropdown} ${
                        visibleDropdown === 0 ? styles.dropdownShow : ""
                      }`}
                    >
                      <ul>
                        <li
                          onClick={() =>
                            handleNavigation("/WhatWeServe/investment-solution")
                          }
                        >
                          Investment Solutions
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/WhatWeServe/retirement-planning")
                          }
                        >
                          Retirement Planning
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/WhatWeServe/wealth-management")
                          }
                        >
                          Wealth Management
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation(
                              "/WhatWeServe/educational-resource"
                            )
                          }
                        >
                          Educational Resources
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className={styles.navLink}
                    onClick={() => handleDropdownToggle(1)}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: "flex" }}
                  >
                    What We Do <FaAngleDown style={{ marginTop: "5px" }} />
                    <div
                      className={`${styles.dropdown} ${
                        visibleDropdown === 1 ? styles.dropdownShow : ""
                      }`}
                    >
                      <ul>
                        <li
                          onClick={() =>
                            handleNavigation("/service/mutual-funds")
                          }
                        >
                          Mutual Funds
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation(
                              "/service/training-in-financial-markets"
                            )
                          }
                        >
                          Training in Financial Markets
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/service/algo-trading")
                          }
                        >
                          Algo Trading Solutions
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/service/advisory-services")
                          }
                        >
                          Advisory Services
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/service/fixed-deposits-&-bond")
                          }
                        >
                          Fixed Deposits & Bonds
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation(
                              "/service/alternate-investment-funds-(AIFs)"
                            )
                          }
                        >
                          Alternative Investment Funds
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/service/real-estate-funds")
                          }
                        >
                          Real Estate Funds
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/service/insurances")
                          }
                        >
                          Insurances
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className={styles.navLink}
                    onClick={() => handleDropdownToggle(3)}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: "flex" }}
                  >
                    What We Think <FaAngleDown style={{ marginTop: "5px" }} />
                    <div
                      className={`${styles.dropdown} ${
                        visibleDropdown === 3 ? styles.dropdownShow : ""
                      }`}
                    >
                      <ul>
                        <li onClick={() => handleNavigation("/Blog/blogs")}>
                          Blogs
                        </li>
                        <li onClick={() => handleNavigation("/#media")}>
                          Videos
                        </li>
                        <li onClick={() => handleNavigation("/#media")}>
                          Reports
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className={styles.navLink}
                    onClick={() => handleDropdownToggle(2)}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: "flex" }}
                  >
                    Calculator <FaAngleDown style={{ marginTop: "5px" }} />
                    <div
                      className={`${styles.dropdown} ${
                        visibleDropdown === 2 ? styles.dropdownShow : ""
                      }`}
                    >
                      <ul>
                        <li
                          onClick={() =>
                            handleNavigation("/calculators/sip-calculator")
                          }
                        >
                          SIP
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/calculators/lumpsum-calculator")
                          }
                        >
                          Lumpsum
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/calculators/swp-calculator")
                          }
                        >
                          SWP
                        </li>
                      </ul>
                    </div>
                  </li>
                  <Box
                    sx={{
                      backgroundColor: "#49326b",
                      padding: "10px",
                      maxWidth: "200px",
                      width: "100%",
                      borderRadius: "5px",
                      display: { xs: "block", sm: "none" },
                    }}
                  >
                    <Nav.Link
                      onClick={() => handleNavigation("/")}
                      style={{
                        height: "40px",
                        width: "120px",
                        color: "#fff",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        textAlign: "center",
                        display: "inline-block",
                        textDecoration: "none",
                        alignContent: "center",
                        marginLeft: "30px",
                      }}
                    >
                      Algo Trading
                    </Nav.Link>
                  </Box>
                </ul>
              )}
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
