"use client";

// STEP 1: Import 'useRef' and MUI components
import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import styles from "./Header.module.css";
import Deepalogo from "../../../assets/EditedLogo-removebg-preview.png";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // STEP 2: State for MUI Menu anchor elements (mobile only)
  const [anchorElWhatWeServe, setAnchorElWhatWeServe] = useState(null);
  const [anchorElWhatWeDo, setAnchorElWhatWeDo] = useState(null);
  const [anchorElWhatWeThink, setAnchorElWhatWeThink] = useState(null);
  const [anchorElCalculator, setAnchorElCalculator] = useState(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // STEP 3: Create a ref for the navigation container
  const navContainerRef = useRef(null);

  let hoverTimeout;

  // This effect handles closing the mobile menu on window resize
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

  // STEP 4: Add the "click outside" detector effect for desktop dropdowns
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

  // Handles clicks for both mobile accordion and desktop "sticky" open
  const handleDropdownToggle = (index) => {
    setVisibleDropdown((prev) => (prev === index ? null : index));
  };

  const handleNavigation = (href) => {
    setIsOpen(false);
    setVisibleDropdown(null);
    handleMouseLeave();
    setAnchorElWhatWeServe(null);
    setAnchorElWhatWeDo(null);
    setAnchorElWhatWeThink(null);
    setAnchorElCalculator(null);

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

  // MUI Menu handlers
  const handleMenuOpen = (event, menu) => {
    if (isMobile) {
      if (menu === "WhatWeServe") setAnchorElWhatWeServe(event.currentTarget);
      if (menu === "WhatWeDo") setAnchorElWhatWeDo(event.currentTarget);
      if (menu === "WhatWeThink") setAnchorElWhatWeThink(event.currentTarget);
      if (menu === "Calculator") setAnchorElCalculator(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorElWhatWeServe(null);
    setAnchorElWhatWeDo(null);
    setAnchorElWhatWeThink(null);
    setAnchorElCalculator(null);
  };

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
                // Mobile view with MUI Dropdowns
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
                        justifyContent: "flex-start",
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
                        justifyContent: "space-between",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                      onClick={(e) => handleMenuOpen(e, "WhatWeServe")}
                      endIcon={<FaAngleDown />}
                    >
                      What We Serve
                    </Button>
                    <Menu
                      anchorEl={anchorElWhatWeServe}
                      open={Boolean(anchorElWhatWeServe)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        sx: {
                          backgroundColor: "#fff",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          width: "100%",
                          maxWidth: "300px",
                        },
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/WhatWeServe/investment-solution");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Investment Solutions
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/WhatWeServe/retirement-planning");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Retirement Planning
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/WhatWeServe/wealth-management");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Wealth Management
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/WhatWeServe/educational-resource");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Educational Resources
                      </MenuItem>
                    </Menu>
                  </li>
                  {/* What We Do */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        justifyContent: "space-between",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                      onClick={(e) => handleMenuOpen(e, "WhatWeDo")}
                      endIcon={<FaAngleDown />}
                    >
                      What We Do
                    </Button>
                    <Menu
                      anchorEl={anchorElWhatWeDo}
                      open={Boolean(anchorElWhatWeDo)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        sx: {
                          backgroundColor: "#fff",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          width: "100%",
                          maxWidth: "300px",
                        },
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/service/mutual-funds");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Mutual Funds
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation(
                            "/service/training-in-financial-markets"
                          );
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Training in Financial Markets
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/service/algo-trading");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Algo Trading Solutions
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/service/advisory-services");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Advisory Services
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/service/fixed-deposits-&-bond");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Fixed Deposits & Bonds
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation(
                            "/service/alternate-investment-funds-(AIFS)"
                          );
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Alternative Investment Funds
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/service/real-estate-funds");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Real Estate Funds
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/service/insurances");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Insurances
                      </MenuItem>
                    </Menu>
                  </li>
                  {/* What We Think */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        justifyContent: "space-between",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                      onClick={(e) => handleMenuOpen(e, "WhatWeThink")}
                      endIcon={<FaAngleDown />}
                    >
                      What We Think
                    </Button>
                    <Menu
                      anchorEl={anchorElWhatWeThink}
                      open={Boolean(anchorElWhatWeThink)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        sx: {
                          backgroundColor: "#fff",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          width: "100%",
                          maxWidth: "300px",
                        },
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/Blog/blogs");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Blogs
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/#media");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Videos
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/#media");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Reports
                      </MenuItem>
                    </Menu>
                  </li>
                  {/* Calculator */}
                  <li style={{ marginTop: "10px" }}>
                    <Button
                      fullWidth
                      sx={{
                        color: "#49326b",
                        justifyContent: "space-between",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                      onClick={(e) => handleMenuOpen(e, "Calculator")}
                      endIcon={<FaAngleDown />}
                    >
                      Calculator
                    </Button>
                    <Menu
                      anchorEl={anchorElCalculator}
                      open={Boolean(anchorElCalculator)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        sx: {
                          backgroundColor: "#fff",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          width: "100%",
                          maxWidth: "300px",
                        },
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/calculators/sip-calculator");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        SIP
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/calculators/lumpsum-calculator");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        Lumpsum
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/calculators/swp-calculator");
                          handleMenuClose();
                        }}
                        sx={{ color: "#49326b" }}
                      >
                        SWP
                      </MenuItem>
                    </Menu>
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
                // Desktop view (unchanged)
                <ul className={styles.navLinks} ref={navContainerRef}>
                  <li
                    className={styles.navLink}
                    onClick={() => handleDropdownToggle(0)}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: "flex" }}
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
                            handleNavigation("/WhatWeServe/educational-resource")
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
                          onClick={() => handleNavigation("/service/mutual-funds")}
                        >
                          Mutual Funds
                        </li>
                        <li
                          onClick={() =>
                            handleNavigation("/service/training-in-financial-markets")
                          }
                        >
                          Training in Financial Markets
                        </li>
                        <li
                          onClick={() => handleNavigation("/service/algo-trading")}
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
                            handleNavigation("/service/alternate-investment-funds-(AIFs)")
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
                          onClick={() => handleNavigation("/service/insurances")}
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
                      Algo 
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