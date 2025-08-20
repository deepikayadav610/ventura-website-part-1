import React from "react";
import { Link } from "react-router-dom";

export default function Aerospace() {
  return (
    <div className="industry-page">
      {/* Hero Section */}
      <div className="industry-hero aerospace-hero text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="fw-bold display-5">Aerospace Industry Solutions</h1>
          <p className="lead">
            High-strength steels engineered for extreme performance, safety, and
            precision in aerospace applications.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Intro Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Steels That Soar Beyond Limits</h2>
          <p className="section-subtitle">
            Ventura Steels provides premium alloys and high-performance tool
            steels trusted by aerospace manufacturers for **airframes,
            turbines, landing gear, and precision-engineered components**.
          </p>
        </div>

        {/* Highlights */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>✈️ Lightweight Strength</h4>
              <p>Steels designed for reduced weight without compromising safety.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🌍 Global Standards</h4>
              <p>Meeting international aerospace certifications and quality norms.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>⚡ High Performance</h4>
              <p>Materials for jet engines, turbines, and fatigue-resistant parts.</p>
            </div>
          </div>
        </div>

        {/* Steel Categories */}
        <h3 className="fw-bold text-center mb-4">Steels We Offer for Aerospace</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">High-Speed Steel</h4>
              <p>Critical for cutting tools used in aerospace manufacturing.</p>
              <Link to="/products/high-speed-steel" className="btn btn-outline-primary">
                View High-Speed Steel
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Alloy Steel</h4>
              <p>Widely used in landing gear, shafts, and engine components.</p>
              <Link to="/products/alloy-steel" className="btn btn-outline-primary">
                View Alloy Steel
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Tool Steel</h4>
              <p>For molds, dies, and tooling in aerospace part manufacturing.</p>
              <Link to="/products/tool-steel" className="btn btn-outline-primary">
                View Tool Steel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
