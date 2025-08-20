import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="infrastructure-container pb-5">
        {/* Video Banner */}
        <div className="video-banner-infrastructure">
          <video autoPlay loop muted className="bg-video w-100">
            <source
              src="/videoes/Website Infrastructure Page.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-infrastructure">
            <h1 className="text-center">Infrastructure</h1>
            <p className="mb-4 text-center">
              Ventura Alloy & Steels has established an industry-leading
              infrastructure equipped with the latest technologies and a 12,000
              sq. ft. facility in Bhiwandi. Designed for both efficiency and
              capacity, our warehouse ensures smooth operations and timely
              delivery across India.
            </p>
            <p className="text-center">
              Our infrastructure supports stringent quality control, efficient
              stock management, and swift dispatch capabilities — tailored to
              support the evolving needs of B2B clients.
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-3 text-heading" data-aos="fade-up">
          <h2 className="display-5 fw-bold ">Infrastructure</h2>
          <hr className="mb-4" />
          <p className="mb-5">Reliable. Scalable. Ready for the Future.</p>
        </div>

        {/* Feature List */}
        <div className="row g-4 container feature-container">
          {[
            "10,000 Tonnes storage capacity",
            "Weighing Scales – 5 tonnes (4 Nos), 10 tonnes (1 No), plus 2 platform scales of 2 tonnes each",
            "7 Cranes – 1×5T, 4×10T, 2×25T",
            "7 Bandsaw Fully Automatic Servo Cutting Machines (250 / 400 / 450 / 600 / 700 / 830 MM capacity)",
            "Permanent Magnetic Lifters – 1 to 25 Tonnes",
            "Cutting facility in Tonnes and Inches – 3 Fully Automatic Servo cutting machines",
            "New Bandsaw Fully Automatic Servo Cutting Machines (Wagon type & Angle cutting) coming this year",
            "Horizontal Bandsaw Machine Sizes – 300MM (3), 460MM (3), 650MM (2), 650×850MM (1), 1000×1500MM (1)",
            "Vertical Bandsaw Machine Sizes – 600H×2500W MM (3, Transversal), 600H×6000L MM (Longitudinal)",
            "CNC Turning Facility up to 6M length & 600MM dia",
            "MPI Testing Machine",
            "Hardness Testing Machines",
            "Barracks for batch-wise storage",
            "Material loading capacity per hour: 50–70 Tonnes",
            "5–7 vehicles can be loaded at a time",
          ].map((feature, i) => (
            <div className="col-md-6 " key={i} data-aos="fade-up">
              <div className="d-flex gap-3 align-items-center p-3 border rounded shadow-sm bg-light features ">
                <i className="bi bi-check2-circle fs-3 "></i>
                <span className="fw-medium">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
