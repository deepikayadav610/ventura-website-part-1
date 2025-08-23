import React from "react";
import { Link } from "react-router-dom";

export default function Boron10B35() {
  return (
    <div className="grade-details">
      <h2 className="text-center"> 10B35</h2>
      <p className="subtitle text-center">
        High-strength boron steel with excellent toughness, suitable for
        heavy-load industrial applications.
      </p>
      <hr className="m-5" />
      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="overview-content">
          <p>
            It is an industrial material with excellent performance. It has high
            tensile strength and yield strength, can withstand large external
            forces and loads, and at the same time, maintains good toughness, is
            not prone to brittle fracture, and can meet the use requirements
            under complex working conditions.
          </p>
        </div>
        <div className="Boron15B25-img">
          <img
            src="/image/Boron Steels/10B35 Boron Steel Round Bars 3.png"
            alt="10B21"
            width={250}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center gap-5">
          <div className="chemical-composition composition-table">
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>C</td>
                  <td>0.32-0.38</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.10-0.30</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.60-0.90</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>Max 0.04</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>Max 0.05</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>0.0005-0.003</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* size range */}
      <section className="size-range">
        <h3>Size Range</h3>
        <table className="size-table">
          <thead>
            <tr>
              <th>Sizes</th>
              <td>25 MM - 200 MM </td>
              <td>Against Advance Order</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Automotive industry, machinery, structural applications etc.

        </p>
      </section>

      {/* Get Quote CTA */}
      <div className="cta-block">
        <Link to="/enquiry" className="btn btn-primary">
          Request an Enquiry
        </Link>
        <span>MOQ: 30 Tonnes </span>
      </div>
    </div>
  );
}
