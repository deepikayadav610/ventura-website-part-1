import React from "react";
import { Link } from "react-router-dom";
import "./IndustryPage.css";

export default function Automotive() {
  return (
    <div className="industry-page">
      {/* Hero Section */}
      <div className="industry-hero automotive-hero text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="fw-bold display-5">Automotive Industry Solutions</h1>
          <p className="lead">
            High-performance steels engineered for strength, safety & durability
            in demanding automotive applications.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Intro Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Driving Innovation with Stronger Steels</h2>
          <p className="section-subtitle">
            Ventura Steels supplies premium tool and alloy steels trusted by the
            automotive sector for fasteners, gears, suspensions, axles, and
            safety-critical components. Our steels deliver **toughness,
            wear-resistance, and fatigue strength** for long-lasting performance.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>⚙️ Precision</h4>
              <p>Steels for gears, shafts, and crankshafts ensuring durability.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🔩 Reliability</h4>
              <p>Fasteners and structural components with consistent performance.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🛡️ Safety</h4>
              <p>Materials engineered to withstand high stress and fatigue loads.</p>
            </div>
          </div>
        </div>

        {/* Steel Categories */}
        <h3 className="fw-bold text-center mb-4">Steels We Offer for Automotive</h3>
        <div className="row justify-content-center">
          {/* Boron Steel */}
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Boron Steel</h4>
              <p>
                Widely used in fasteners, seat mechanisms, and chassis parts due
                to excellent hardenability.
              </p>
              <Link
                to="/products/boron-steel"
                className="btn btn-outline-primary"
              >
                View Boron Steel
              </Link>
            </div>
          </div>

          {/* Alloy Steel */}
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Alloy Steel</h4>
              <p>
                Ideal for gears, crankshafts, axles, and other high-load
                automotive parts.
              </p>
              <Link
                to="/products/alloy-steel"
                className="btn btn-outline-primary"
              >
                View Alloy Steel
              </Link>
            </div>
          </div>

          {/* Spring Steel */}
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Spring Steel</h4>
              <p>
                Suspension systems, torsion bars, and heavy-duty springs for
                long-lasting performance.
              </p>
              <Link
                to="/products/spring-steel"
                className="btn btn-outline-primary"
              >
                View Spring Steel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
