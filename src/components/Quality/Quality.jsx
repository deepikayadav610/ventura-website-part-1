import React from "react";
import "./Quality.css";

const Quality = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="position-relative quality-hero">
        {/* video-banner */}
        <div className="video-banner-quality">
          <video autoPlay loop muted className="bg-video w-100">
            <source src="/videoes/Website Quality Page.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-quality">
            <h1 className="display-6 fw-bold">
              Committed to Certified Quality
            </h1>
            <p className="mb-0">ISO 9001:2015 - Trusted Across Industries</p>
          </div>
        </div>
      </section>

      {/* Why Quality Matters */}
      <section className="container quality-matter py-5">
        <h2 className="text-center mb-4">Why Quality Matters</h2>
        <hr className="mb-5" />
        <div className="container quality-matter-card d-flex justify-content-center text-center gap-5">
          <div className="card col-md-3 p-3 mb-4" data-aos="fade-right">
            <i className="bi bi-shield-check fs-2 text-primary mb-2"></i>
            <h5>Certified Materials</h5>
            <p className="text-muted">
              All products come with verified QAP certificates ensuring
              compliance and standards.
            </p>
          </div>
          <div className="card col-md-3 p-3 mb-4" data-aos="fade-right">
            <i className="bi bi-clipboard2-check fs-2 text-primary mb-2"></i>
            <h5>Batch-wise Inspection</h5>
            <p className="text-muted">
              Each batch undergoes detailed inspection for chemical & mechanical
              properties.
            </p>
          </div>
          <div className="card col-md-3 p-3 mb-4" data-aos="fade-right">
            <i className="bi bi-box-seam fs-2 text-primary mb-2"></i>
            <h5>Ready Inventory</h5>
            <p className="text-muted">
              We maintain ready stocks and advanced packaging to ensure timely
              delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Statement Block */}
      <section className="bg-light py-5 quality-statement">
        <div className="container">
          <blockquote className="blockquote text-center">
            <p className="fs-5 text-muted fst-italic" data-aos="fade-right">
              "Ventura Steels stands for excellence, precision, and long-term
              trust. Our ISO-certified process ensures zero compromise in every
              step we take to serve you better."
            </p>
            <footer className="blockquote-footer mt-2" data-aos="fade-right">
              Ventura Alloy & Steels Pvt. Ltd.
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Certification Section */}
      <section className="container py-5 quality-cert">
        <div className="d-flex justify-content-center align-items-center certification-section gap-5">
          <div className="col-md-3 mb-4 mb-md-0">
            <a href="/image/certificates/BSCIC-ISO.png">
              <img
                src="/image/certificates/BSCIC-ISO.png"
                alt="Quality Certificate"
                className="img-fluid rounded shadow"
              />
            </a>
          </div>
          <div className="col-md-5 certification-content">
            <h3 className=" mb-3">Our Certification</h3>
            <hr className="mb-5" />
            <ul className="text-muted 1h-lg ">
              <li
                className="quality-list text-center  list-unstyled mb-3"
                data-aos="zoom-in-up"
              >
                ISO 9001:2015 Certified by BSCIC
              </li>
              <li
                className="quality-list text-center  list-unstyled mb-3"
                data-aos="zoom-in-up"
              >
                Includes QAP reports with every batch
              </li>
              <li
                className="quality-list text-center  list-unstyled mb-3"
                data-aos="zoom-in-up"
              >
                Comprehensive chemical & microstructure analysis
              </li>
              <li
                className="quality-list text-center  list-unstyled mb-3"
                data-aos="zoom-in-up"
              >
                Strict packaging and delivery standards
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Associations Section  */}
      <section className="bg-associations py-4">
        <div className="container text-white text-center">
          <h5 className="mb-4" data-aos="zoom-in-up">
            We are Proud Members of
          </h5>
          <div className="row logo-associations justify-content-center">
            <div className="col-auto mx-3 my-3" data-aos="zoom-in-up">
              <img
                src="/image/certificate-logo/ahk_india.svg"
                className="p-3"
                alt="IGCC"
              />
            </div>
            <div className="col-auto mx-3 my-3" data-aos="zoom-in-up">
              <img
                src="/image/certificate-logo/sufi.png"
                className="p-3"
                alt="SUFI"
              />
            </div>
            <div className="col-auto mx-3 my-3" data-aos="zoom-in-up">
              <img
                src="/image/certificate-logo/AIFI-1.png"
                className="p-3"
                alt="TAGMA"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
