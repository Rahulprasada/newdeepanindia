"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import styles from "./Header.module.css";
import Deepalogo from "../../../assets/EditedLogo-removebg-preview.png";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  let hoverTimeout;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 676);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout);
    setVisibleDropdown(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setVisibleDropdown(null);
    }, 300);
  };

  const handleNavigation = (href) => {
    // Close mobile menu on navigation
    setIsOpen(false);
    
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
                    style={{
                      marginLeft: "20px",
                      fontWeight: "bold",
                      color: "red",
                    }}
                    href="/#ourstory"
                    className={styles.styledNavLink}
                    onClick={(e) => { e.preventDefault(); handleNavigation("/#ourstory"); }}
                  >
                    Home
                  </Link>
                  <Link
                    style={{ marginLeft: "20px", fontWeight: "bold" }}
                    href="/#About"
                    className={styles.styledNavLink}
                    onClick={(e) => { e.preventDefault(); handleNavigation("/#About"); }}
                  >
                    Who We Are
                  </Link>
                  <Nav.Link
                    style={{ marginLeft: "20px", fontWeight: "bold" }}
                    onClick={() => handleNavigation("/")}
                    className={styles.algoTradingLink}
                  >
                    Algo Trading
                  </Nav.Link>
                  <Link
                    style={{ marginLeft: "20px", fontWeight: "bold" }}
                    href="/#partner"
                    className={styles.styledNavLink}
                    onClick={(e) => { e.preventDefault(); handleNavigation("/#partner"); }}
                  >
                    Partner with us
                  </Link>
                  <Nav.Link
                    style={{ marginLeft: "20px", fontWeight: "bold" }}
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
              className={`${styles.logoContainer} sample`}
              onClick={() => handleNavigation("/")}
            >
              <Image
                src={Deepalogo}
                alt="Logo"
                style={{
                  width:"auto",
                  height: "100px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div
              className={`${styles.hamburger} sample`}
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
            <div
              className={`${styles.navBtn} ${isOpen ? styles.navBtnOpen : ""}`}
            >
              <ul className={styles.navLinks}>
                <li
                  className={styles.navLink}
                  onClick={() => visibleDropdown === 0 ? setVisibleDropdown(null) : setVisibleDropdown(0)}
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
                  onClick={() => visibleDropdown === 1 ? setVisibleDropdown(null) : setVisibleDropdown(1)}
                  style={{ display: "flex" }}
                >
                  What We Do <FaAngleDown style={{ marginTop: "5px" }} />
                  <div
                    className={`${styles.dropdown} ${
                      visibleDropdown === 1 ? styles.dropdownShow : ""
                    }`}
                  >
                    <ul>
                      <li onClick={() => handleNavigation("/service/mutual-funds")}>
                        Mutual Funds
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("/service/training-in-financial-markets")
                        }
                      >
                        Training in Financial Markets
                      </li>
                      <li onClick={() => handleNavigation("/service/algo-trading")}>
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
                      <li onClick={() => handleNavigation("/service/insurances")}>
                        Insurances
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={styles.navLink}
                  onClick={() => visibleDropdown === 3 ? setVisibleDropdown(null) : setVisibleDropdown(3)}
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
                  onClick={() => visibleDropdown === 2 ? setVisibleDropdown(null) : setVisibleDropdown(2)}
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
                          handleNavigation("../calculators/sip-calculator")
                        }
                      >
                        SIP
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("../calculators/lumpsum-calculator")
                        }
                      >
                        Lumpsum
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("../calculators/swp-calculator")
                        }
                      >
                        SWP
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* This block of code for mobileMenus seems to have contradictory logic */}
          {/* It's set to display only when !isMobile, but its CSS is for max-width: 600px */}
          {/* This means it will likely never be displayed. The primary mobile menu is the one above. */}
          {!isMobile && (
            <div className={styles.mobileMenus}>
              <Navbar
                expand="lg"
                expanded={expanded}
                onToggle={() => setExpanded(!expanded)}
                className={styles.myTopHeader}

              >
                <Container>
                  <div className={styles.logoContainer}>
                    <Image src={Deepalogo} alt="Logo" className={styles.logo} />
                  </div>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={styles.customNavbarToggle}
                  />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.customNavbarLinks}>
                      <NavDropdown title="Who We Are" id="basic-nav-dropdown">
                        <NavDropdown.Item
                          className={styles.navDropdown}
                          onClick={() => {
                            router.push("/investment-solution");
                            setExpanded(false);
                          }}
                        >
                          Investment Solutions
                        </NavDropdown.Item>
                        {/* Other NavDropdown.Items */}
                      </NavDropdown>
                      {/* Other NavDropdowns */}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
}