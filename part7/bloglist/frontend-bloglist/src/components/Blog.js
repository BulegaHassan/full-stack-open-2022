import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
const Blog = ({ blogs, like, canRemove, remove }) => {
   const id = useParams().id;
   const blog = blogs.find((u) => u.id === id);
 

  return (
    <div className='blog'>
      {
        <div>
          <h1>{blog.title}</h1>
          <div>
            {" "}
            <a href={blog.url}> {blog.url}</a>{" "}
          </div>
          <div>
            likes {blog.likes} <button onClick={like}>like</button>
          </div>
          <div>{blog.user && blog.user.name}</div>
          {canRemove && <button onClick={remove}>delete</button>}
          <p>added by {blog.author}</p>
        </div>
      }
    </div>
  );
};

Blog.propTypes = {
  like: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  canRemove: PropTypes.bool,
  blog: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    likes: PropTypes.number,
  }),
};

export default Blog;
