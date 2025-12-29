// import React from "react";
// import { useParams } from "react-router-dom";
// import data from "./data.js"; // adjust path
// import "./blogDetail.css";

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const blog = data.find((item) => item.slug === slug);

//   if (!blog) {
//     return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;
//   }

//   return (
//     <div className="blog-wrapper">
//       {/* HERO SECTION */}
//       <div className="blog-hero">
//         <span className="blog-category-tag">{blog.category}</span>
//         <h1 className="blog-hero-title">{blog.title}</h1>
//         <p className="blog-hero-subtitle">
//           A beginner-friendly explanation with examples and real-world context.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="blog-reader">
//         {blog.content.split("\n").map((line, index) => (
//           <p key={index}>{line}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.js";
import "./blogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = data.find((item) => item.slug === slug);

  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || {}
  );

  const [showModal, setShowModal] = useState(false);
  const [newList, setNewList] = useState("");

  if (!blog) {
    return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;
  }

  /* 🔖 Bookmark Toggle */
  const toggleBookmark = () => {
    let updated;
    if (bookmarks.includes(blog.id)) {
      updated = bookmarks.filter((id) => id !== blog.id);
    } else {
      updated = [...bookmarks, blog.id];
    }
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  /* 📋 Add to List */
  const addToList = (listName) => {
    if (!listName) return;

    const updatedLists = {
      ...lists,
      [listName]: lists[listName]
        ? [...new Set([...lists[listName], blog.id])]
        : [blog.id],
    };

    setLists(updatedLists);
    localStorage.setItem("lists", JSON.stringify(updatedLists));
    setNewList("");
    setShowModal(false);
  };

  return (
    <div className="blog-wrapper">
      {/* HERO */}
      <div className="blog-hero">
        <div className="blog-image-wrapper-2">
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-card-image-2"
        />
      </div>
        <span className="blog-category-tag">{blog.category}</span>

        <h1 className="blog-hero-title">{blog.title}</h1>

        <p className="blog-hero-subtitle">
          A beginner-friendly explanation with examples and real-world context.
        </p>

        {/* 🔥 ACTION BAR */}
        <div className="blog-actions">
          <button onClick={toggleBookmark} className="action-btn">
            {bookmarks.includes(blog.id) ? "⭐ Bookmarked" : "☆ Bookmark"}
          </button>

          <button onClick={() => setShowModal(true)} className="action-btn">
            📋 Add to List
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="blog-reader">
        {blog.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* 📋 LIST MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="list-modal">
            <h3>Add to your list</h3>

            {Object.keys(lists).map((list) => (
              <button
                key={list}
                className="list-item"
                onClick={() => addToList(list)}
              >
                {list}
              </button>
            ))}

            <input
              placeholder="Create new list"
              value={newList}
              onChange={(e) => setNewList(e.target.value)}
            />

            <button
              className="create-btn"
              onClick={() => addToList(newList)}
            >
              Create & Add
            </button>

            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
