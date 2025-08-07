import React from "react";
import "./ContactUs.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ContactUs | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Steels is a trusted steel manufacturer."
          />
        </Helmet>
      </HelmetProvider>
      <div className="contact-page ">
        {/* Hero */}
        <div className="contact-hero text-center">
          <h1>Get in Touch</h1>
          <p>
            We're here to answer your business enquiries, partnerships, or
            support needs.
          </p>
        </div>

        {/* Info Cards */}
        <div className="row text-center contact-info py-5 ">
          <div className="col-md-4 mb-3">
            <div className="info-card d-flex justify-content-center ">
              <span>
                <i className="bi bi-telephone me-1"></i>
                <b>Tel.:</b> +91 22 2869 3824 || <b>Cell:</b> +91 9819225666
              </span>

              <a
                href="mailto:sales@venturasteels.com"
                className="text-decoration-none text-black"
              >
                <span>
                  <i className="bi bi-envelope me-1"></i>
                  aashish@venturasteels.com
                </span>
              </a>
              <a
                href="mailto:sales@venturasteels.com"
                className="text-decoration-none text-black"
              >
                <span>
                  <i className="bi bi-envelope me-1"></i>
                  sales@venturasteels.com
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="info-card">
              <h4>HEAD OFFICE</h4>
              <hr />
              <p>
                Unit No.1201 & 1202, Ghanshyam Enclave P. Co-Op. Soc. Ltd., New
                Link Road, Near Laljipada Police Station, Kandivali (West),
                Mumbai – 400067.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="info-card">
              <h4>STOCKING & MACHINING CENTRE</h4>
              <hr />
              <p>
                Gala No. 6, Building No. 183, Indian Corporation, Mouje Gundavli
                (Mankoli – Phata), Dapoda, Taluka – Bhiwandi – 421302.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h3 className="text-center">Send Us a Message</h3>
          <hr className="mt-4 mb-5" />
          <form className="contact-form">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" placeholder="Company Name" />
              </div>
              <div className="col-md-6 mb-3">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="col-12 mb-3">
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center ">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="contact-map mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5111380116897!2d72.8320894!3d19.2030152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c5f6f3b5db%3A0x165eb9f6f4e0b093!2sVENTURA%20ALLOY%20AND%20STEELS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1722224870625!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
