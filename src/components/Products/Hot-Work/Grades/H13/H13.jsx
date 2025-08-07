import React from "react";
import { Link } from "react-router-dom";
import "./H13.css";

export default function H13() {
  return (
    <div className="grade-details">
      <h2 className="text-center"> H13 / 2344</h2>
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
                <td>X40CrMoV5</td>
                <td>DB6</td>
                <td>H13</td>
                <td>DIN 2344</td>
                <td>AISI H13</td>
                <td>AFNOR Z40CDV5</td>
                <td>JIS SKD61</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5">
        <div className="overview-content">
          <p>
            Ventura Alloy and Steels supplies and stocks H13 steel in flat,
            square and round bar. We provide steel in all sizes as your
            requirements. Consult our team who will assist you for any query
            related to H13 steel.
          </p>
          <p>
            SAE/ AISI H13 tool steel equivalent with JIS SKD61, GB 4Cr5MoSiV1
            and DIN 1.2344 Tool Steel. AISI H13 steel consists of chromium,
            molybdenum and vanadium and is known for its high hardenability and
            great toughness.
          </p>
          <p>
            The molybdenum and vanadium act as strengthening agents while the
            chromium content helps the AISI H13 steel to withstand softening
            when used at high temperatures. It also combines shock and abrasion
            resistance, has good red hardness, can resist rapid cooling and
            withstand premature heat checking.
          </p>
          <p>
            H13 Tool Steel has high hot-wear resistance abilities along with
            great strength, heat conductivity and invulnerability to hot
            cracking. It has good resistance to abrasion at each low and high
            temperature. It displays high level of toughness and ductility. The
            H13 steel has Uniform and high level of machinability and polish
            ability. It has high-temperature strength and resistance to thermal
            fatigue, glorious through-hardening properties and shows very
            limited distortion during hardening.
          </p>
          <p>H3 ESR is the most purified material with the conventional VD route. The nature of material increase the strength, exceptionally increase the micro-cleanness level. H13 ESR tool steel is most refined, has greater homogeneity and an exceptionally fine structure, resulting in improved machinability, polishing & high temperature tensile strength. Exceptionally suggest the use of AISI-H13 ESR grade for Aluminium Pressure Die Casting and other part subjected to high working temperatures and high weight quality. H13 steel is completely ultrasonic examined with 100% positive outcomes according to NDT standards.</p>
        </div>
        <div className="db6-img">
          <img
            src="/image/Hot Work Tool Steels/Hot Work Tool Steel H13 Round Bars.png"
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
                  <td>0.35-0.45</td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.90-1.20</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>0.30-0.50</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td> 0.03</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>0.004</td>
                </tr>
                <tr>
                  <td>Cr</td>
                  <td>4.90-5.40</td>
                </tr>
                <tr>
                  <td>Mo</td>
                  <td>1.20-1.75</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>0.90-1.20</td>
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
                  <td>H13</td>
                </tr>
                <tr>
                  <td>Europe</td>
                  <td>En</td>
                  <td>X40CrMoV5-1</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>DIN, WNr</td>
                  <td>X40CrMoV5-1</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>GB</td>
                  <td>4Cr5MoSiV1 </td>
                </tr>
                <tr>
                  <td>Japan </td>
                  <td>JIS</td>
                  <td>SKD61</td>
                </tr>
                <tr>
                  <td>India</td>
                  <td>IS</td>
                  <td>XT35Cr5MoV1</td>
                </tr>
                <tr>
                  <td>R. of Korea</td>
                  <td>KS</td>
                  <td>STD 61</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>GOST</td>
                  <td>4Ch4VMFS</td>
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
              <td>ROUNDS </td>
              <td>10 to 500 MM DIA</td>
            </tr>
            <tr>
              <td>FLATS </td>
              <td>
                Thickness: 20 - 400 MM MAX 
                <br />
                Width: 40 - 700 MM MAX
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
