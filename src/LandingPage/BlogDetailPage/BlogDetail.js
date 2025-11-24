import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div className="container my-5">
      {/* Cover Image */}
      <div className="text-center mb-4">
        <img
          src="https://via.placeholder.com/900x300"
          alt="Blog Cover"
          className="img-fluid rounded"
        />
      </div>

      {/* Blog Content */}
      <h1 className="fw-bold">Introduction to arrays{id}</h1>
      <p className="text-muted">Published on Sept 20, 2025 · 6 min read</p>

      <h3 className="mt-4">Introduction</h3>
      <p>
        This is the introduction of the blog. Explain what this blog is about...
      </p>

      <h3 className="mt-4">Main Content</h3>
      <p className="text-muted card-text">
        An array is a collection of items of the same variable type that are
        stored at contiguous memory locations. It is one of the most popular and
        simple data structures used in programming.In an array, all the elements
        or their references are stored in contiguous memory locations. This
        allows for efficient access and manipulation of elements. An array is a
        collection of items of the same variable type that are stored at
        contiguous memory locations. It is one of the most popular and simple
        data structures used in programming.In an array, all the elements or
        their references are stored in contiguous memory locations. This allows
        for efficient access and manipulation of elements. An array is a
        collection of items of the same variable type that are stored at
        contiguous memory locations. It is one of the most popular and simple
        data structures used in programming.In an array, all the elements or
        their references are stored in contiguous memory locations. This allows
        for efficient access and manipulation of elements. An array is a
        collection of items of the same variable type that are stored at
        contiguous memory locations. It is one of the most popular and simple
        data structures used in programming.In an array, all the elements or
        their references are stored in contiguous memory locations. This allows
        for efficient access and manipulation of elements.
      </p>

      <h3 className="mt-4">Conclusion</h3>
      <p>Wrap up with key points and takeaways.</p>

      {/* Author Info */}
      <div className="card p-3 mt-5">
        <h5>Author: Bhavin Patel</h5>
        <p>Software Engineer & Tech Blogger</p>
      </div>
    </div>
  );
};

export default BlogDetail;
