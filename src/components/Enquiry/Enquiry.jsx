import React, { useState, useEffect } from "react";
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
  "Hot Work Steel": [
    "DB6 / 2714 / AISI L6",
    "H13 / 2344",
    "H11 / 2343",
    "H10 / 2365 / SKD7",
    "H12 / 2606",
  ],
  "Cold Work Steel": [
    "D2 / 2379 / HCHCR D2",
    "D3 / 2080 / HCHCR D3",
    "5 / Cr12MoV / 2601",
    "A2 / 2363",
    "O1 / 2510 / OHNS O1",
  ],
  "Plastic Mould Steel": ["P20+N1 / 2738", " P20 / 2311", "2316"],
  "Spring Steel": [
    "EN 47 / 50CrV4 / 51CrV4 / AISI 6150",
    "SUP 9",
    "SAE 9254",
    "EN 31 / SAE 52100 / 100Cr6",
    "EN 45 / SAE 9260",
    "SAE 5160",
  ],
  "Alloy Steel": [
    " EN 24 / SAE 4340 / 40NiCrMo84 / EN 41B / EN14 / BM",
    "EN 19 / SAE 4140 / DIN 42CrMo4",
    " EN18 / 41Cr4",
  ],
  "Carbon Steel": [
    "C45 / SAE 1018 / EN9 / EN8D",
    "SAE 1141",
    "ST 52.3",
    "EN 1A / PB / 230M07 PB",
  ],
  "Boron Steel": ["10B21/ 15B25 / 10B35"],
};

export default function EnquiryForm() {
  const [grades, setGrades] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [gradeShapes, setGradeShapes] = useState({});
  const [confirmGrades, setConfirmGrades] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
    companyname: "",
    userType: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData, selectedGrades, gradeShapes, confirmGrades, touchedFields]);
  useEffect(() => {
    if (formData.userType) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.userType;
        return newErrors;
      });
    }
  }, [formData.userType]);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const validateForm = () => {
    let tempErrors = {};

    if (touchedFields.name && !formData.name.trim())
      tempErrors.name = "Name is required.";
    if (touchedFields.email && !validateEmail(formData.email))
      tempErrors.email = "Invalid email format.";
    if (!formData.companyname.trim())
      tempErrors.companyname = "Company name is required.";
    if (touchedFields.phone && !validatePhone(formData.phone))
      tempErrors.phone = "Enter a valid phone number.";
    if ((touchedFields.userType || submitted) && !formData.userType) {
      tempErrors.userType = "Please select your role.";
    }

    if (touchedFields.product && !formData.product)
      tempErrors.product = "Select a product type.";
    if (touchedFields.message && !formData.message.trim())
      tempErrors.message = "Message cannot be empty.";

    if (selectedGrades.length === 0 && touchedFields.grades)
      tempErrors.grades = "Select at least one grade.";

    if (confirmGrades) {
      selectedGrades.forEach((grade) => {
        if (
          !gradeShapes[grade] &&
          (touchedFields[`shape-${grade}`] || submitted)
        ) {
          tempErrors[grade] = `Select shape for ${grade}`;
        }
      });
    }

    setErrors(tempErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouchedFields((prev) => ({ ...prev, [name]: true }));

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
    setTouchedFields((prev) => ({ ...prev, grades: true }));
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
    setGradeShapes((prev) => ({
      ...prev,
      [grade]: {
        shape,
        ...(shape === "Round Bar"
          ? { diameter: "", quantity: "", pieces: "" }
          : { thickness: "", width: "", quantity: "" }),
      },
    }));
    setTouchedFields((prev) => ({ ...prev, [`shape-${grade}`]: true }));
  };

  const handleShapeFieldChange = (grade, field, value) => {
    setGradeShapes((prev) => ({
      ...prev,
      [grade]: {
        ...prev[grade],
        [field]: value,
      },
    }));
  };

  const isFormValid = () => {
    const allFieldsFilled =
      formData.name &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone) &&
      formData.companyname &&
      formData.userType &&
      formData.product &&
      formData.message;
    const gradesConfirmed =
      selectedGrades.length > 0 &&
      (!confirmGrades || selectedGrades.every((g) => gradeShapes[g]));
    return allFieldsFilled && gradesConfirmed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTouchedFields({
      name: true,
      email: true,
      companyname: true,
      phone: true,
      product: true,
      message: true,
      grades: true,
    });
    validateForm();

    if (!isFormValid()) {
      toast.error("Please correct errors before submitting.");
      return;
    }

    const templateParams = {
      ...formData,
      selectedGrades: selectedGrades.join(", "),
      gradeShapes: JSON.stringify(gradeShapes),
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_token"
      )
      .then(() => {
        toast.success("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
          companyname: "",
          userType: "",
        });
        setSelectedGrades([]);
        setGradeShapes({});
        setConfirmGrades(false);
        setTouchedFields({});
      })
      .catch(() => toast.error("Error sending enquiry."));
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Enquiry | Ventura Steels</title>
        </Helmet>
      </HelmetProvider>

      <div className="container enquiry-container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="fw-bold mb-3">Let's Discuss Business</h1>
            <hr className="horizontal-heading mb-5 text-center" />
            <p className="text-muted">
              Searching for dependable alloy steel solutions that meet the
              requirements of your project? We at Ventura Alloy and Steels
              Private Limited are here to help by providing you with certified
              materials, knowledgeable advice, and timely service. Whether you
              have a technical question or need a large order, let's get in
              touch and work together to create something solid.
            </p>
            <ul className="list-unstyled text-muted">
              <li>
                ✔ Fast Reaction - It's time for commercial quotes and technical
                assistance.
              </li>
              <li>
                ✔ Availability of Certified Inventory for Hot Work Tool Steel,
                Cold Work Tool Steel, Alloy Steels, Carbon, and Spring Steels
              </li>
              <li>
                ✔ Tailored sourcing options for urgent deliveries and
                non-standard grades
              </li>
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

        <div className="card enquiry-form shadow-lg p-4" data-aos="fade-up">
          <h2 className="text-center">Enquiry Form</h2>
          <hr className="line-hr mb-5 text-center" />

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <InputField
                icon={<FaUser className="form-icon" />}
                name="name"
                value={formData.name}
                placeholder="Full Name"
                error={errors.name}
                handleChange={handleChange}
              />
              <InputField
                icon={<FaEnvelope className="form-icon" />}
                name="email"
                value={formData.email}
                placeholder="Email Address"
                error={errors.email}
                handleChange={handleChange}
              />
              <InputField
                icon={<FaUser className="form-icon" />}
                name="companyname"
                value={formData.companyname}
                placeholder="Company Name"
                error={
                  (touchedFields.companyname || submitted) && errors.companyname
                }
                handleChange={handleChange}
              />

              <InputField
                icon={<FaPhone className="form-icon" />}
                name="phone"
                value={formData.phone}
                placeholder="Contact Number"
                error={errors.phone}
                handleChange={handleChange}
              />
              <div className="mb-3">
                <label className="form-label fs-4">I am a</label>
                <div className="btn-group" role="group" aria-label="User Type">
                  {["Broker", "Owner", "End User"].map((type) => (
                    <React.Fragment key={type}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="userType"
                        id={type}
                        value={type}
                        checked={formData.userType === type}
                        onChange={(e) => {
                          handleChange(e);
                          setTouchedFields((prev) => ({
                            ...prev,
                            userType: true,
                          }));
                        }}
                      />
                      <label
                        className={`btn btn-outline-primary ${
                          formData.userType === type ? "active" : ""
                        }`}
                        htmlFor={type}
                      >
                        {type}
                      </label>
                    </React.Fragment>
                  ))}
                </div>
                {(touchedFields.userType || submitted) && errors.userType && (
                  <div className="invalid-feedback d-block">
                    {errors.userType}
                  </div>
                )}
              </div>

              <SelectField
                icon={<FaBoxOpen className="form-icon" />}
                name="product"
                value={formData.product}
                options={Object.keys(productOptions)}
                placeholder="Select Product Type"
                error={errors.product}
                handleChange={handleChange}
              />
              <SelectField
                icon={<FaThList className="form-icon" />}
                name="grade"
                value=""
                options={grades}
                placeholder="Select Grade"
                error={errors.grades}
                handleChange={handleGradeSelect}
                disabled={confirmGrades}
              />

              {selectedGrades.length > 0 && (
                <div className="col-md-12">
                  <div className="selected-grades mt-3">
                    {selectedGrades.map((grade) => (
                      <div
                        key={grade}
                        className="selected-grade-tag d-flex flex-column gap-2 mb-2"
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span className="badge bg-secondary">{grade}</span>
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
                              className={`select-shape w-auto ${
                                errors[grade] ? "is-invalid" : ""
                              }`}
                              value={gradeShapes[grade]?.shape || ""}
                              onChange={(e) =>
                                handleShapeChange(grade, e.target.value)
                              }
                            >
                              <option value="">Select Shape</option>
                              <option value="Round Bar">Round Bar</option>
                              <option value="Block">Block</option>
                            </select>
                          )}
                          {errors[grade] && (
                            <div className="invalid-feedback">
                              {errors[grade]}
                            </div>
                          )}
                        </div>

                        {/* Dynamic fields */}
                        <ShapeFields
                          grade={grade}
                          data={gradeShapes[grade]}
                          onChange={handleShapeFieldChange}
                        />
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
                  className={`form-control ps-5 ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              <div className="col-12 text-end">
                <button
                  type="submit"
                  className="btn px-4"
                  disabled={!isFormValid()}
                >
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

const ShapeFields = ({ grade, data, onChange }) => {
  if (!data?.shape) return null;

  if (data.shape === "Round Bar") {
    return (
      <div className="row g-2 mt-2">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Diameter (mm)"
            value={data.diameter}
            onChange={(e) => onChange(grade, "diameter", e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={data.quantity}
            onChange={(e) => onChange(grade, "quantity", e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="No. of Pieces"
            value={data.pieces}
            onChange={(e) => onChange(grade, "pieces", e.target.value)}
            min="1"
            step="1"
          />
        </div>
      </div>
    );
  }

  if (data.shape === "Block") {
    return (
      <div className="row g-2 mt-2">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Thickness (mm)"
            value={data.thickness}
            onChange={(e) => onChange(grade, "thickness", e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Width (mm)"
            value={data.width}
            onChange={(e) => onChange(grade, "width", e.target.value)}
            min="1"
            step="1"
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={data.quantity}
            onChange={(e) => onChange(grade, "quantity", e.target.value)}
            min="1"
            step="1"
          />
        </div>
      </div>
    );
  }

  return null;
};

const InputField = ({
  icon,
  name,
  value,
  placeholder,
  error,
  handleChange,
}) => (
  <div className="col-md-12 position-relative">
    {icon}
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      className={`form-control ps-5 ${error ? "is-invalid" : ""}`}
      onChange={handleChange}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

const SelectField = ({
  icon,
  name,
  value,
  options,
  placeholder,
  error,
  handleChange,
  disabled,
}) => (
  <div className="col-md-6 position-relative">
    {icon}
    <select
      name={name}
      className={`form-select ps-5 ${error ? "is-invalid" : ""}`}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);
