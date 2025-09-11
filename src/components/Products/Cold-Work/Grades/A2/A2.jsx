import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

export default function A2() {
  return (
    <div className="grade-details">
      <h2 className="text-center">A2 / 1.2363 </h2>
      <p className="subtitle text-center">
        Cold work tool steel with wear resistance and stability.
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
                <td>X100CrMoV5</td>
                <td>A2</td>
                <td>DIN 2363</td>
                <td>AISI A2</td>
                <td>AFNOR Z100CDV5</td>
                <td>JIS SKD12</td>
                <td>BS 4659 BA2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels supplies & stocks A2 Steel in India and
            abroad. A2 Steel has greater dimensional stability during heat
            treatment and high wear resistance and strength (potency). It is
            primarily utilized in cutting instruments, shear razor sharp edges,
            rolls, cold pilger mandrels, cold stamping devices, moulds for
            plastics handling.
          </p>
        </div>
        <div className="d2-img d-flex gap-3">
          <img
            src="/image/Cold Work Tool Steels/a2 grade cold work steel.png"
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
                  <td>0.95-1.05</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.10-0.40</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.40-0.80</td>
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
                  <td>4.80-5.50</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>0.90-1.20</td>
                </tr>
                <tr>
                  <td> V</td>
                  <td>0.15-0.35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Steel Properties</h2>
        <p>
          A2 Steel is equivalent of DIN 2363 and it provides extreme hardness
          after heat treatment with great dimensional stability. It is heat
          treatable and offers hardness in the range of 53-63 HRC.
        </p>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          A2 Steel is mainly used for cutting tools, shear blades, rolls, cold
          mandrels, moulds for plastics processing, cold stamping tools,
          blanking tools, trim dies, punch dies, forming dies, stamping dies
          etc.
        </p>
      </section>

      {/* Thermal properties */}
      <section className="thermal-properties">
        <h2 className="thermal-section-title">Physical Properties</h2>
          <div className="col-md-7 mx-auto">
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
                    <td>15.9</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>26.8</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>29.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
      </section>

      {/* heat treatment */}
   v  {/* heat treatment */}
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
                    <td>810-850</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td>max. 232</td>
                  </tr>
                  <tr>
                    <th>Stress-relief Annealing °C</th>
                    <td>approx. 650</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>930-970</td>
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
                    <td>63</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>58</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>59</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>53</td>
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
        <span>MOQ: 200 kg</span>
      </div>
    </div>
  );
}
