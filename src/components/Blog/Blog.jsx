/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Blog.css";
import imag from "../../assets/blogImages/blog1.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const apiUrl = "/api/blogData";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <div className="blog_main">
        <div className="blog_header">
          <span>From the Blog</span>
        </div>

        <div className="blog_container">
          {blogs.map((blog) => {
            return (
              <>
                <div className="blog_card">
                  <div className="card_img">
                    <img src={blog.img}></img>
                  </div>
                  <div className="card_text">
                    <span className="card_title">{blog.title}</span>
                    <span className="card_date">{blog.date}</span>
                    <span className="card_description">{blog.description}</span>
                  </div>
                </div>
                <hr></hr>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
