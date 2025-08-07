import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* footer-section */}
      <footer className="footer text-white pt-5 pb-3">
        <div className="container-fluid">
          <div className="row container-footer">
            {/* Company Info */}
            <div className="col-md-4 footer-content mb-4">
              <img
                src="/image/logo-v.png"
                alt="Ventura Logo"
                width={150}
                height={100}
                className="mb-4 footer-logo"
              
              />
              <h5 className="footer-title" >
                Ventura Alloy & Steel Pvt Ltd
              </h5>
              <p className="text-justify">
                Delivering quality steel solutions with integrity and
                innovation. Serving industries with precision-engineered
                products since 1965.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 footer-content mb-4 quick-links">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Quality
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="/enquiry" className="footer-link">
                    Enquiry
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 footer-content mb-4">
              {/* HEAD OFFICE */}
              <div className="mb-4">
                <h5 className="fw-bold">HEAD OFFICE</h5>
                <p>
                  Unit No.1201 & 1202, Ghanshyam Enclave P. Co-Op. Soc. Ltd.,
                  New Link Road, Near Laljipada Police Station, Kandivali
                  (West), Mumbai – 400067.
                </p>
                <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                  Tel.: +91 22 2869 3824 / 9324959833
                </p>
                <p>
                  <i className="bi bi-phone-fill me-2"></i>
                  Cell: +91 9819225666 / 9322266999
                </p>
              </div>
            </div>
            {/* Contact Info */}
            <div className="col-md-4 footer-content mb-4">
              {/* STOCKING & MACHINING CENTRE */}
              <div className="mb-4">
                <h5 className="fw-bold">STOCKING & MACHINING CENTRE</h5>
                <p>
                  Gala No. 6, Building No. 183, Indian Corporation, Mouje
                  Gundavli (Mankoli – Phata), Dapoda, Taluka – Bhiwandi –
                  421302.
                </p>
                <p>
                  <i className="bi bi-phone-fill me-2"></i>
                  Cell: +91 7977097655
                </p>
              </div>

              {/* EMAILS */}
              <div>
                <p className="">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Email:{" "}
                  <a
                    href="mailto:sales@venturasteels.com"
                    className="text-decoration-none text-light"
                  >
                    sales@venturasteels.com
                  </a>{" "}
                  /
                  <a
                    href="mailto:aashish@venturasteels.com"
                    className="text-decoration-none text-light ms-1"
                  >
                    enquiry@venturasteels.com
                  </a>
                </p>
              </div>

              <div className="d-flex gap-4 mt-2 mt-md-0">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://instagram.com"
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

          <hr className="border-light" />
          <div className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Ventura Alloy & Steel Pvt Ltd.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
