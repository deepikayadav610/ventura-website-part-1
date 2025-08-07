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
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <div className="d-flex justify-content-center gap-3 small contact-info">
            <a
              href="mailto:sales@venturasteels.com"
              className="text-decoration-none text-white"
            >
              <span>
                <i className="bi bi-envelope me-1"></i>
                sales@venturasteels.com
              </span>
            </a>
            <a
              href="mailto:sales@venturasteels.com"
              className="text-decoration-none text-white"
            >
              <span>
                <i className="bi bi-envelope me-1"></i>
                enquiry@venturasteels.com
              </span>
            </a>
            <span>
              <i className="bi bi-telephone me-1"></i>Tel.: +91 22 2869 3824
            </span>
            <span>
              <i className="bi bi-telephone me-1"></i>Cell: +91 9819225666
            </span>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-2 mt-md-0">
            <a
              href="https://www.facebook.com/VenturaSteels"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/venturasteels/?__pwa=1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="bi bi-twitter"></i>
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
              alt="Ventura Logo"
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
            alt="Ventura Steels"
            style={{ maxHeight: "60px" }}
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
          <div
            className="nav-item dropdown position-static"
            onMouseEnter={handleMouseEnter}
            style={{ position: "relative" }}
          >
            <button
              onClick={() => handleNavClick("/products")}
              className="nav-link dropdown-toggle text-white"
            >
              Products
            </button>

            <div
              className={`dropdown-menu w-90 shadow-lg rounded-0 mega-dropdown text-white p-3 ${
                isOpen ? "show d-block" : "d-none"
              }`}
            >
              <div
                className="d-flex flex-wrap justify-content-around"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Hot Work Steel */}
                <div className="mega-column px-3">
                  <button
                    onClick={() => handleNavClick("/products/hot-work")}
                    className="dropdown-item text-heading"
                  >
                    Hot Work Steel
                  </button>

                  <button
                    onClick={() => handleNavClick("/products/hot-work/DB6")}
                    className="dropdown-item "
                  >
                    DB6 / DIN 2714 / AISI L6
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H13")}
                    className="dropdown-item "
                  >
                    H13 / 2344
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H11")}
                    className="dropdown-item "
                  >
                    H11 / 2343
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H21")}
                    className="dropdown-item "
                  >
                    H21 / 2581
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H10")}
                    className="dropdown-item "
                  >
                    H10 / 2365 / SKD7
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/hot-work/H12")}
                    className="dropdown-item "
                  >
                    H12 / 2606
                  </button>
                </div>

                {/* Cold Work Steel */}
                <div className="mega-column px-3">
                  <button
                    onClick={() => handleNavClick("/products/cold-work")}
                    className="dropdown-item text-heading"
                  >
                    Cold Work Steel
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/D2")}
                    className="dropdown-item "
                  >
                    D2 / 2379 / HCHCR D2
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/D3")}
                    className="dropdown-item "
                  >
                    D3 / 2080 / HCHCR D3
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/D5")}
                    className="dropdown-item "
                  >
                    D5 / Cr12MoV / 2601
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/A2")}
                    className="dropdown-item "
                  >
                    A2 / 2363
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/cold-work/01")}
                    className="dropdown-item "
                  >
                    O1/ 2510/ OHNS O1
                  </button>
                </div>

                {/* Plastic Mould Steel */}
                <div className="mega-column px-3">
                  <button
                    onClick={() => handleNavClick("/products/plastic")}
                    className="dropdown-item text-heading"
                  >
                    Plastic Mould Steel
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/plastic/P20N1")}
                    className="dropdown-item "
                  >
                    P20+N1 / 2738
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/plastic/P20")}
                    className="dropdown-item "
                  >
                    P20 / 2311
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/plastic/2316")}
                    className="dropdown-item "
                  >
                    2316
                  </button>
                </div>

                {/* Spring Steel */}
                <div className="mega-column px-3">
                  <button
                    onClick={() => handleNavClick("/products/spring")}
                    className="dropdown-item text-heading"
                  >
                    Spring Steel
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/EN47")}
                    className="dropdown-item "
                  >
                    EN 47 / 50CrV4 / 51CrV4 / AISI 6150 / DIN 8159
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
                    SAE 9254
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
                    EN45 / SAE 9260
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/spring/SAE5160")}
                    className="dropdown-item "
                  >
                    SAE 5160
                  </button>
                </div>

                {/* Alloy Steel */}
                <div className="mega-column px-3">
                  <button
                    onClick={() => handleNavClick("/products/alloy-steel")}
                    className="dropdown-item text-heading"
                  >
                    Alloy Steel
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN24")}
                    className="dropdown-item "
                  >
                    EN 24 / SAE 4340 / 40NiCrMo84 / EN 41B / EN14 / BM
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN19")}
                    className="dropdown-item "
                  >
                    EN 19 / SAE 4140 / DIN 42CrMo4
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/alloy/EN18")}
                    className="dropdown-item "
                  >
                    EN18 / 41Cr4
                  </button>
                </div>

                {/* Carbon Steel */}
                <div className="mega-column px-3">
                  <button
                    onClick={() => handleNavClick("/products/carbon-steel")}
                    className="dropdown-item text-heading"
                  >
                    Carbon Steel
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/C45")}
                    className="dropdown-item "
                  >
                    C45 / SAE 1018 / EN9 / EN8D
                  </button>
                  <button
                    onClick={() => handleNavClick("/products/carbon/SAE1141")}
                    className="dropdown-item "
                  >
                    SAE 1141
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
                    EN 1A / PB / 230M07 PB
                  </button>
                  {/* Boron Steel */}
                  <div className="mega-column">
                    <button
                      onClick={() => handleNavClick("/products/boron-steel")}
                      className="dropdown-item text-heading"
                    >
                      Boron Steel
                    </button>
                    <button
                      onClick={() =>
                        handleNavClick("/products/boron-steel/10B21")
                      }
                      className="dropdown-item "
                    >
                      10B21/ 15B25 / 10B35
                    </button>
                  </div>
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
