import React from "react";
import { Link } from "react-router-dom";
import "./D2.css";

export default function D2() {
  return (
    <div className="grade-details">
      <h2 className="text-center">D2 / 1.2379 / HCHCR D2</h2>
      <p className="subtitle text-center">
        High-carbon, high-chromium tool steel with wear resistance and
        toughness.
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
                <td>X153CrMoV12</td>
                <td>HCHCR-D2</td>
                <td>DIN 2379</td>
                <td>AISI D2</td>
                <td>AFNOR Z160CDV12</td>
                <td>JIS SKD10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels Supplies and Stocks HCHCR D2 steel in India
            and abroad. D2 steel is an air hardening, high-carbon, high-chromium
            tool steel. It has high wear and abrasion resistant properties. It
            is heat treatable and will offer a hardness in the range 55-62 HRC,
            and is machinable in the annealed condition. It tends to be used as
            threading rolls and dies, icy trimming, cutting & stamping tools for
            sheet thickness up to 6mm, accuracy cutting instruments for sheet
            thicknesses up to 12 mm.
          </p>
        </div>
        <div className="d2-img d-flex gap-3">
          <img
            src="/image/Cold Work Tool Steels/D2 Round Bar.png"
            alt="D2 Image"
            width={300}
          />
          <img
            src="/image/Cold Work Tool Steels/Cold Work Steel 1.2379 Flat Bars.png"
            alt="D2 Image"
            width={300}
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

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <ul>
          <li>High Carbon High Chromium contents.</li>
          <li>
            High wear resistant and toughness due to Vanadium addition of 0.90%.
          </li>
          <li>
            Supply condition is an Annealed which offer hardness to reach 57-59
            HRC.
          </li>
          <li>Machinable in annealed condition.</li>
          <li>Better than D3 steel due to high alloy properties.</li>
        </ul>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          HCHCR D2 cold work tool steel can be utilized for cold stamping or
          forming dies, cold forming rolls, slitters, shear blades, tools,
          chipper knives, tyre shredders, punches, trimming, cutting threading
          dies, stamping tools and more.
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
      </section>

      {/* heat treatment */}
      <section className="heat-treatment">
        <h2 className="section-title">Heat Treatment</h2>

        <div className="row">
          {/* Basic Heat Treatment Data */}
          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Heat Treatment Steps</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Soft Annealing °C</th>
                    <td>840-870</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td>max. 250</td>
                  </tr>
                  <tr>
                    <th>Stress-relief Annealing °C</th>
                    <td>approx. 660-710</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>1000-1050</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Air, Oil, Salt Bath 500-550°C</td>
                  </tr>
                  <tr>
                    <th>Hardness after quenching HRC</th>
                    <td>63</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tempering Data */}
          <div className="col-md-6">
            <div className="heat-card mb-3">
              <h4>Tempering (°C after quenching)</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Temp (°C)</th>
                    <th>HRC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100</td>
                    <td>64</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>61.5</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>58.5</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>58.5</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>59</td>
                  </tr>
                  <tr>
                    <td>525</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>550</td>
                    <td>57</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>50</td>
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
