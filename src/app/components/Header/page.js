"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import Divider from '@mui/material/Divider';
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
          <Container style={{display:'flex', justifyContent:'space-between',height:'60px',alignItems:'center'}}>
            <h6 className={styles.topHeader}>#Deepan India</h6>
            <div className={styles.topMenuItem}>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me d-flex align-items-center" >
                  <Link style={{marginLeft:'20px',fontWeight:'bold'}}
                    href="/#ourstory"
                    className={styles.styledNavLink}
                    onClick={() => handleNavigation("/#ourstory")}
                  >
                    Home
                  </Link>
                  <Link style={{marginLeft:'20px',fontWeight:'bold'}}
                    href="/#About"
                    className={styles.styledNavLink}
                    onClick={() => handleNavigation("/#About")}
                  >
                    Who We Are
                  </Link>
                  <Nav.Link style={{marginLeft:'20px',fontWeight:'bold'}}
                    onClick={() => handleNavigation("/")}
                    className={styles.algoTradingLink}
                  >
                    Algo Trading
                  </Nav.Link>
                  <Link style={{marginLeft:'20px',fontWeight:'bold'}}
                    href="/#partner"
                    className={styles.styledNavLink}
                    onClick={() => handleNavigation("/#partner")}
                  >
                    Partner with us
                  </Link>
                  <Nav.Link style={{marginLeft:'20px', fontWeight:'bold'}}
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
                width={100}
                height={100}
                className={styles.logo}
              />
            </div>
            <div
              className={`${styles.hamburger} sample`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={isOpen ? styles.hamburgerLine1Open : styles.hamburgerLine}></div>
              <div className={isOpen ? styles.hamburgerLine2Open : styles.hamburgerLine}></div>
              <div className={isOpen ? styles.hamburgerLine3Open : styles.hamburgerLine}></div>
            </div>
            <div className={`${styles.navBtn} ${isOpen ? styles.navBtnOpen : ""}`}>
              <ul className={styles.navLinks}>
                <li
                  className={styles.navLink}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                  style={{display:'flex'}}
                >
                  What We Serve <FaAngleDown style={{marginTop:'5px'}} />
                  <div className={`${styles.dropdown} ${visibleDropdown === 0 ? styles.dropdownShow : ""}`}>
                    <ul>
                      <li onClick={() => router.push("/WhatWeServe/investment-solution")}>
                        Investment Solutions
                      </li>
                      <li onClick={() => router.push("/WhatWeServe/retirement-planning")}>
                        Retirement Planning
                      </li>
                      <li onClick={() => router.push("/WhatWeServe/wealth-management")}>
                        Wealth Management
                      </li>
                      <li onClick={() => router.push("/WhatWeServe/educational-resource")}>
                        Educational Resources
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={styles.navLink}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  style={{display:'flex'}}
                >
                  What We Do <FaAngleDown style={{marginTop:'5px'}} />
                  <div className={`${styles.dropdown} ${visibleDropdown === 1 ? styles.dropdownShow : ""}`}>
                    <ul>
                      <li onClick={() => router.push("/WhatWeDo/mutual-funds")}>
                        Mutual Funds
                      </li>
                      <li onClick={() => router.push("/WhatWeDo/training-in-financial-markets")}>
                        Training in Financial Markets
                      </li>
                      <li onClick={() => router.push("/WhatWeDo/algo-trading")}>
                        Algo Trading Solutions
                      </li>
                      <li onClick={() => router.push("/WhatWeDo/advisory-services")}>
                        Advisory Services
                      </li>
                      <li onClick={() => router.push("/WhatWeDo/fixed-deposits-&-bond")}>
                        Fixed Deposits & Bonds
                      </li>
                      <li onClick={() => router.push("/WhatWeDo/alternate-investment-funds-(AIFS)")}>
                        Alternative Investment funds
                      </li>
                      <li onClick={() => router.push("/WhatWeDo/real-estate-funds")}>
                        Real Estate funds
                      </li>
                      <li onClick={() => router.push("/WhatWeDo/insurances")}>
                        Insurances
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={styles.navLink}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                  style={{display:'flex'}}
                >
                  What We Think <FaAngleDown style={{marginTop:'5px'}} />
                  <div className={`${styles.dropdown} ${visibleDropdown === 3 ? styles.dropdownShow : ""}`}>
                    <ul>
                      <li onClick={() => handleNavigation("/#card")}>Blogs</li>
                      <li onClick={() => handleNavigation("/#media")}>Videos</li>
                      <li onClick={() => handleNavigation("/#media")}>Reports</li>
                    </ul>
                  </div>
                </li>
                <li
                  className={styles.navLink}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  style={{display:'flex'}}
                >
                  Calculator <FaAngleDown style={{marginTop:'5px'}}/>
                  <div className={`${styles.dropdown} ${visibleDropdown === 2 ? styles.dropdownShow : ""}`}>
                    <ul>
                      <li onClick={() => router.push("../calculators/sip-calculator")}>SIP Calculator</li>
                      <li onClick={() => router.push("../calculators/lumpsum-calculator")}>Lumpsum</li>
                      <li onClick={() => router.push("../calculators/swp-calculator")}>
                        SIP combined with Lumpsum
                      </li>
                      <li onClick={() => router.push("/swp-calculator")}>SWP</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

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
                  <Image
                    src={Deepalogo}
                    alt="Logo"
                    className={styles.logo}
                  />
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.customNavbarToggle} />
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
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/retirement-planning");
                          setExpanded(false);
                        }}
                      >
                        Retirement Planning
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/wealth-management");
                          setExpanded(false);
                        }}
                      >
                        Wealth Management
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/educational-resource");
                          setExpanded(false);
                        }}
                      >
                        Educational Resources
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="What We Do" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/mutual-funds");
                          setExpanded(false);
                        }}
                      >
                        Mutual Funds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/training-in-financial-markets");
                          setExpanded(false);
                        }}
                      >
                        Training in Financial Markets
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/algo-trading");
                          setExpanded(false);
                        }}
                      >
                        Algo Trading
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/advisory-services");
                          setExpanded(false);
                        }}
                      >
                        Advisory Services
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/fixed-deposits-&-bond");
                          setExpanded(false);
                        }}
                      >
                        Fixed Deposits & Bonds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/alternate-investment-funds-(AIFS)");
                          setExpanded(false);
                        }}
                      >
                        Alternative Investment funds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/real-estate-funds");
                          setExpanded(false);
                        }}
                      >
                        Real Estate funds
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/service/insurances");
                          setExpanded(false);
                        }}
                      >
                        Insurances
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="What We Think" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          handleNavigation("/#card");
                          setExpanded(false);
                        }}
                      >
                        Blogs
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          handleNavigation("/#media");
                          setExpanded(false);
                        }}
                      >
                        Videos
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          handleNavigation("/#media");
                          setExpanded(false);
                        }}
                      >
                        Reports
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Calculator" id="basic-nav-dropdown">
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/sip-calculator");
                          setExpanded(false);
                        }}
                      >
                        SIP Calculator
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/lumpsum-calculator");
                          setExpanded(false);
                        }}
                      >
                        Lumpsum
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/swp-calculator");
                          setExpanded(false);
                        }}
                      >
                        SIP combined with Lumpsum
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className={styles.navDropdown}
                        onClick={() => {
                          router.push("/swp-calculator");
                          setExpanded(false);
                        }}
                      >
                        SWP
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      onClick={() => {
                        handleNavigation("/");
                        setExpanded(false);
                      }}
                      className={styles.algoTradingMobileLink}
                    >
                      Algo Trading
                    </Nav.Link>
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