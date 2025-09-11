import React from "react";
import { Link } from "react-router-dom";

export default function D3() {
  return (
    <div className="grade-details">
      <h2 className="text-center">D3 / 1.2080 / HCHCR D3</h2>
      <p className="subtitle text-center">
        High-carbon, high-chromium tool steel with superior wear resistance.
      </p>
      {/* standards  */}
      <div className="standards-scroll-wrapper mb-4">
        <div className="standards-inner-scroll">
          <table className="standards-table">
            <tbody>
              <tr>
                <td>
                  <strong>STANDARDS</strong>
                </td>
                <td>X210CrW12</td>
                <td>HCHCR-D3</td>
                <td>DIN 2080</td>
                <td>AISI D3</td>
                <td>AFNOR Z210W12-01</td>
                <td>JIS SKD1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels Supplies and Stocks HCHCR D3 tool steel in
            India and abroad. D3 Steel have 12% ledeburitic chromium tool steel
            with great wear resistance. Basically it is used as cutting tools
            for sheets up to 4 mm thickness, blanking dies for paper and
            plastics, trimming dies, shear cutting edges and rotational shear
            edges for sheet thicknesses up to 2 mm.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Cold Work Tool Steels/Cold Work - D3.png"
            alt="DB6 Image"
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
                  <td>2.00-2.35</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.10-0.60</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.20-0.60</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>0.030 max</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>0.030 max</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>11.00-13.00</td>
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
              <th>Shape</th>
              <th>Dimensions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rounds</td>
              <td>8 - 450 mm | Square : 11 - 155 mm</td>
            </tr>
            <tr>
              <td>Blocks</td>
              <td>
                Thickness: 6 - 150 mm
                <br />
                Width: 20 – 505 mm
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <p>
          D3 Steel contains properties of High Carbon 2% and High chromium 12 %
          tool steel with high wear resistance ability. Its supply condition is
          typically annealed to easy machining and its prescribed hardness is
          57-58 HRC after making the dies and tools.
        </p>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          HCHCR D3 tool steel is utilized in cold dies and tooling application
          which requires high degree (level) of accuracy in hardening and
          tempering. For example, dies drawing, forming cold rolls, blanking
          dies for paper and plastics, powder metal tooling and blanking &
          trimming dies, shear blades, ejector pins, cold die punches etc.
        </p>
      </section>

      {/* Thermal properties */}
      <section className="thermal-properties">
        <h2 className="thermal-section-title">Thermal Properties</h2>

        <div className="row">
          <div className="col-md-6">
            <div className="property-card mb-3">
              <h4>Coefficient of Thermal Expansion</h4>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Temperature (°C)</th>
                    <th>10¯⁶ m / (m*K)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20-100</td>
                    <td>10.7</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>11.6</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>12.3</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>12.6</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>12.9</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>13.2</td>
                  </tr>
                  <tr>
                    <td>20-700</td>
                    <td>13.3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-6">
            <div className="property-card mb-3">
              <h4>Thermal Conductivity</h4>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Temperature (°C)</th>
                    <th>W / (m*K)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20</td>
                    <td>16.6</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>20.5</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>24.3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* heat treatment */}
      <section className="heat-treatment">
        <h2 className="section-title">Heat Treatment</h2>

        <div className="row-center">
          {/* Basic Heat Treatment Data */}
          <div className="col-md-8">
            <div className="heat-card mb-3">
              <h4>Heat Treatment Steps</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Soft Annealing °C</th>
                    <td colSpan="2">810-850</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td colSpan="2">Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td colSpan="2">max. 250</td>
                  </tr>
                  <tr>
                    <th>Stress-relief Annealing °C</th>
                    <td colSpan="2">approx. 670-720</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>940-970</td>
                    <td>950-980</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil</td>
                    <td>Air (upto 30mm thickness)</td>
                  </tr>
                  <tr>
                    <th>Hardness after quenching HRC</th>
                    <td>64.5</td>
                    <td>64.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* stocking partner */}
      <section className="stocking-partners py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Stocking Partners</h2>
          <p className="lead">
            We keep the materials from <strong>China</strong> and{" "}
            <strong>India</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/china-flag.png"
              alt="China"
              className="flag-img mx-3"
            />
            <img
              src="/image/india-flag.png"
              alt="India Flag"
              className="flag-img mx-3"
            />
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <div className="cta-block">
        <Link to="/enquiry" className="btn btn-primary">
          Request an Enquiry
        </Link>
        <span>MOQ: 200 kg</span>
      </div>
    </div>
  );
}
