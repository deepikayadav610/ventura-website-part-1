import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const blogsData = [
  {
    id: 1,
    title: "The Future of Steel in Industrial Manufacturing",
    image: "/image/quality.jpg",
    category: "Industry",
    summary: "Explore how Ventura is innovating in the steel sector with new alloys and processing techniques.",
    date: "July 30, 2025",
  },
  {
    id: 2,
    title: "Heat Treatment Best Practices",
    image:  "/image/quality.jpg",
    category: "Technical",
    summary: "Proper heat treatment ensures better durability and performance of tool steels.",
    date: "July 20, 2025",
  },
  {
    id: 3,
    title: "Why Quality Control Matters in Tool Steel",
    image:  "/image/quality.jpg",
    category: "Quality",
    summary: "Discover how strict quality control at Ventura sets our materials apart in high-performance applications.",
    date: "July 15, 2025",
  },
];

const categories = ["All", "Industry", "Technical", "Quality"];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter((b) => b.category === activeCategory);

  return (
    <div className="blogs-wrapper container">
      {/* Hero Section */}
      <div className="blogs-hero text-center">
        <h1 className="fw-bold">Industry Insights & Updates</h1>
        <p className="text-muted fs-5">
          Explore articles, case studies, and technical insights from Ventura’s expert team.
        </p>
      </div>

      {/* Category Filters */}
      <div className="category-tabs d-flex flex-wrap justify-content-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="row g-4">
        {filteredBlogs.map((blog) => (
          <div className="col-md-6 col-lg-4" key={blog.id}>
            <div className="blog-card h-100 shadow-sm">
              <img src={blog.image} alt={blog.title} className="img-fluid rounded-top" />
              <div className="p-3">
                <small className="text-muted">{blog.date} | {blog.category}</small>
                <h5 className="fw-bold mt-2">{blog.title}</h5>
                <p className="text-muted">{blog.summary}</p>
                <Link to={`/blogs/${blog.id}`} className="read-link">Read More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
