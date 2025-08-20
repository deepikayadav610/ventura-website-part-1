import React from "react";
import { Link } from "react-router-dom";

export default function H11() {
  return (
    <div className="grade-details">
      <h2 className="text-center">H11 / AISI H 11 / DIN 2343 </h2>
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
                <td>X37CrMoV5</td>
                <td>H11</td>
                <td>DIN 2343</td>
                <td>AISI H11</td>
                <td>AFNOR Z38CDV5</td>
                <td>JIS SKD6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels Supplies and Stocks AISI H11 tool steel is
            a 5% chromium hot work tool steel that is represented by its
            excellent impact toughness. Chromium hot-work tool steels are
            designated as group H steels according to the AISI classification
            system, and specified in ASTM A681 standard. The most commonly used
            chromium hot-work steels are H11 tool steel, H12 tool steel, and H13
            steel, within the series from H1 to H19
          </p>
          <p>
            If we compare between H11 and H13, H11 tool steel consists of less
            vanadium than the commonly used H13 hot work tool steel. This gives
            H11 steels the higher toughness, with some reduction in wear
            resistance and tamper resistance. H11 tool steel is a
            deep-hardening, air-hardening steel and H11 alloy steel could be
            deep hardened by heat treatment and air-quenching. That gives
            minimal size change during heat treatment. H11 how work steel also
            has super resistance to thermal fatigue cracking and superb
            resistance to gross cracking and thermal shock when water cooled in
            service.
          </p>
          <p>
            H11 steel is inclusive of all hot work tool steel with excellent
            rigidity and durability along with great thermal conductivity and
            invulnerability to hot cracking and can be water cooled to a
            constrained degree. H11 is primarily used for apparatus holders ,
            ejector pins and shrink fit chucks.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/H 11 Hot Work Tool Steel Round Bars.png"
            alt="DB6 Image"
            width={400}
          />
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="composition">
        <h3 className="mb-4 text-center">
          Chemical Composition (Typical Analysis in %)
        </h3>
        <div className="table-data d-flex justify-content-center gap-5">
          <div className="chemical-composition">
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
                  <td>0.33-0.41</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.80-1.00</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.25-0.50</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>0.003 max</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>0.030max</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>4.80-5.50</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>1.10-1.50</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>0.30-0.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="name-table">
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
                  <td>H11</td>
                </tr>
                <tr>
                  <td>Europe</td>
                  <td>En</td>
                  <td>X37CrMoV5-1</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>DIN, WNr</td>
                  <td>X38CrMoV5-1</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>GB</td>
                  <td>4Cr5MoSiV </td>
                </tr>
                <tr>
                  <td>Japan </td>
                  <td>JIS</td>
                  <td>SKD6</td>
                </tr>
                <tr>
                  <td>India</td>
                  <td>IS</td>
                  <td>XT35Cr5Mo1V3</td>
                </tr>
                <tr>
                  <td>R. of Korea</td>
                  <td>KS</td>
                  <td>STD 6</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>GOST</td>
                  <td>4Ch5MFS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* size-range */}
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
              <td>ROUNDS </td>
              <td>71 to 300 MM DIA</td>
            </tr>
            <tr>
              <td>FLATS </td>
              <td>
                Thickness: 20 to 400 MM MAX
                <br />
                Width: 40 to 700 MM MAX
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <ul>
          <li>Contains 5% Chromium</li>
          <li>Greater strength</li>
          <li>High toughness</li>
          <li>Best thermal physical phenomenon</li>
          <li>Resistant to hot cracking</li>
          <li>
            Gives fundamental necessities to long tool life in press forging,
            die-casting, extrusion processes etc.
          </li>
        </ul>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          This grade isn’t utilized for typical applications in the area of
          hot-work steels, yet additionally useful for tool holders, bridge kind
          tools, ejector pins, liner holders, hot work punches, forging dies,
          and shrink work chucks.
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
                    <td>12.3</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>12.5</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>12.7</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>12.75</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>12.9</td>
                  </tr>
                  <tr>
                    <td>20-700</td>
                    <td>12.9</td>
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
                    <th>W / (m*K) Annealed</th>
                    <th>W / (m*K) Quenched & Tempered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20</td>
                    <td>29.8</td>
                    <td>26.5</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>30.0</td>
                    <td>27.4</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>35.5</td>
                    <td>30.4</td>
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
                    <td>750-800</td>
                  </tr>
                  <tr>
                    <th>Cooling</th>
                    <td>Furnace</td>
                  </tr>
                  <tr>
                    <th>Hardness HB</th>
                    <td>max. 230</td>
                  </tr>
                  <tr>
                    <th>Stress-Relief Annealing °C</th>
                    <td>approx. 600-650</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>1000-1030</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Air, Oil, Salt Bath 500-550°C</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>54</td>
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
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>210</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>550</td>
                    <td>53</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>650</td>
                    <td>37</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>31</td>
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
              alt="China Flag"
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
        {/* <span>MOQ: 200 kg | Price: ₹135/kg*</span> */}
      </div>
    </div>
  );
}
