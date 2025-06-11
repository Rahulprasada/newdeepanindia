"use client";

// STEP 1: Import 'useRef'
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
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // STEP 2: Create a ref for the navigation container
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

  // STEP 3: Add the "click outside" detector effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target)
      ) {
        setVisibleDropdown(null); // Close any open dropdown
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
    setVisibleDropdown(null); // Ensure dropdown closes on navigation

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
        router.push("/");
        setTimeout(() => {
          const anchorId = href.substring(2);
          const element = document.querySelector(`#${anchorId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      router.push(href);
    }
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
                // Use a class for easier styling
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

            {/* UNIFIED NAVIGATION - This works for both desktop and mobile */}
            <nav
              className={`${styles.navBtn} ${isOpen ? styles.navBtnOpen : ""}`}
            >
              <ul
                className="block md:hidden"
                style={{ paddingLeft: "0", margin: "0" }}
              >
                <li
                  style={{
                    color: "#49326b",
                    marginTop: "10px",
                    listStyle: "none",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/#ourstory");
                  }}
                >

                    Home
                </li>
              </ul>

              <ul className="block md:hidden">
                <li
                  style={{
                    color: "#49326b",
                    marginTop: "10px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/#About");
                  }}
                >
                  Who We Are
                </li>
              </ul>

              <ul className="block md:hidden">
                <li
                  style={{
                    color: "#49326b",
                    marginTop: "10px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/#partner");
                  }}
                >
                  Partner With Us
                </li>
              </ul>

              {/* STEP 4: Attach the ref to the UL */}
              <ul className={styles.navLinks} ref={navContainerRef}>
                <li
                  className={styles.navLink}
                  onClick={() =>
                    visibleDropdown === 0
                      ? setVisibleDropdown(null)
                      : setVisibleDropdown(0)
                  }
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
                  onClick={() =>
                    visibleDropdown === 1
                      ? setVisibleDropdown(null)
                      : setVisibleDropdown(1)
                  }
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
                            "/service/alternate-investment-funds-(AIFS)"
                          )
                        }
                      >
                        Alternative Investment funds
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("/service/real-estate-funds")
                        }
                      >
                        Real Estate funds
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
                  onClick={() =>
                    visibleDropdown === 3
                      ? setVisibleDropdown(null)
                      : setVisibleDropdown(3)
                  }
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
                  onClick={() =>
                    visibleDropdown === 2
                      ? setVisibleDropdown(null)
                      : setVisibleDropdown(2)
                  }
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
                    display: { xs: "block", sm: "none" }, // 👈 Only show on mobile
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
            </nav>
          </div>
          {/* The redundant mobileMenus block has been removed to prevent hydration errors. */}
        </Container>
      </div>
    </header>
  );
}
