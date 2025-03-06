import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import '../style/dashboard.css'

const Dashboard = () => {
  const [blogData, setBlogData] = useState([]);
  const [blog, setBlog] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("You need to log in first!"); 
      navigate("/"); 
    }
  }, [navigate]);

  const handleBlogInput = (e) => {
    setBlog(e.target.value);
  };

  const addPost = (e) => {
    e.preventDefault();
    if (blog.trim()) {
      setBlogData((prev) => [...prev, blog]);
      setBlog("");
      toast.success("Blog added successfully!"); 
    }
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    toast.info("Logged out successfully!"); 
    setTimeout(() => navigate('/'), 800); 
  };

  return (
    <div className="blog-container">
      <ToastContainer autoClose={2000} /> 

      <form className="blog-form">
        <input 
          type="text" 
          className="blog-input" 
          value={blog} 
          onChange={handleBlogInput} 
          placeholder="Enter your blog post..." 
        />
        <div>
          <button className="blog-button add-button" onClick={addPost}>Add Post</button>
          <button className="blog-button logout-button" onClick={removeToken}>Logout</button>
        </div>
      </form>

      <div className="blog-list">
        <h4 className="blog-title">Blogs</h4>
        {blogData.length ? (
          blogData.map((blog, i) => (
            <h4 key={i} className="blog-post"> {i + 1}. {blog}</h4>
          ))
        ) : (
          <h4 className="blog-post">No Blog Posted</h4>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
