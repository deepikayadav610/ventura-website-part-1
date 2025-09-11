import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.location.reload();
    } else {
      navigate(path);
    }
  };
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top-Contact + Social */}
      <div className={`py-1 bg-social ${hideTopBar ? "hide" : ""}`}>
        <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center text-center px-5">
          <div className="d-flex justify-content-center gap-3 small contact-info">
            <a
              href="mailto:sales@venturasteels.com"
              className="text-decoration-none"
              title="Email Sales - Ventura Steels"
            >
              <span>
                <i className="bi bi-envelope-fill me-1" aria-hidden="true"></i>
                sales@venturasteels.com
              </span>
            </a>
            <a
              href="mailto:sales@venturasteels.com"
              className="text-decoration-none"
              title="Email Enquiry - Ventura Steels"
            >
              <span>
                <i className="bi bi-envelope-fill me-1" aria-hidden="true"></i>
                enquiry@venturasteels.com
              </span>
            </a>
            <span>
              <i className="bi bi-telephone-fill me-1" aria-hidden="true"></i>
              Tel.: +91 22 2869 3824
            </span>
            <span>
              <i className="bi bi-telephone-fill me-1" aria-hidden="true"></i>
              Cell: +91 9819225666
            </span>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-2 mt-md-0">
            <a
              href="https://www.facebook.com/VenturaSteels"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ventura Steels on Facebook"
              title="Ventura Steels Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/venturasteels/?__pwa=1"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ventura Steels on Instagram"
              title="Ventura Steels Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ventura Steels on LinkedIn"
              title="Ventura Steels LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-navbar d-lg-none">
        <div className="container d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mb-0 h1">
            <img
              src="/image/logo-v.png"
              alt="Ventura Steels company logo – Leading steel supplier in India"
              height={40}
              className="rounded"
            />
          </span>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        <ul className="nav flex-column text-center">
          {[
            { to: "/", text: "Home" },
            { to: "/about", text: "About Us" },
            { to: "/products", text: "Products" },
            { to: "/quality", text: "Quality" },
            { to: "/infrastructure", text: "Infrastructure" },
            { to: "/certifications", text: "Certifications" },
            { to: "/enquiry", text: "Enquiry" },
            { to: "/blog", text: "Blogs" },
            { to: "/careers", text: "Careers" },
            { to: "/contact", text: "Contact Us" },
          ].map(({ to, text }) => (
            <li key={to} className="nav-item">
              <button
                onClick={() => {
                  handleNavClick(to);
                  setIsSidebarOpen(false);
                }}
                className="nav-link text-white"
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Nav */}
      <nav className="bg-navbar d-none d-lg-block">
        {/* Middle-Logo */}
        <div className="bg-white py-3 text-center ">
          <img
            src="/image/ventura-logo.jpg"
            alt="Ventura Steels company logo – Leading steel supplier in India"
            className="middle-logo"
          />
        </div>
        <div className="container d-flex justify-content-center gap-4 py-2">
          <a href="/" className="text-white text-decoration-none nav-link">
            Home
          </a>
          <button
            onClick={() => handleNavClick("/about")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            About Us
          </button>

          <div className="nav-item dropdown position-static">
            <button
              className="nav-link dropdown-toggle text-white"
              onClick={() => handleNavClick("/products")}
            >
              Products
            </button>

            {/* Products dropdown */}
            <div className="dropdown-menu shadow-lg rounded-0 mega-dropdown p-2">
              {/* Hot Work */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/hot-work")}
                  className="dropdown-item"
                >
                  Hot Work Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/hot-work/DB6")}
                    className="dropdown-item "
                  >
                    DB6 / DIN 1.2714 / AISI L6
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H13")}
                    className="dropdown-item "
                  >
                    H13 / AISI H13 / DIN 1.2344
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H11")}
                    className="dropdown-item "
                  >
                    H11 / AISI H 11 / DIN 1.2343
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H21")}
                    className="dropdown-item "
                  >
                    H21 / AISI H21 / DIN 1.2581
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H10")}
                    className="dropdown-item "
                  >
                    H10 / AISI H10 / DIN 1.2365 / SKD7
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H12")}
                    className="dropdown-item "
                  >
                    H12 / AISI H12 / DIN 1.2606
                  </button>
                </div>
              </div>

              {/* Cold Work */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/cold-work")}
                  className="dropdown-item"
                >
                  Cold Work Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/cold-work/D2")}
                    className="dropdown-item "
                  >
                    D2 / 1.2379 / HCHCR D2
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/D3")}
                    className="dropdown-item "
                  >
                    D3 / 1.2080 / HCHCR D3
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/D5")}
                    className="dropdown-item "
                  >
                    D5 / Cr12MoV / 1.2601
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/A2")}
                    className="dropdown-item "
                  >
                    A2 / 1.2363
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/O1")}
                    className="dropdown-item "
                  >
                    O1/ 2510/ OHNS O1
                  </button>
                </div>
              </div>

              {/* Plastic Mould Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/plastic")}
                  className="dropdown-item"
                >
                  Plastic Mould Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/plastic/P20N1")}
                    className="dropdown-item "
                  >
                    P20+Ni / 1.2738
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/plastic/P20")}
                    className="dropdown-item "
                  >
                    P20 / 1.2311
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/plastic/2316")}
                    className="dropdown-item "
                  >
                    1.2316
                  </button>
                </div>
              </div>

              {/* Spring Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/spring")}
                  className="dropdown-item"
                >
                  Spring Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/spring/EN47")}
                    className="dropdown-item "
                  >
                    EN 47 / 50CrV4 / 51CrV4 / AISI 6150 / DIN 8159 / SUP 10
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/SUP9")}
                    className="dropdown-item "
                  >
                    SUP 9
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/SAE9254")}
                    className="dropdown-item "
                  >
                    SAE 9254 / SUP 11A
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/EN31")}
                    className="dropdown-item "
                  >
                    EN 31 / SAE 52100 / 100Cr6
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/EN45")}
                    className="dropdown-item "
                  >
                    EN45 / SAE 9260 / 60Si7
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/SAE5160")}
                    className="dropdown-item "
                  >
                    SAE 5160
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/SAE5160")}
                    className="dropdown-item "
                  >
                    52CrMoV4 / 50Cr4MoV2
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/SAE5160")}
                    className="dropdown-item "
                  >
                    52CrV4 / 51CrV4 / AISI 4150
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/SAE5160")}
                    className="dropdown-item "
                  >
                    55Si7 / 56Si7 / SAE 9255
                  </button>
                </div>
              </div>

              {/* Alloy Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/alloy-steel")}
                  className="dropdown-item"
                >
                  Alloy Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN24")}
                    className="dropdown-item "
                  >
                    20MnCr5 / 16MnCr5
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN19")}
                    className="dropdown-item "
                  >
                    SAE 4140 / EN 19 / 42CrMo4 / EN18A / EN18A-D
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    SAE 1020
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    41Cr4 / EN18 / 40Cr4B
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    EN 41B / 41CrV4 / AISI 4340 / 40NiCrMo84
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    EN 24 / 18CrNiMo6
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    SAE4130
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    EN36C
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    SAE 8620 / EN353 / SAE 9310
                  </button>
                </div>
              </div>

              {/* Carbon Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/carbon-steel")}
                  className="dropdown-item"
                >
                  Carbon Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() => handleNavClick("/products/carbon/C45")}
                    className="dropdown-item "
                  >
                    C45 / EN9 /EN8A / EN8D / EN8M / EN8DM / CK45 / AISI 1045
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/SAE1141")}
                    className="dropdown-item "
                  >
                    SAE 1018 / ASTM A36 / ASTM A29 / SAE 1137 / SAE 1138
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/ST52.3")}
                    className="dropdown-item "
                  >
                    ST 52.3
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/EN1A")}
                    className="dropdown-item "
                  >
                    EN 1A / EN 1A_PB / EN 1A_L / 230M07 PB
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/EN1A")}
                    className="dropdown-item "
                  >
                    35C8 / C35 / EN8 / SAE 1035 / 45C8
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/EN1A")}
                    className="dropdown-item "
                  >
                    SAE 1541 / EN 15
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/EN1A")}
                    className="dropdown-item "
                  >
                    27C15 / SAE 1527
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/EN1A")}
                    className="dropdown-item "
                  >
                    SAE 1117 /ASTM A108
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/EN1A")}
                    className="dropdown-item "
                  >
                    EN43BCr / SAE 1050 / EN43A
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/EN1A")}
                    className="dropdown-item "
                  >
                    SAE 1141
                  </button>
                </div>
              </div>

              {/* Boron Steel */}
              <div className="dropdown-submenu">
                <button
                  onClick={() => handleNavClick("/products/boron-steel")}
                  className="dropdown-item"
                >
                  Boron Steel ▸
                </button>
                <div className="dropdown-menu sub-dropdown">
                  <button
                    onClick={() =>
                      handleNavClick("/products/boron-steel/10B21")
                    }
                    className="dropdown-item "
                  >
                    10B21
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/boron-steel/15B25")
                    }
                    className="dropdown-item "
                  >
                    15B25
                  </button>
                  <button
                    onClick={() =>
                      handleNavClick("/products/boron-steel/10B35")
                    }
                    className="dropdown-item "
                  >
                    10B35
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavClick("/quality")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Quality
          </button>
          <button
            onClick={() => handleNavClick("/infrastructure")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Infrastructure
          </button>
          <button
            onClick={() => handleNavClick("/certifications")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Certifications
          </button>
          <button
            onClick={() => handleNavClick("/enquiry")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Enquiry
          </button>
          <button
            onClick={() => handleNavClick("/blogs")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Blogs
          </button>
          <button
            onClick={() => handleNavClick("/careers")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Careers
          </button>
          <button
            onClick={() => handleNavClick("/contactUs")}
            className="text-white text-decoration-none nav-link bg-transparent border-0"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
}
