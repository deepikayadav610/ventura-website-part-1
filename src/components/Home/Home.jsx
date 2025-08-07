import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Your Reliable Source for Special Steels and Alloys",
        "Providing Industry-Wide Certified Steel Solutions",
        "Accuracy, Effectiveness, and Verified Dependability From the Start",
        "Superior Engineering Supported by Honesty",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const stats = [
    { icon: "bi-calendar-check", number: 2014, label: "Established" },
    {
      icon: "bi-box-seam",
      number: 10000,
      suffix: "+ Tonnes",
      label: "Stock Capacity",
    },
    { icon: "bi-award", number: 70, suffix: "+", label: "Grades" },
    { icon: "bi-people-fill", number: 1700, suffix: "+", label: "Customers" },
  ];

  const [highlightsRef, highlightsInView] = useInView({
    triggerOnce: true,
    threshold: 0.4, 
    rootMargin: "0px 0px -100px 0px",
  });

  const products = [
    {
      title: "Hot Work Steel",
      desc: "For high-temperature tools and dies.",
      img: "/image/Hot Work Tool Steels/Hot Work Tool Steel 1.2344 Round Bars.png",
      link: "/products/hot-work",
    },
    {
      title: "Cold Work Steel",
      desc: "Perfect for cutting & forming tools.",
      img: "/image/Cold Work Tool Steels/Cold Work - D2.png",
      link: "/products/cold-work",
    },
    {
      title: "Spring Steel",
      desc: "Flexible & strong for industrial use.",
      img: "/image/Spring Steels/EN 31 Rods.png",
      link: "/products/spring",
    },
    {
      title: "Alloy Steel",
      desc: "Enhanced strength and corrosion resistance.",
      img: "/image/Alloy Steels/EN 31 Round Bars.png",
      link: "/products/alloy",
    },
    {
      title: "Plastic Mould Steel",
      desc: "Best suited for mould manufacturing.",
      img: "/image/Plastic Mould Steels/Plastic Mould 2.png",
      link: "/products/plastic",
    },
    {
      title: "Carbon Steel",
      desc: "Durable for metal stamping dies.",
      img: "/image/Carbon Steels/C45 Carbon Steel Round Bars.png",
      link: "/products/die",
    },
    {
      title: "Boron Steel",
      desc: "Hard steel for cutting & shaping tools.",
      img: "/image/product.jpeg",
      link: "/products/tool",
    },
  ];

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | Ventura Alloy & Steels Pvt. Ltd.</title>
          <meta
            name="description"
            content="Ventura Steels is a trusted steel manufacturer."
          />
        </Helmet>
      </HelmetProvider>

      {/* video-banner */}
      <div className="video-banner">
        <video autoPlay loop muted className="bg-video">
          <source src="/videoes/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <h1>
            Welcome to Ventura Steels <br />
            <span ref={typedRef} className=""></span>
          </h1>
        </div>
      </div>

      {/* company highlights cards */}
      <section className="py-5" ref={highlightsRef}>
        <div className="container">
          <div className="row text-center g-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="col-md-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card card-bg shadow-sm h-100">
                  <div className="card-body">
                    <i className={`bi ${stat.icon} fs-1 mb-3 card-text`}></i>
                    <h4 className="card-text">
                      {highlightsInView && (
                        <CountUp
                          end={stat.number}
                          duration={3}
                          suffix={stat.suffix || ""}
                        />
                      )}
                    </h4>
                    <p className="mb-0 card-text">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* welcome-section */}
      <div className="welcome-section container mt-5 py-4">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <div className="welcome-content">
              <h2 className="fs-1 mb-3" data-aos="fade-right">
                Welcome to Ventura
              </h2>
              <hr className="welcome-line" data-aos="fade-right" />
              <p className="fs-5 text-justify" data-aos="fade-right">
                Greetings from Ventura Alloy and Steels Private Limited, one of
                India's top suppliers and stockists of premium alloy steels.
                With decades of experience in the business, we are experts at
                finding and providing high-grade carbon steel, chrome moly,
                case-hardening, and special alloy grades that satisfy the
                demanding requirements of industries like manufacturing, power
                generation, oil and gas, automotive, and infrastructure. We are
                a trusted partner for engineers, procurement leaders, and
                project managers nationwide because of our dedication to
                quality, on-time delivery, and technical know-how.
              </p>
            </div>
          </div>
          <div className="col-md-6 text-end" data-aos="fade-in">
            <img
              src="/image/steel forging.png"
              alt="Ventura Company"
              className="img-fluid"
              style={{ width: 400, height: 400 }}
            />
          </div>
        </div>
      </div>

      {/* Quality & Infrastructure */}
      <div className="container-fluid quality-infra ">
        <h2 className="text-center mt-5 pt-5 text-white" data-aos="fade-right">
          Quality & <span>Infrastructure</span>
        </h2>
        <hr className="heading-line" data-aos="fade-right" />
        <h5 className="text-center mt-2 mb-5" data-aos="fade-right">
          At Ventura Alloy, quality is our cornerstone and more than just a
          promise. Only reputable mills provide our steel materials, which are
          fully traceable and certified by third parties (EN, ASTM, DIN
          standards). No matter the size or complexity of your requirement, we
          guarantee smooth logistics, a strong inventory, and timely dispatch
          from our corporate office in Mumbai and a strategically placed
          warehouse in Bhiwandi.
        </h5>

        <div className="quality-infra-cards mb-5 pb-5 row justify-content-center g-4">
          {/* Quality Card */}
          <div className="col-12 col-md-6 col-lg-5 " data-aos="fade-right">
            <div className="card quality-card text-white border-0">
              <div className="card-overlay d-flex flex-column justify-content-center align-items-start p-4">
                <i className="bi bi-patch-check-fill fs-1 text-primary mb-3"></i>
                <h4 className="fw-semibold fs-2 mb-2">Quality</h4>
                <p className="fs-6">
                  At Ventura Alloy & Steels, every member of our team—from
                  sourcing agents and metallurgists to quality engineers,
                  logistics coordinators.
                </p>
                <Link
                  to="/quality"
                  className="text-white text-decoration-none quality-link p-2"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="col-12 col-md-6 col-lg-5" data-aos="fade-left">
            <div className="card infra-card text-white border-0">
              <div className="card-overlay d-flex flex-column justify-content-center align-items-start p-4">
                <i className="bi bi-building fs-1 text-success mb-3"></i>
                <h4 className="fw-semibold fs-2 mb-2">Infrastructure</h4>
                <p className="fs-6">
                  Our 12,000-square-foot headquarters in Bhiwandi is equipped
                  with 1,500 tons of dedicated storage space, dual EOT cranes
                  (5-ton and 25-ton capacities).
                </p>
                <Link
                  to="/infrastructure"
                  className="text-white text-decoration-none infra-link p-2"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="product-container py-5" ref={productsRef}>
        <h2 className="text-center fw-bold mb-3">Product Types</h2>
        <hr className="mb-5 heading-product" />

        {productsInView && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={50}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="product-swiper"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-tile" data-aos="zoom-in-down">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="product-image"
                  />
                  <div className="overlay">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                    <a href={item.link} className="btn btn-outline-light mt-2">
                      View Product
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* What we do section */}
      <section className="what-we-do py-5">
        <div className="container">
          <div className="row align-items-center flex-md-row flex-column-reverse">
            <div
              className="col-md-6 text-content pe-md-5"
              data-aos="fade-right"
            >
              <h2 className="section-title mb-3">What we do</h2>
              <p className="section-text fs-5">
                We offer comprehensive steel supply solutions for vital
                applications that require compliance, performance, and
                durability. Ventura Alloy provides a carefully chosen inventory
                of industrial steels that are suited to your technical and
                dimensional requirements, ranging from chrome moly tubes and
                alloy steel bars to case-hardening and heat-resistant grades.
                Our skilled staff provides materials that function where it
                counts most, whether you're sourcing for turnkey infrastructure
                projects or high-stress mechanical components.
              </p>
            </div>
            <div className="col-md-6 text-end" data-aos="fade-left">
              <img
                src="/image/Cold Work Tool Steels/Cold Work - D2.png"
                alt="What we do"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers section */}
      <section className="suppliers-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="section-heading mb-5 pb-3" data-aos="fade-up">
            Our Trusted Suppliers
          </h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-6 col-sm-4 col-md-2 mb-4" data-aos="zoom-in">
              <img
                src="/image/jsw-logo.png"
                alt="Supplier 1"
                className="img-fluid supplier-logo"
              />
            </div>
            <div
              className="col-6 col-sm-4 col-md-2 mb-4"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src="/image/sail.png"
                alt="Supplier 2"
                className="img-fluid supplier-logo"
              />
            </div>
            <div
              className="col-6 col-sm-4 col-md-2 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="/image/bhushan-logo.png"
                alt="Supplier 3"
                className="img-fluid supplier-logo"
              />
            </div>
            <div
              className="col-6 col-sm-4 col-md-2 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src="/image/RL steels logo.png"
                alt="Supplier 4"
                className="img-fluid supplier-logo"
              />
            </div>
            <div
              className="col-6 col-sm-4 col-md-2 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <img
                src="/image/superforgings logo.png"
                alt="Supplier 5"
                className="img-fluid supplier-logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
