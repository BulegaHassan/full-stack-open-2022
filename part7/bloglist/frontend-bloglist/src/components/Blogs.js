import Blog from "./Blog";
const Blogs = ({ sortedBlogs,like,user,remove}) => {
  return (
    <div>
      {sortedBlogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          like={() => like(blog)}
          canRemove={user && blog?.user?.username === user.username}
          remove={() => remove(blog)}
        />
      ))}
    </div>
  );
};
export default Blogs