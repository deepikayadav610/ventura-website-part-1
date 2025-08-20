import React from "react";
import { Link } from "react-router-dom";

export default function Plastics() {
  return (
    <div className="industry-page">
      {/* Hero */}
      <div className="industry-hero plastics-hero text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="fw-bold display-5">Plastics & Moulding Solutions</h1>
          <p className="lead">
            Premium mould steels for injection, extrusion, and die casting — built for finish, life, and uptime.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Intro */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Sharper Tools. Cleaner Parts.</h2>
          <p className="section-subtitle">
            From PVC to engineering polymers, our plastic mould steels and hot work grades deliver polishability,
            corrosion resistance, and thermal stability for consistent part quality.
          </p>
        </div>

        {/* Highlights */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>✨ Surface Finish</h4>
              <p>Grades optimized for high gloss and texturing where required.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🧪 Corrosion Control</h4>
              <p>Options suited for corrosive materials like PVC and flame-retardants.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🔥 Thermal Stability</h4>
              <p>Dimensional stability for long runs and reduced maintenance.</p>
            </div>
          </div>
        </div>

        {/* Steel Categories */}
        <h3 className="fw-bold text-center mb-4">Steels We Offer for Plastics & Moulding</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Plastic Mould Steel</h4>
              <p>Injection moulds, casting dies, and long-life tools with high polishability.</p>
              <Link to="/products/plastic-mould-steel" className="btn btn-outline-primary">View Plastic Mould Steel</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Hot Work Steel</h4>
              <p>Die casting dies and extrusion tooling exposed to high heat.</p>
              <Link to="/products/hot-work-steel" className="btn btn-outline-primary">View Hot Work Steel</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Cold Work Steel</h4>
              <p>Cutting, trimming, and post-processing tools for plastics.</p>
              <Link to="/products/cold-work-steel" className="btn btn-outline-primary">View Cold Work Steel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
