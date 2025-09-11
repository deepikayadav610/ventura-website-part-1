import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table"; 
import "./D5.css";

export default function D5() {
  return (
    <div className="grade-details">
      <h2 className="text-center">D5 / Cr12MoV / 1.2601 </h2>
      <p className="subtitle text-center">
        High-carbon, high-chromium tool steel with good wear resistance,
        toughness, and stability, suitable for thread rolling and cold work
        dies.
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
                <td>Cr12MoV</td>
                <td>KNL D2</td>
                <td>DIN 2601</td>
                <td>AISI D5</td>
                <td>D5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels Supplies and Stocks HCHCR D5 steel in India
            and abroad. D5 steel is an air hardening, high-carbon, high-chromium
            tool steel.
          </p>
        </div>
        <div className="d2-img d-flex gap-3">
          <img
            src="/image/Cold Work Tool Steels/Cold Work steel - Cr12Mov.png"
            alt="Cr12MoV"
            width={250}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center">
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
                  <td>1.40-1.60</td>
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
                <tr>
                  <td>Mo</td>
                  <td> 0.70-1.00</td>
                </tr>
                <tr>
                  <td> V</td>
                  <td>0.80-1.20</td>
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
              <td>20 to 450 MM | SQUARE – 50 to 155 MM</td>
            </tr>
            <tr>
              <td>Blocks</td>
              <td>
                Thickness: 20 - 150 mm
                <br />
                Width: 40 – 450 mm
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* process routes */}
      {/* <section className="process-route">
        <h3>Process Route</h3>
        <div className="process-flow">
          <div className="step">EAF</div>
          <span className="arrow">→</span>
          <div className="step">LF</div>
          <span className="arrow">→</span>
          <div className="step">VD / VOD</div>
          <span className="arrow">→</span>
          <div className="step">ESR (Optional – Premium Grades)</div>
          <span className="arrow">→</span>
          <div className="step">FORGING / ROLLING</div>
          <span className="arrow">→</span>
          <div className="step">ANNEALED (Soft Anneal / Spheroidize)</div>
          <span className="arrow">→</span>
          <div className="step">ROUGH TURNED / MILLED</div>
          <span className="arrow">→</span>
          <div className="step">HARDENED (Oil / Air Quench)</div>
          <span className="arrow">→</span>
          <div className="step">DOUBLE / TRIPLE TEMPERED</div>
          <span className="arrow">→</span>
          <div className="step">FINISHED (Ground / Machined)</div>
        </div>
      </section> */}

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
       Applications of D5 steels include thread rolling, blanking or forming dies operating at temperatures below 482°C (900°F).
        </p>
      </section>

      {/* Thermal properties */}
      {/* <section className="thermal-properties">
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
                    <td>10.6</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>11.5</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>11.8</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>12.3</td>
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
                    <td>16.7</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>20.5</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>24.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}

      {/* heat treatment */}
      <div className="heat-treatment-data my-4">
      <h3 className="text-center mb-3">Heat Treatment Data</h3>
      <Table bordered hover responsive className="text-center align-middle">
        <thead className="custom-header">
          <tr>
            <th>Process</th>
            <th>Temperature Range</th>
            <th>Details / Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Preheating</td>
            <td>815 °C (1500 °F)</td>
            <td>Heat very slowly before raising temperature further</td>
          </tr>
          <tr>
            <td>Hardening (Austenitizing)</td>
            <td>1009 °C (1850 °F)</td>
            <td>Hold for 20–45 minutes, then <strong>air quench</strong></td>
          </tr>
          <tr>
            <td>Forging</td>
            <td>1065 °C (1950 °F) → 926 °C (1700 °F)</td>
            <td>Do not forge below 926 °C (1700 °F)</td>
          </tr>
          <tr>
            <td>Annealing</td>
            <td>886 °C (1627 °F)</td>
            <td>Slow furnace cooling at ≤ 4 °C (40 °F) per hour</td>
          </tr>
          <tr>
            <td>Tempering</td>
            <td>204 °C (400 °F) → 537 °C (1000 °F)</td>
            <td>
              Rockwell C Hardness: <br />
              <strong>61 HRC</strong> at 204 °C <br />
              <strong>54 HRC</strong> at 537 °C
            </td>
          </tr>
        </tbody>
      </Table>
    </div>

      {/* stocking partner */}
      <section className="stocking-partners py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Stocking Partners</h2>
          <p className="lead">
            We keep the materials from <strong>China</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/china-flag.png"
              alt="China"
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
