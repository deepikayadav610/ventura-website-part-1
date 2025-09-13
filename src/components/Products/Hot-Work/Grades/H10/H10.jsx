import React from "react";
import { Link } from "react-router-dom";

export default function H10() {
  return (
    <div className="grade-details">
      <h2 className="text-center"> H10 / AISI H10 / DIN 1.2365 / SKD7</h2>
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
                <td>X210CrW12</td>
                <td>H10</td>
                <td>DIN 2365</td>
                <td>AISI H10</td>
                <td>AFNOR 32CDV12-28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-4">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels Supplies & Stocks H10 Steel in India and
            abroad. H10 is an amazing high-temperature quality and treating
            resistance, thermal conductivity and low powerlessness to hot
            cracking. It can be water cooled to a restricted degree and also
            suitable for cold hobbling. Utilized for press and penetrating
            mandrels pass on supplements, massive metal die casting tools.
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
                  <td>0.28-0.35</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.10-0.400000 </td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.20-0.40</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>0.003 max</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>0.030 max</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>2.70-3.20</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>2.50-3.00</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>0.40 – 0.75</td>
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
                  <td>H10 / T20810</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>DIN, WNr</td>
                  <td>1.2365 / 32CrMoV12-28</td>
                </tr>
                <tr>
                  <td>Japan</td>
                  <td>JIS G4404</td>
                  <td>SKD7 </td>
                </tr>
                <tr>
                  <td>British </td>
                  <td>BS 4659</td>
                  <td>BH10</td>
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
          <li>Hot Work Steel H10 is equivalent steel of DIN 2365</li>
          <li>Great tempering resistance</li>
          <li>Less susceptible for high hot cracking</li>
          <li>Excellent thermal conductivity</li>
          <li>High-temperature durability</li>
          <li>Can be water-cooled to a constrained degree</li>
        </ul>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          This tool steel is used for hot press and mandrels, press die inserts
          and forging die, remarkable hot metal die casting tools, die-casting
          moulds for non-ferrous overwhelming metal pressure die-casting.
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
                    <td>11.7</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>12.4</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>12.7</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>13.2</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>13.5</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>13.7</td>
                  </tr>
                  <tr>
                    <td>20-700</td>
                    <td>13.8</td>
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
                    <td>32.6</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>34.4</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>32.4</td>
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
                    <td>740-800</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td>max. 185</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>1040-1060</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil or Hot Bath 500-550°Cr</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>52</td>
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
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>210</td>
                    <td>50.5</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>53</td>
                  </tr>
                  <tr>
                    <td>550</td>
                    <td>51</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>650</td>
                    <td>41</td>
                  </tr>
                  <tr>
                    <td>700</td>
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
            All grades of H10 / AISI H10 / DIN 1.2365 / SKD7 are available on
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
        <span>MOQ: 5 Tonnes </span>
      </div>
    </div>
  );
}
