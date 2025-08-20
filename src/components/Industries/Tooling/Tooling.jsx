import React from "react";
import { Link } from "react-router-dom";

export default function Tooling() {
  return (
    <div className="industry-page">
      {/* Hero */}
      <div className="industry-hero tooling-hero text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="fw-bold display-5">Machinery & Tooling Solutions</h1>
          <p className="lead">
            Tool steels and alloys for forging, stamping, cutting, and extrusion — built for uptime and life.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Intro */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Longer Tool Life. Better Throughput.</h2>
          <p className="section-subtitle">
            We supply hot work and cold work tool steels for dies, punches, and blades, plus alloy steels for robust
            machine components — ensuring dimensional stability and wear resistance.
          </p>
        </div>

        {/* Highlights */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🔥 Heat Resistance</h4>
              <p>Hot work grades that retain hardness at elevated temperatures.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🪚 Wear Resistance</h4>
              <p>Cold work grades for cutting, blanking, and shearing with minimal wear.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🏭 Uptime</h4>
              <p>Reliable materials for consistent performance and fewer changeovers.</p>
            </div>
          </div>
        </div>

        {/* Steel Categories */}
        <h3 className="fw-bold text-center mb-4">Steels We Offer for Tooling</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Hot Work Steel</h4>
              <p>For forging/extrusion dies, die casting, hot punches, and holders.</p>
              <Link to="/products/hot-work-steel" className="btn btn-outline-primary">View Hot Work Steel</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Cold Work Steel</h4>
              <p>For blanking dies, shear blades, stamping & cutting tools.</p>
              <Link to="/products/cold-work-steel" className="btn btn-outline-primary">View Cold Work Steel</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Alloy Steel</h4>
              <p>Machine components: gears, shafts, cams, couplings, and fixtures.</p>
              <Link to="/products/alloy-steel" className="btn btn-outline-primary">View Alloy Steel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
