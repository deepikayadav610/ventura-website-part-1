import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Industries.css";

const industries = [
  {
    icon: "🚗",
    title: "Types of Automotive Steel",
    steels: "Boron, Alloy, Spring",
    desc: "Axles, gears, suspensions, fasteners, and chassis",
    link: "/products/automotive",
  },
  {
    icon: "✈️",
    title: "Aerospace",
    steels: "Alloy, Carbon",
    desc: "Engine mounts, landing gears, and structural components",
    link: "/products/aerospace",
  },
  {
    icon: "⚙️",
    title: "Machinery & Tooling",
    steels: "Hot Work, Cold Work",
    desc: "Cutting dies, stamping tools, and forging dies",
    link: "/products/tooling",
  },
  {
    icon: "🔋",
    title: "Energy & Infrastructure",
    steels: "Alloy, Carbon",
    desc: "Shafts, couplings, pipelines, and oil and gas equipment",
    link: "/products/infrastructure-energy",
  },
  {
    icon: "🧩",
    title: "Plastics & Moulding",
    steels: "Plastic Mould, Hot Work",
    desc: "Die-casting, extrusion tools, and injection molds",
    link: "/products/plastics",
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section py-5 my-5">
      <h2 className="text-center mb-4 fw-bold">
        Reliable in Global Industries
      </h2>
      <p className="text-center mb-5 section-subtitle">
        Manufacturers and engineers around the world rely on Ventura Steels to
        supply high-performance steels to vital industries.
      </p>

      {/* Grid for Desktop */}
      <div className="row d-none d-md-flex justify-content-center">
        {industries.map((item, index) => (
          <div className="col-md-4 col-lg-2 mb-4" key={index}>
            <Link to={item.link} className="text-decoration-none">
              <div className="industry-card text-center shadow-sm">
                <div className="industry-icon">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="steel-tags">Steel Types: {item.steels}</p>
                <p className="industry-desc">{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Carousel for Mobile */}
      <div className="d-md-none industries-carousel">
        <Carousel indicators={false} interval={3000} pause="hover">
          {industries.map((item, index) => (
            <Carousel.Item key={index}>
              <Link to={item.link} className="text-decoration-none">
                <div className="industry-card text-center shadow-sm mx-4">
                  <div className="industry-icon">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="steel-tags">Steel Types: {item.steels}</p>
                  <p className="industry-desc">{item.desc}</p>
                </div>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
