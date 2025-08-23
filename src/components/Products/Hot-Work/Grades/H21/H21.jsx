import React from "react";
import { Link } from "react-router-dom";
import "./H21.css"

export default function H21() {
  return (
    <div className="grade-details">
      <h2 className="text-center"> H21 / AISI H21 / DIN 1.2581 </h2>
      <p className="subtitle text-center">
        Premium Hot Work Tool Steel with high toughness & wear resistance.
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
                <td>X30WCrV-3</td>
                <td>H21</td>
                <td>DIN 2581</td>
                <td>AISI H21</td>
                <td>AFNOR 32CDV12-28</td>
                <td>JIS SKD5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5">
        <div className="overview-content">
          <p>
            H21 Steel is a hot work tool steel for oil or air hardening to
            develop high hot quality, support of hardness, and warmth checking
            resistance.
          </p>
          <p>
            This is mostly utilized as hot work devices, instruments for
            manufacture of hollows, screws, rivets, nuts and bolts. Die casting
            tools, forming dies, die inserts, hot shear blades.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/Hot Work Tool Steel H13 Round Bars.png"
            alt="DB6 Image"
            width={300}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="h21-composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center gap-5">
          <div className="h21-chemical-composition">
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
                  <td>0.26-0.36</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.15-0.25</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.20-0.40</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td> 0.003 max</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>0.030max</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>3.00-3.75</td>
                </tr>
                <tr>
                  <td>W</td>
                  <td>8.50-10.00</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>0.30-0.60</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h21-name-table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Standards</th>
                  <th>Grades's Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>USA</td>
                  <td>AISI / SAE</td>
                  <td>H21 / T20821</td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>AFNOR</td>
                  <td>X30WCrV9</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>DIN, WNr</td>
                  <td>X30WCrV93 / 1.2581</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>GB</td>
                  <td>3Cr2W8V </td>
                </tr>
                <tr>
                  <td>Japan </td>
                  <td>JIS</td>
                  <td>SKD5</td>
                </tr>
                <tr>
                  <td>England</td>
                  <td>BS</td>
                  <td>BH21</td>
                </tr>
                <tr>
                  <td>Sweden</td>
                  <td>SS</td>
                  <td>2730</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <p>
          Hot work steel has great toughness and contains Tungsten, Chromium,
          Carbon, Vanadium and generally its working hardness is 40.0 to 55.0
          HRC size and is accessible in round, level and square shapes.
        </p>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          The H21 tungsten hot-work tool steels are primarily utilized for
          hot-working dies and tooling. For example extrusion, die casting &
          hot-forming of parts.
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
                    <td>11.2</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>11.9</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>12.2</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>12.5</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>12.8</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>13.0</td>
                  </tr>
                  <tr>
                    <td>20-700</td>
                    <td>13.2</td>
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
                    <td>100</td>
                    <td>27.0</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>29.8</td>
                  </tr>
                  <tr>
                    <td>675</td>
                    <td>29.1</td>
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
                    <td>780-810</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Slowly</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td>max. 240</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>1000-1130</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil or Hot Bath 600-650°C</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>53</td>
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
                    <td>49</td>
                  </tr>
                  <tr>
                    <td>210</td>
                    <td>49</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>49</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>49</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>550</td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>650</td>
                    <td>46</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>36</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <div className="cta-block">
        <Link to="/enquiry" className="btn btn-primary">
          Request an Enquiry
        </Link>
        {/* <span>MOQ: 200 kg | Price: ₹135/kg*</span> */}
      </div>
    </div>
  );
}
