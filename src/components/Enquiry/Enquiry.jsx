import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Enquiry.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBoxOpen,
  FaThList,
  FaCommentDots,
} from "react-icons/fa";

const productOptions = {
  "Hot Work Steel": ["DB6 / 2714 / AISI L6", "H13 / 2344", "H11 / 2343", "H10 / 2365 / SKD7", "H12 / 2606"],
  "Cold Work Steel": ["D2 / 2379 / HCHCR D2", "D3 / 2080 / HCHCR D3", "5 / Cr12MoV / 2601", "A2 / 2363", "O1 / 2510 / OHNS O1"],
  "Plastic Mould Steel": ["P20+N1 / 2738", " P20 / 2311", "2316"],
  "Spring Steel": ["EN 47 / 50CrV4 / 51CrV4 / AISI 6150", "SUP 9", "SAE 9254", "EN 31 / SAE 52100 / 100Cr6", "EN 45 / SAE 9260", "SAE 5160"],
  "Alloy Steel": [" EN 24 / SAE 4340 / 40NiCrMo84 / EN 41B / EN14 / BM", "EN 19 / SAE 4140 / DIN 42CrMo4", " EN18 / 41Cr4"],
  "Carbon Steel": ["C45 / SAE 1018 / EN9 / EN8D", "SAE 1141", "ST 52.3", "EN 1A / PB / 230M07 PB"],
  "Boron Steel": ["10B21/ 15B25 / 10B35"],
};

export default function EnquiryForm() {
  const [grades, setGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [gradeShapes, setGradeShapes] = useState({});
  const [confirmGrades, setConfirmGrades] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "product") {
      setGrades(productOptions[value] || []);
      setSelectedGrades([]);
      setGradeShapes({});
      setConfirmGrades(false);
    }
  };

  const handleGradeSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedGrades.includes(value)) {
      setSelectedGrades((prev) => [...prev, value]);
    }
  };

  const removeGrade = (grade) => {
    setSelectedGrades((prev) => prev.filter((g) => g !== grade));
    setGradeShapes((prev) => {
      const updated = { ...prev };
      delete updated[grade];
      return updated;
    });
  };

  const handleConfirmGrades = () => {
    if (selectedGrades.length === 0) {
      toast.error("Select at least one grade");
      return;
    }
    setConfirmGrades(true);
  };

  const handleShapeChange = (grade, shape) => {
    setGradeShapes((prev) => ({ ...prev, [grade]: shape }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.error("Enter valid phone number");
      return;
    }

    if (!confirmGrades || selectedGrades.length === 0) {
      toast.error("Please confirm your selected grades first");
      return;
    }

    const templateParams = {
      ...formData,
      selectedGrades: selectedGrades.join(", "),
      gradeShapes: JSON.stringify(gradeShapes),
    };

    emailjs
      .send("your_service_id", "your_template_id", templateParams, "your_user_token")
      .then(() => {
        toast.success("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
        setSelectedGrades([]);
        setGradeShapes({});
        setConfirmGrades(false);
      })
      .catch(() => toast.error("Error sending enquiry."));
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Enquiry | Ventura Steels</title>
          <meta
            name="description"
            content="Send an enquiry for premium grade Tool & Alloy Steel from Ventura Alloy & Steels. Trusted by 1700+ clients."
          />
        </Helmet>
      </HelmetProvider>

      <div className="container enquiry-container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-3">Let's Discuss Business</h1>
            <hr className="horizontal-heading mb-5 text-center" />
            <p className="text-muted">
              Searching for dependable alloy steel solutions that meet the requirements of your project? We at Ventura Alloy and Steels Private Limited are here to help by providing you with certified materials, knowledgeable advice, and timely service. Whether you have a technical question or need a large order, let's get in touch and work together to create something solid.
            </p>
            <ul className="list-unstyled text-muted">
              <li>✔ Fast Reaction - It's time for commercial quotes and technical assistance.</li>
              <li>✔ Availability of Certified Inventory for Hot Work Tool Steel, Cold Work Tool Steel, Alloy Steels, Carbon, and Spring Steels</li>
              <li>✔ Tailored sourcing options for urgent deliveries and non-standard grades</li>
            </ul>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src="/image/enquiry-2.jpg"
              alt="Steel Enquiry"
              className="img-fluid"
              style={{ maxHeight: "340px" }}
            />
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="card enquiry-form shadow-lg p-4" data-aos="fade-up">
          <h2 className="text-center">Enquiry Form</h2>
          <hr className="line-hr mb-5 text-center" />

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6 position-relative">
                <FaUser className="form-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  className="form-control ps-5"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 position-relative">
                <FaEnvelope className="form-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  className="form-control ps-5"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 position-relative">
                <FaPhone className="form-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  className="form-control ps-5"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 position-relative">
                <FaBoxOpen className="form-icon" />
                <select
                  name="product"
                  className="form-select ps-5"
                  value={formData.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Product Type</option>
                  {Object.keys(productOptions).map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-12 position-relative">
                <FaThList className="form-icon" />
                <select
                  name="grade"
                  className="form-select ps-5"
                  onChange={handleGradeSelect}
                  disabled={confirmGrades}
                >
                  <option value="">Select Grade</option>
                  {grades.map((g, i) => (
                    <option key={i} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Grades Section */}
              {selectedGrades.length > 0 && (
                <div className="col-md-12">
                  <div className="selected-grades mt-3">
                    {selectedGrades.map((grade) => (
                      <div key={grade} className="selected-grade-tag d-flex align-items-center gap-3 mb-2">
                        <span className="badge bg-secondary grade-selected">{grade}</span>
                        {!confirmGrades && (
                          <button
                            type="button"
                            className="btn btn-sm close-btn"
                            onClick={() => removeGrade(grade)}
                          >
                            &times;
                          </button>
                        )}
                        {confirmGrades && (
                          <select
                            className=" select-shape w-auto"
                            value={gradeShapes[grade] || ""}
                            onChange={(e) => handleShapeChange(grade, e.target.value)}
                          >
                            <option value="">Select Shape</option>
                            <option value="Round Bar">Round Bar</option>
                            <option value="Block">Block</option>
                          </select>
                        )}
                      </div>
                    ))}
                    {!confirmGrades && (
                      <button
                        type="button"
                        className="btn btn-success btn-sm mt-2"
                        onClick={handleConfirmGrades}
                      >
                        OK
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="col-12 position-relative">
                <FaCommentDots className="form-icon" />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enquiry Message / Quantity / Custom Specs"
                  className="form-control ps-5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary px-4">
                  Submit Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}
