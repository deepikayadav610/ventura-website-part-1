import React from "react";
import { Link } from "react-router-dom";
import "./DB6.css";

export default function DB6() {
  return (
    <div className="grade-details">
      <h2 className="text-center">
        <strong> DB6 / DIN 2714 </strong>/ AISI L6
      </h2>
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
                <td>55NiCrMoV7</td>
                <td>DB6</td>
                <td>DIN 2714</td>
                <td>AISI L6</td>
                <td>AFNOR 55NCDVV7</td>
                <td>JIS SKT4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels Stocks and Supplies Die Block Steel DB6 /
            DIN 2714 in India and abroad. DB6 tool steel is an extreme pass on
            steel with high treating resistance and great through-solidifying
            properties. Its nickel substance has it uncommonly effect safe – a
            highly recommendable element for vast mallet & press bites the dust
            alike. This evaluation is generally supplied in toughened condition
            or extinguished and tempered to 1300 N/mm² & a working hardness of
            370 to 410 HB (round) or 355 to 400 HB (square, level).
          </p>
          <p>
            Utilized as standard die block steel for manufacturing passes on of
            different kinds, press bites the dust, expulsion kicks the bucket,
            retainer plates, heavily clad trim bites the dust, hot shear
            sharpened pieces of steels and instrument holder.
          </p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/Hot Work Steel DB 6 Block.png"
            alt="DB6 Image"
            width={350}
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
                  <td>0.50 – 0.60</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.10 – 0.40</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.65 – 0.95</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>1.00 – 1.20</td>
                </tr>
                <tr>
                  <td>Ni</td>
                  <td>1.50 – 1.80</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>0.45 – 0.55</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>0.07 – 0.12</td>
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
                  <td>A681 L6</td>
                </tr>
                <tr>
                  <td>Europe</td>
                  <td>En</td>
                  <td>55NiCrMoV7</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>DIN, WNr</td>
                  <td>56NiCrMoV7</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>GB</td>
                  <td>5CrNiMo </td>
                </tr>
                <tr>
                  <td>Japan </td>
                  <td>JIS</td>
                  <td>SKT4</td>
                </tr>
                <tr>
                  <td>India</td>
                  <td>IS</td>
                  <td>T55Ni7Cr4Mo5V1</td>
                </tr>
                <tr>
                  <td>R. of Korea</td>
                  <td>KS</td>
                  <td>STF4</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>GOST</td>
                  <td>4ChMNFS</td>
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
              <td>Rounds</td>
              <td>Diameter: 60 – 1000 mm</td>
            </tr>
            <tr>
              <td>Blocks</td>
              <td>
                Thickness: 125 – 1000 mm
                <br />
                Width: 130 – 1600 mm
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* process route */}
      <section className="process-route mx-auto mt-3">
        <h3>Process Route</h3>
        <p className="text-muted text-center">
          Applicable for <strong>DB6 / DIN 2714 / AISI L6</strong>
        </p>
        <div className="process-flow">
          <div className="step">EAF</div>
          <span className="arrow">→</span>
          <div className="step">LF</div>
          <span className="arrow">→</span>
          <div className="step">VD</div>
          <span className="arrow">→</span>
          <div className="step">UPSET</div>
          <span className="arrow">→</span>
          <div className="step">FORGED</div>
          <span className="arrow">→</span>
          <div className="step">ANNEALED</div>
          <span className="arrow">→</span>
          <div className="step">ROUGH TURNED FOR ROUNDS / MILLED FOR FLATS</div>
          <span className="arrow">→</span>
          <div className="step">OIL QUENCHED</div>
          <span className="arrow">→</span>
          <div className="step">DOUBLE TEMPERED</div>
          <span className="arrow">→</span>
          <div className="step">ROUGH TURNED FOR ROUNDS / MILLED FOR FLATS</div>
        </div>
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <p>
          The exceptional hot work pre-solidified tool steel has great toughness
          and high wear resistance. DB6 die steel is generally provided in hard,
          quenched, tempered, and annealed condition, and in strengthened
          condition in exceptional cases. Normally its working hardness is
          <strong> 360–430 BHN</strong>. This steel grade is the updated type of
          DIN 2713 for higher efficiency and performance.
        </p>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Dies for specially drop and close die forgings for hammers &
          mechanical presses, die moulds, shoe blocks, die holder, piston rods,
          bolster, cranks, cassettes, plastic moulds, shearing blades, tools,
          etc.
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
                    <td>12.1</td>
                  </tr>
                  <tr>
                    <td>20-200</td>
                    <td>13.1</td>
                  </tr>
                  <tr>
                    <td>20-300</td>
                    <td>13.2</td>
                  </tr>
                  <tr>
                    <td>20-400</td>
                    <td>13.5</td>
                  </tr>
                  <tr>
                    <td>20-500</td>
                    <td>14.1</td>
                  </tr>
                  <tr>
                    <td>20-600</td>
                    <td>14.3</td>
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
                    <td>35.0</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>39.0</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>36.0</td>
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
                    <td>650-710</td>
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
                    <td>840-880 / 860-900</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Oil / Air</td>
                  </tr>
                  <tr>
                    <th>Hardness after Quenching HRC</th>
                    <td>57 / 55</td>
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
                    <th>In Oil – HRC</th>
                    <th>In Air – HRC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100</td>
                    <td>56</td>
                    <td>54</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>54</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>52</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>400</td>
                    <td>49</td>
                    <td>47</td>
                  </tr>
                  <tr>
                    <td>450</td>
                    <td>47</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>46</td>
                    <td>43</td>
                  </tr>
                  <tr>
                    <td>550</td>
                    <td>43</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>38</td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>650</td>
                    <td>34</td>
                    <td>32</td>
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
          <h2 className="section-title1 mb-4">Stocking Partners</h2>
          <p className="lead">
            We keep the materials from <strong>Germany</strong>,
            <strong> Japan</strong> and <strong>China</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/german-flag.jpg"
              alt="Germany"
              className="flag-img mx-3"
            />
            <img
              src="/image/japan-flag.jpeg"
              alt="Japan"
              className="flag-img mx-3"
            />
            <img
              src="/image/china-flag.png"
              alt="China"
              className="flag-img mx-3"
            />
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="availability-info my-4">
        <div className="container">
          <h4 className="mb-3">Availability</h4>
          <p>
            <strong>Grades in Bold (e.g. DB6 / DIN 2714 )</strong> are kept in
            stock and supplied on a regular basis. <br />
            For other grades, we accept <strong>advance orders</strong> on MOQ
            basis as per size requirements.
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
        <span>MOQ: 0.33 Tonnes </span>
      </div>
    </div>
  );
}
