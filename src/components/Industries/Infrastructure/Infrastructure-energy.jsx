import React from "react";
import { Link } from "react-router-dom";

export default function InfrastructureEnergy() {
  return (
    <div className="industry-page">
      {/* Hero */}
      <div className="industry-hero infrastructure-hero text-center text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="fw-bold display-5">Energy & Infrastructure Solutions</h1>
          <p className="lead">
            Reliable steels for oil & gas, power, construction, and heavy equipment — built for harsh conditions.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Intro */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Strength Where It Matters</h2>
          <p className="section-subtitle">
            From pipelines and fittings to shafts and drill collars, Ventura Steels delivers alloys and carbon steels
            with the toughness and consistency required for critical infrastructure.
          </p>
        </div>

        {/* Highlights */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🌡️ Toughness</h4>
              <p>Resists impact and temperature fluctuations in the field.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🔧 Serviceability</h4>
              <p>Predictable performance for maintenance and lifecycle planning.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="highlight-box">
              <h4>🏗️ Versatility</h4>
              <p>Suitable for structural elements, hydraulic systems, and rotating parts.</p>
            </div>
          </div>
        </div>

        {/* Steel Categories */}
        <h3 className="fw-bold text-center mb-4">Steels We Offer for Infrastructure</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Alloy Steel</h4>
              <p>Power transmission shafts, couplings, drill collars, hydraulic parts.</p>
              <Link to="/products/alloy-steel" className="btn btn-outline-primary">View Alloy Steel</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Carbon Steel</h4>
              <p>Pipelines, fittings, structural members, and equipment frames.</p>
              <Link to="/products/carbon-steel" className="btn btn-outline-primary">View Carbon Steel</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="industry-steel-card shadow-sm text-center">
              <h4 className="fw-bold">Boron Steel</h4>
              <p>High-strength fasteners and components for heavy-duty assemblies.</p>
              <Link to="/products/boron-steel" className="btn btn-outline-primary">View Boron Steel</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
