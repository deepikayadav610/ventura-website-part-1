import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Industries.css";

const industries = [
  {
    icon: "🚗",
    title: "Automotive",
    steels: "Boron, Alloy, Spring",
    desc: "Fasteners, chassis, suspensions, gears, axles",
    link: "/products/automotive",
  },
  {
    icon: "✈️",
    title: "Aerospace",
    steels: "Alloy, Carbon",
    desc: "Landing gears, engine mounts, structural parts",
    link: "/products/aerospace",
  },
  {
    icon: "⚙️",
    title: "Machinery & Tooling",
    steels: "Hot Work, Cold Work",
    desc: "Forging dies, stamping tools, cutting dies",
    link: "/products/tooling",
  },
  {
    icon: "🔋",
    title: "Energy & Infrastructure",
    steels: "Alloy, Carbon",
    desc: "Oil & gas equipment, pipelines, shafts, couplings",
    link: "/products/infrastructure-energy",
  },
  {
    icon: "🧩",
    title: "Plastics & Moulding",
    steels: "Plastic Mould, Hot Work",
    desc: "Injection moulds, extrusion tools, die-casting",
    link: "/products/plastics",
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section container py-5 my-5">
      <h2 className="text-center mb-4 fw-bold">
        Trusted in Industries Worldwide
      </h2>
      <p className="text-center mb-5 section-subtitle">
        Ventura Steels serves critical industries with high-performance steels,
        trusted by manufacturers and engineers worldwide.
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
      <div className="d-md-none">
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
