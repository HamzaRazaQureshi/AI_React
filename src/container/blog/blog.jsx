import React from 'react'
import "./blog.css"
import Article from '../../components/articles/Article';
import { blog01, blog02, blog03, blog04, blog05 } from "./import.js"

const Blog = () => (
  <div className="ai__blog section__padding" id="blog">
    <div className="ai__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="ai__blog-container">
      <div className="ai__blog-container_groupA">
        <Article imgUrl={blog01} date="March 03, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="ai__blog-container_groupB">
        <Article imgUrl={blog02} date="March 03, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="March 03, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="March 03, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="March 03, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog