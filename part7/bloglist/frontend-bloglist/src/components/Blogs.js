import Blog from "./Blog";
import { Link } from "react-router-dom";

const Blogs = ({ sortedBlogs, like, user, remove }) => {
     const style = {
       marginBottom: 2,
       padding: 5,
       borderStyle: "solid",
     };
  return (
    <div>
      {sortedBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`}>
          {/* <Blog
          key={blog.id}
          blog={blog}
          like={() => like(blog)}
          canRemove={user && blog?.user?.username === user.username}
          remove={() => remove(blog)}
          /> */}
          <div style={style}>
            {blog.title} {blog.author}
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Blogs;
