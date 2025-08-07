import React from "react";
import { Link } from "react-router-dom";
import "./DB6.css";

export default function DB6() {
  return (
    <div className="grade-details">
      <h2 className="text-center"> DB6 / DIN 2714 / AISI L6</h2>
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
      {/* <section className="size-range">
        <h3>Size Range</h3>
        <div className="size-cards">
          <div className="size-card">
            <h4>Rounds</h4>
            <p>
              Diameter: <strong>60 to 1000 mm</strong>
            </p>
          </div>
          <div className="size-card">
            <h4>Blocks</h4>
            <p>
              Thickness: <strong>125 to 1000 mm</strong>
              <br />
              Width: <strong>130 to 1600 mm</strong>
            </p>
          </div>
        </div>
      </section> */}
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

      {/* process routes */}
      <section className="process-route">
        <h3>Process Route</h3>
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
          <div className="step">ROUGH TURNED FOR ROUNDS/MILLED FOR FLATS</div>
          <span className="arrow">→</span>
          <div className="step">OIL QUENCHED</div>
          <span className="arrow">→</span>
          <div className="step">DOUBLE TEMPERED</div>
          <span className="arrow">→</span>
          <div className="step">ROUGH TURNED FOR ROUNDS/MILLED FOR FLATS</div>
        </div>
      </section>

      {/* Key Technical Specs */}
      {/* <section className="technical-specs">
        <div className="spec-block">
          <h4>Hardness & Heat Treatment</h4>
          <ul>
            <li>Delivered hardness: up to 240 HB</li>
            <li>
              Quenched & tempered condition: 370–410 HB (round), 355–400 HB
              (square/flat)
            </li>
          </ul>
        </div>
        <div className="spec-block">
          <h4>Mechanical Attributes</h4>
          <ul>
            <li>Upgraded benchmark over DIN 2713 for enhanced performance</li>
            <li>
              Excellent impact strength & wear resistance over extensive use
              cycles
            </li>
          </ul>
        </div>
      </section> */}

      {/* Applications */}
      {/* <section className="applications">
        <h3>Typical Applications</h3>
        <ul>
          <li>
            Heavy-duty forging dies (<em>drop, close die</em>) for mechanical
            presses & hammers
          </li>
          <li>Die moulds, shoe blocks, ejector plates, and retainers</li>
          <li>Shearing blades, plastic mould support plates, tool holders</li>
        </ul>
      </section> */}

      {/* Process Route */}
      {/* <section className="process-route">
        <h3>Processing Pathway (EAF → LF → VD ...)</h3>
        <p>
          Melted in Electric Arc Furnace (EAF), followed by Ladle Furnace (LF),
          Vacuum Degassing (VD), upset forging, annealing, rough turn/mill, oil
          quenching, double tempering, finishing.
        </p>
      </section> */}

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
