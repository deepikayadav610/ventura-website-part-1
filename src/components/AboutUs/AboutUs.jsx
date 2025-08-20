import React from "react";
import "./AboutUs.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const managementMembers = [
  {
    name: "Mr Bharat Dipchand Shah",
    role: "Director: Founder & Mentor",
    image: "/image/director.jpg",
    color: "#393185",
    quote:
      "A steel industry veteran whose extensive experience informs Ventura's enduring strategy and core values.  ",
  },
  {
    name: "Mr. Aashish Bharat Shah",
    role: "Chairman & Director",
    image: "/image/director.jpg",
    color: "#393185",
    quote:
      "Guides Ventura's expansion with a contemporary, client-focused vision.   ",
  },
  {
    name: "Mrs. Poonam Ashish Shah",
    role: "Director",
    image: "/image/director.jpg",
    color: "#393185",
    quote:
      "Oversees marketing initiatives and leads the drive into international markets. ",
  },
];

const AboutUs = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>AboutUs | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Steels is a trusted steel manufacturer."
          />
        </Helmet>
      </HelmetProvider>

      <div className="about-section">
        {/* banner */}
        <section className=" about-banner py-3">
          {/* <img src="/image/Spring Steel Round Bars.png" alt="ventura about banner" /> */}
          <video autoPlay loop muted className="bg-video">
            <source src="/videoes/quality.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* about-content */}
        <section className="about-content  mt-3">
          <div className=" pt-5 pb-2">
            <h2
              className="mb-4 text-center fw-bold text-uppercase"
              data-aos="fade-up-right"
            >
              About Ventura Alloy & Steels
            </h2>
            <hr className="heading mb-2" data-aos="fade-up-right" />
            <section className="pt-5">
              <div className="row">
                <div className="col-lg-12">
                  <p
                    className="text-justify text-muted lh-lg"
                    data-aos="fade-up"
                  >
                    <strong>Ventura Alloy & Steels Private Limited</strong> has
                    consistently been a trusted partner within the Indian steel
                    sector, distinguished by our expertise in the sourcing,
                    stocking, and distribution of Tool Steels and Alloy Steels.
                    Founded in <strong>1965</strong> by{" "}
                    <strong>Mr. Bharat Dipchand Shah</strong>, the company
                    originated from a clear mission: to deliver premium Tool
                    Steel solutions, supplanting the then-popular steel bars.
                    Guided by strategic foresight and an acute grasp of market
                    needs, Ventura has since matured into the foremost{" "}
                    <strong>importer, exporter, distributor,</strong> and{" "}
                    <strong>stockist</strong> of high-performance steels
                    throughout the nation.
                  </p>

                  <p
                    className="text-justify text-muted lh-lg"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Today, under the stewardship of{" "}
                    <strong>Mr. Aashish Bharat Shah</strong>, Ventura Alloy &
                    Steels has grown into a{" "}
                    <strong>multi-crore enterprise</strong> with a{" "}
                    <strong>pan-Indian reach</strong>, yet remains anchored to
                    an unwavering commitment to{" "}
                    <strong>innovation, precision,</strong> and{" "}
                    <strong>customer satisfaction</strong>. Our extensive
                    inventory ranges from{" "}
                    <strong>
                      Hot Work Tool Steel, Cold Work Tool Steel, Die Steel,
                      Spring Steel, Alloy Steel,
                    </strong>{" "}
                    to <strong>Plastic Mould Steel</strong>, supporting vital
                    sectors including{" "}
                    <strong>
                      automotive, engineering, forging, petrochemicals,
                    </strong>{" "}
                    and <strong>extrusion</strong>.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* vision-mission */}
        <section className="vision-mission-section py-5">
          <div className="container">
            <h2
              className="text-center display-6 fw-bold"
              data-aos="fade-up-right"
            >
              Vision, Mission & Values
            </h2>
            <hr className="heading mb-5 " data-aos="fade-up-right" />

            <div
              className="row align-items-stretch g-4"
              data-aos="fade-up-right"
            >
              {/* Vision */}
              <div className="col-md-6">
                <div
                  className="h-100 p-4 rounded-4 border shadow-sm bg-white"
                  data-aos="zoom-in-up"
                >
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-eye me-3 fs-2 text-primary"></i>
                    <h4 className="fw-semibold mb-0">Vision</h4>
                  </div>
                  <p className="text-muted fs-6">
                    To be a one stop destination for all Tool Steel , Spring
                    Steel and Die Steel product requirements, Pan India and
                    International Markets with Quality, Commitment & best of
                    Service.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="col-md-6">
                <div
                  className="h-100 p-4 rounded-4 border shadow-sm bg-white"
                  data-aos="zoom-in-up"
                >
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-flag me-3 fs-2 text-warning"></i>
                    <h4 className="fw-semibold mb-0">Mission</h4>
                  </div>

                  <ul className="text-muted fs-6">
                    <li>
                      To provide world class supply of high-quality steel
                      products.
                    </li>
                    <li>
                      Creating a right fit – client expectations with products
                      supplied.
                    </li>
                    <li>
                      To provide the best value proposition in terms of cost and
                      quality of products and systems.
                    </li>
                    <li>
                      To provide support in terms of consultation, to enable our
                      clients choose what’s best for their needs.
                    </li>
                    <li>
                      To earn the trust and confidence of all stakeholders,
                      exceeding their expectations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="row mt-5">
              <div className="col-12" data-aos="zoom-in-up">
                <div className="p-4 rounded-4 border shadow-sm bg-white">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-stars me-3 fs-2 text-danger"></i>
                    <h4 className="fw-semibold mb-0">Values</h4>
                  </div>

                  <ul className="text-muted fs-6 mb-0">
                    <li>
                      We will always strive to be the ‘best choice’ in our
                      industry.
                    </li>
                    <li>We care for our clients.</li>
                    <li>We honour commitments.</li>
                    <li>
                      We strive to always act with integrity and fairness.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* management section */}
        <section className="py-5 bg-white">
          <div className="container management-container">
            <h2
              className="text-center  display-6 fw-bold "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              Our Management
            </h2>
            <hr
              className="mb-5 heading"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            />
            <p
              className="text-center fs-5 mb-5"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              Quality, customer trust, and long-term value creation are the top
              priorities for Ventura Alloy, which is run by a group of seasoned
              professionals with extensive industry knowledge.
            </p>
            <div className="row g-4">
              {managementMembers.map((member, index) => (
                <div key={index} className="col-md-4">
                  <div
                    className="card h-100 shadow-sm border-0 position-relative"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                  >
                    <div className="card-body">
                      <i className="bi bi-quote fs-1 quote-text"></i>
                      <p className="card-text text-muted">{member.quote}</p>
                    </div>
                    <div
                      className="card-footer text-white text-center py-4 position-relative"
                      style={{ backgroundColor: member.color }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-circle border border-white mb-2"
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "cover",
                          marginTop: "-60px",
                          borderWidth: "4px",
                        }}
                      />
                      <h6 className="mb-0 fw-bold">{member.name}</h6>
                      <small>{member.role}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* team section */}
        <section className="our-team-section container my-5" data-aos="fade-up">
          <h2 className="text-center fw-bold">The Human Capital Behind Ventura’s Success</h2>
          <hr className="heading " />
          <p className="text-center mb-5">Skilled teams powering every step of our operations — from sourcing to delivery.</p>

          <div className="row g-4 px-3">
            {[
              {
                title: "Sourcing Agents",
                icon: "bi-headset",
                desc: "Ensuring timely and cost-effective procurement of quality materials.",
              },
              {
                title: "Technicians",
                icon: "bi-person-gear",
                desc: "Maintaining precision and efficiency across operations and processes.",
              },
              {
                title: "Quality Controllers",
                icon: "bi-award",
                desc: "Upholding global standards through rigorous inspection and testing.",
              },
              {
                title: "Warehouse Personnel",
                icon: "bi-box-seam",
                desc: "Managing inventory and logistics for seamless order fulfillment.",
              },
              {
                title: "Sales & Marketing",
                icon: "bi-bar-chart-steps",
                desc: "Driving business growth with customer-focused strategies and solutions.",
              },
              {
                title: "IT & Digital Infrastructure",
                icon: "bi bi-laptop",
                desc: "Powering operations with secure technology, strategic digital marketing, data-driven insights, and a seamless web presence.",
              },
            ].map((member, index) => (
              <div
                className="col-5 col-md-4 col-lg-4"
                key={index}
                data-aos="fade-up"
              >
                <div className="team-card h-100 d-flex flex-column justify-content-center text-center">
                  <div className="team-icon mb-3">
                    <i className={`bi ${member.icon}`}></i>
                  </div>
                  <h5 className="team-title">{member.title}</h5>
                  <p className="team-desc">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
