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
        {/* Image and Description */}
        <div
          className="position-relative bg-overlay-section text-white mb-5"
          data-aos="fade-right"
        >
          <div className="bg-img-container"></div>
          <div className=" overlay-content py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center infra-text text-lg-start">
                <p className="mb-4 text-center">
                  Ventura Alloy & Steels has established an industry-leading
                  infrastructure equipped with the latest technologies and a
                  12,000 sq. ft. facility in Bhiwandi. Designed for both
                  efficiency and capacity, our warehouse ensures smooth
                  operations and timely delivery across India.
                </p>
                <p className="text-center">
                  Our infrastructure supports stringent quality control,
                  efficient stock management, and swift dispatch capabilities —
                  tailored to support the evolving needs of B2B clients.
                </p>
              </div>
            </div>
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
            "1500 tonne storage capacity",
            "Multiple Weighing Scales: 3, 5, 10 Tonnes",
            "MPI Testing Machine",
            "Two EOT Cranes (5T & 25T)",
            "Fully Automatic Bandsaw Machines (250-800mm)",
            "Hardness Testing Machines",
            "Permanent Magnetic Lifters (1–25T)",
            "Dedicated barracks for batch-wise stock segregation",
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
