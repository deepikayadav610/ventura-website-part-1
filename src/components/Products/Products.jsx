import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Products.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const products = [
  {
    title: "Hot Work Steel",
    desc: "Heat-resistant alloy with high strength and toughness for hot metal forming applications.",
    link: "/products/hot-work",
    img: "/image/Hot Work Tool Steels/Hot Work Tool Steel H13 Round Bars.png",
  },
  {
    title: "Cold Work Steel",
    desc: "High-carbon, high-chromium tool steels used in industrial tooling, cutting, and cold stamping.",
    link: "/products/cold-work",
    img: "/image/Cold Work Tool Steels/Cold Work - D3.png",
  },
  {
    title: "Plastic Mould Steel",
    desc: "Tool steel with hardness, wear resistance, and thermal stability for durable plastic molding applications.",
    link: "/products/spring",
    img: "/image/Plastic Mould Steels/P 20 Flat bars.png",
  },
  {
    title: "Spring Steel",                           
    desc: "High-carbon alloy with excellent strength, toughness, and elasticity, ideal for springs and dynamic applications.",
    link: "/products/spring",
    img: "/image/Spring Steels/EN 31 Rods.png",
  },
  {
    title: "Alloy Steel",
    desc: "Strong, corrosion-resistant bars with excellent toughness and wear resistance, widely used in automotive parts and fasteners.",
    link: "/products/spring",
    img: "/image/Alloy Steels/42CrMo4 Round Bars.png",
  },
  {
    title: "Carbon Steel",
    desc: "A strong iron-carbon alloy known for its excellent mechanical properties, strength, and hardness.",
    link: "/products/spring",
    img: "/image/Carbon Steels/C45 Carbon Steel Round Bars.png",
  },
  {
    title: "Boron Steel",
    desc: "High-strength alloy with enhanced hardenability, widely used in automotive, agricultural, and construction applications",
    link: "/products/boron-steel",
    img: "/image/Boron Steels/10B35 Boron Steel Round Bars.png",
  },
];

const slides = [
  { image: "/image/quality.jpg" },
  { image: "/image/product.jpeg" },
  {
    image: "/image/infrastructure-4.png",
  },
  { image: "/image/konsond-img.png" },
  { image: "/image/product.jpeg" },
  {
    image: "/image/product.jpeg",
  },
];

const Products = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Products | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Steels is a trusted steel manufacturer."
          />
        </Helmet>
      </HelmetProvider>
      <div>
        <div
          id="heroCarousel"
          className="carousel slide hero-section"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-pause="false"
          data-bs-wrap="true"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="overlay"></div>
              </div>
            ))}
          </div>

          <div className="carousel-caption-static text-white">
            <h1 className="display-5 fw-bold mb-3">
              Explore Our Premium Steel Product Range
            </h1>
            <p className="lead mb-4">
              From Hot Work to Spring Steel – built for industrial excellence
              and reliability.
            </p>
            <a href="/enquiry" className="btn btn-outline-light btn-lg px-4">
              Enquire Now
            </a>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <section className="product-overview-section py-5 bg-light">
          <div className="container">
            <h2 className="text-center fw-bold mb-4 ">
              Our Product Categories
            </h2>
            <p className="text-center text-muted mb-5">
              Trusted by industries across automotive, tooling, manufacturing,
              and more.
            </p>
            <div className="row g-4">
              {products.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 product-card shadow-sm">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.desc}</p>
                      <Link
                        to={item.link}
                        className="stretched-link text-decoration-none fw-semibold d-flex align-items-center gap-2"
                      >
                        Learn More <BsArrowRightCircle size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
