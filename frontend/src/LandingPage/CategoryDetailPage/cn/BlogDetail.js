import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.js";
import "./blogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = data.find((item) => item.slug === slug);

  if (!blog) {
    return <h2 className="blog-not-found">Blog not found</h2>;
  }

  return (
    <div className="blog-wrapper">
      {/* HERO SECTION */}
      <div className="blog-hero">
        <span className="blog-category-tag">{blog.category}</span>
        <h1 className="blog-hero-title">{blog.title}</h1>
        <p className="blog-hero-subtitle">
          A beginner-friendly explanation with examples and real-world context.
        </p>
      </div>

      {/* CONTENT */}
      <div className="blog-reader">
        {blog.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
