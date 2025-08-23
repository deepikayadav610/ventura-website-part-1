import React from "react";
import { Link } from "react-router-dom";
import "./10B21.css";

export default function Boron10B21() {
  return (
    <div className="grade-details">
      <h2 className="text-center"> 10B21</h2>
      <p className="subtitle text-center">
        High-strength, tough alloy that responds well to carburizing and
        carbonitriding.
      </p>
      <hr className="m-5" />
      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="overview-content">
          <p>
            It is a carbon steel alloy that contains boron, manganese, and
            carbon. It's known for its high strength and toughness, and is often
            used in automotive parts and fasteners.
          </p>
          <p>
            It’s properties are it responds well to carburizing and
            carbonitriding. This can be heat treated to achieve a hardness & has
            good plasticity.
          </p>
        </div>
        <div className="Boron15B25-img">
          <img
            src="/image/Boron Steels/10B21 Round Bars 2.png"
            alt="10B21"
            width={300}
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
                  <td>0.18-0.23</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>Max 0.03</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.70-1.10</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>Max 0.03</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>Max 0.035</td>
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
          Automotive fasteners and seat mechanisms, tools, ships, machines,
          buildings, and infrastructure.
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
