import React, { useState } from "react";
import "./Careers.css";
import { Button, Modal, Form } from "react-bootstrap";

const jobOpenings = [
  {
    id: 1,
    title: "Web Developer",
    location: "Mumbai",
    experience: "3+ Years",
    description:
      "We're seeking a skilled Web Developer to manage and enhance our digital presence. The ideal candidate will have experience in front-end and back-end development, with a strong eye for design and performance optimization.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "SEO Optimization",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    title: "Marketing Manager",
    location: "Mumbai",
    experience: "5+ Years",
    description:
      "Responsible for brand strategy, campaign planning, and lead generation. Must be well-versed with steel industry trends and digital platforms.",
    skills: ["SEO/SEM", "Campaign Management", "Analytics"],
  },
  {
    id: 3,
    title: "Sales & Marketing Executive",
    location: "Mumbai",
    experience: "2–4 Years",
    description:
      "We're looking for a proactive Sales & Marketing Executive to drive growth through lead generation, client outreach, and brand promotion. The ideal candidate will have a strong understanding of industrial marketing and experience working in the steel or manufacturing sector.",
    skills: [
      "Lead Generation",
      "Market Research",
      "Digital Marketing",
      "B2B Sales",
      "Brand Promotion",
      "Client Acquisition",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    location: "Mumbai",
    experience: "0–3 Years",
    description:
      "We're seeking a results-driven Digital Marketing Executive to lead our online campaigns, SEO, and content strategies. The ideal candidate will be skilled in social media management, Google Ads, and analytics tools, with a keen understanding of digital trends to enhance brand visibility and drive lead generation.",
    skills: [
      "SEO",
      "Google Ads",
      "Social Media Marketing",
      "Content Creation",
      "Email Marketing",
      "Analytics (Google Analytics, SEMrush, etc.)",
    ],
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const handleShowJobModal = (job) => setSelectedJob(job);
  const handleCloseJobModal = () => setSelectedJob(null);

  const handleOpenApplyModal = () => {
    setShowApplyModal(true);
    handleCloseJobModal();
  };
  const handleCloseApplyModal = () => setShowApplyModal(false);

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero text-center py-5">
        <h1>Build Your Career with Ventura Steels</h1>
        <p className="lead">
          Join a legacy of precision, trust, and industrial excellence.
        </p>
        <div className="container ">
          <hr className="mt-4 mb-4" />
        </div>
        <a href="#openings" className="btn btn-primary mt-3">
          View Openings
        </a>
      </section>

      {/* Culture Cards */}
      <section className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="culture-card">
              <i className="bi bi-lightbulb"></i>
              <h5>Innovation-Driven</h5>
              <p>We thrive on new ideas and industrial creativity.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="culture-card">
              <i className="bi bi-people"></i>
              <h5>Team-Centric</h5>
              <p>We grow together through collaboration and trust.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="culture-card">
              <i className="bi bi-graph-up"></i>
              <h5>Growth-Oriented</h5>
              <p>Empowering talent with learning and development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="container open-positions py-5 " id="openings">
        <h3 className="mb-4 text-center">Open Positions</h3>
        <p className="positions-text text-center text-muted mb-4">
          We’re looking for driven professionals to join our growing team across
          departments. If you're passionate about innovation, teamwork, and
          excellence—there's a place for you here.
        </p>
        <hr className="mb-5" />
        <div className="row g-4">
          {jobOpenings.map((job) => (
            <div className="col-md-6" key={job.id}>
              <div className="job-card p-4 shadow-sm rounded h-100">
                <h5>{job.title}</h5>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Experience:</strong> {job.experience}
                </p>
                <Button
                  variant="outline-primary"
                  onClick={() => handleShowJobModal(job)}
                >
                  View Opening
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Description Modal */}
      <Modal show={!!selectedJob} onHide={handleCloseJobModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedJob?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Location:</strong> {selectedJob?.location}
          </p>
          <p>
            <strong>Experience:</strong> {selectedJob?.experience}
          </p>
          <p className="mb-2">
            <strong>Description:</strong>
          </p>
          <p>{selectedJob?.description}</p>
          <p className="mb-2">
            <strong>Key Skills:</strong>
          </p>
          <ul>
            {selectedJob?.skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseJobModal}>
            Close
          </Button>
          <Button variant="success" onClick={handleOpenApplyModal}>
            Apply Now
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Application Modal */}
      <Modal show={showApplyModal} onHide={handleCloseApplyModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Apply for a Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position Applied</Form.Label>
              <Form.Select>
                <option>Select Position</option>
                {jobOpenings.map((job) => (
                  <option key={job.id}>{job.title}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Resume</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Benefits Section */}
      <section className="benefits-section py-5 bg-light">
        <div className="container row mx-auto align-items-center">
          <div className="col-md-6">
            <img
              src="/image/logo-v.png"
              alt="Ventura Team"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Work With Us?</h4>
            <ul className="benefits-list">
              <li>
                <i className="bi bi-check-circle"></i> Competitive Salary
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Health & Wellness Support
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Learning & Development
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Professional Work Culture
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-5 bg-primary text-white">
        <h5>Didn’t find your role?</h5>
        <p>
          Email us at{" "}
          <a
            href="mailto:careers@venturasteels.com"
            className="text-white text-decoration-underline"
          >
            careers@venturasteels.com
          </a>
        </p>
      </section>
    </div>
  );
}
