import { useState } from "react";
const Blog = ({ blog }) => {
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setHide(!hide);
  };
  const ourStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };
  return (
    <>
      <div style={ourStyle}>
        {blog.title} {blog.author}{" "}
        <button onClick={handleClick}>{hide ? "hide" : "view"}</button>
      </div>
      {hide === true ? (
        <div style={ourStyle}>
          <p>{blog.url}</p>
          <p>
            likes {blog.likes} <button>like</button>
          </p>
          <p>{blog?.user?.name}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Blog;
