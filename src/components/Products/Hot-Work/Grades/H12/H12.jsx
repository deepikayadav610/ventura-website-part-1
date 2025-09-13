import React from "react";
import { Link } from "react-router-dom";

export default function H12() {
  return (
    <div className="grade-details">
      <h2 className="text-center">H12 / AISI H12 / DIN 1.2606</h2>
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
                <td>X37CrMoW5-1 </td>
                <td>H12</td>
                <td>DIN 2606</td>
                <td>AISI H12</td>
                <td>AFNOR 32CDV12-28</td>
                <td>JIS SKD62</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="overview-content">
          <p>
            H12 Hot Work Die Steel could be a five-hitter Cr, general hot work
            steel that is characterized by wonderful effect strength. It
            contains less vanadium than the broadly utilized H13 hot work tool
            steel, and furthermore the tungsten content gives higher temper
            resistance. It has smart resistance to thermal fatigue cracking
            (heat checking) and excellent resistance to gross cracking and
            thermal shock once water cooled in commission. TLS H12 hot work tool
            steel is normally prescribed for warm tooling applications wherever
            most resistance from cracking is required. Such applications grasp
            die casting, hot punches, hot shear cutting edges, shaping dies,
            extrusion tooling and hot gripper dies.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/Hot Work Steel DB 6 Block.png"
            alt="DB6 Image"
            width={300}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="db6-composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center gap-5">
          <div className="db6-chemical-composition db6-composition-table">
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
                  <td>0.30-0.40</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.80-1.25 </td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>0.003 max</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>4.75-5.50</td>
                </tr>
                <tr>
                  <td>W</td>
                  <td>1.00-1.70</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>1.25-1.75</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>0.20-0.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="db6-name-table">
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
                  <td>H12 / T20812</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>DIN, WNr</td>
                  <td>1.2605 / X35CrWMoV5</td>
                </tr>
                <tr>
                  <td>Japan</td>
                  <td>JIS G4404</td>
                  <td>SKD62 </td>
                </tr>
                <tr>
                  <td>British </td>
                  <td>BS 4659</td>
                  <td>BH12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <ul>
          <li>Magnificent Resistance to Wear</li>
          <li>High Strength at Elevated Temperature</li>
          <li>Homogenizing with High Toughness</li>
          <li>Additional Fine Structure without Grain-Boundary Carbide</li>
        </ul>
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
                    <td>11.7</td>
                  </tr>
                  <tr>
                    <td>20-250</td>
                    <td>12.4</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>12.9</td>
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
                    <td>820</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td>max. 240</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>1030-1130</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil or Hot Bath 500-550°C</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>57</td>
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
                    <td>55</td>
                  </tr>
                  <tr>
                    <td>210</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>54.8</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>53</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>800</td>
                    <td>41</td>
                  </tr>
                  <tr>
                    <td>900</td>
                    <td>34</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability</h4>
          <p>
            All grades of H12 / AISI H12 / DIN 1.2606 are available on
            <strong> advance order</strong> basis on <strong>MOQ</strong> as per
            size requirements.
          </p>

          <div className="note-box mt-3 p-3 rounded">
            <h5 className="note-title">Additional Services</h5>
            <p>
              We also source forgings as per the required grades, size, and
              supply specifications. Additionally, we have an in-house cutting
              facility to meet customized requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <div className="cta-block">
        <Link to="/enquiry" className="btn btn-primary">
          Request an Enquiry
        </Link>
        <span>MOQ: 5 Tonnes</span>
      </div>
    </div>
  );
}
