import React from "react";
import { Link } from "react-router-dom";

export default function O1() {
  return (
    <div className="grade-details">
      <h2 className="text-center">O1 / 1.2510 / OHNS 01</h2>
      <p className="subtitle text-center">
        Durable oil-hardening cold work tool steel with excellent wear
        resistance and cutting-edge retention for general-purpose tooling.
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
                <td>100MnCrW4</td>
                <td>O1</td>
                <td>DIN 2510</td>
                <td>AISI O1</td>
                <td>AFNOR 90MWCV5</td>
                <td>JIS SKS3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Overview */}
      <section className="overview d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="overview-content">
          <p>
            OHNS O1 steel is a oil-hardening and non-shrinking cold work tool
            steel with properties such as good durability, excellent wear
            resistance and holds a good cutting edge. It is an excellent general
            purpose tool steel often used where the expense of a high carbon
            high chromium tool steel would not be justified. This grade is an
            oil hardening tool steel type supplied in the annealed condition.
          </p>
        </div>
        <div className="d2-img d-flex gap-3">
          <img
            src="/image/Cold Work Tool Steels/D2 Round Bar.png"
            alt="D2 Image"
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
                  <td>0.85-1.00 </td>
                </tr>
                <tr>
                  <td>Si</td>
                  <td>0.15-0.35</td>
                </tr>
                <tr>
                  <td>Mn</td>
                  <td>1.00-1.20</td>
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
                  <td>0.50-0.70</td>
                </tr>
                <tr>
                  <td>W</td>
                  <td> 0.50-0.70</td>
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
              <td> 8 to 450 MM | SQUARE – 11 to 155 MM</td>
            </tr>
            <tr>
              <td>Flats</td>
              <td>THICKNESS : 6 TO 150 MM | WIDTH : 20 to 505 MM</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Steel properties */}
      <section className="steel-properties">
        <h2>Steel Properties</h2>
        <p>
          OHNS O1 cold work steel is an equivalent of DIN 2510. The grade AISI
          O1 tool steel is an oil-hardening, non-shrinking tool steel and has a
          good cutting edge retention, high hardenability and dimensional
          stability during heat treatment.
        </p>
      </section>

      {/* applications */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Being a general-purpose tool steel, it is typically used in
          applications where alloy steels cannot provide sufficient hardness,
          strength, and wear resistance. In blanking and stamping dies for
          cutting sheets up to 6 mm thickness, drills, shear blades, gauges,
          threading tools, broaches, measuring tools, plastic moulds, guide
          rails.
        </p>
      </section>

      {/* Thermal properties */}
      <section className="thermal-properties">
        <h2 className="thermal-section-title">Physical Properties</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="property-card mb-3">
              <h4>Thermal Conductivity</h4>
              <table className="table table-bordered mx-auto">
                <thead>
                  <tr>
                    <th>Temperature (°C)</th>
                    <th>W / (m*K)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20</td>
                    <td>33.4</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>32.1</td>
                  </tr>
                  <tr>
                    <td>700</td>
                    <td>31.1</td>
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
                    <td>750-780</td>
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
                    <th>Stress-relief Annealing °C</th>
                    <td>approx. 650</td>
                  </tr>
                  <tr>
                    <th>Hardening °C</th>
                    <td>780-820</td>
                  </tr>
                  <tr>
                    <th>Quenching</th>
                    <td>Air, Oil, Salt Bath 180-220°C</td>
                  </tr>
                  <tr>
                    <th>Hardness after quenching HRC</th>
                    <td>65</td>
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
            We keep the materials from <strong>India</strong>.
          </p>
          <div className="partner-flags mt-4">
            <img
              src="/image/india-flag.png"
              alt="India"
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
        {/* <span>MOQ: 200 kg</span> */}
      </div>
    </div>
  );
}
