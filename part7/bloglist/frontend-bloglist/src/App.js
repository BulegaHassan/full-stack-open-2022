import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import storageService from "./services/storage";
import { setNotification } from "./reducers/notificationReducer";
import LoginForm from "./components/Login";
import NewBlog from "./components/NewBlog";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import { initializeBlogs, likeBlog } from "./reducers/blogsReducer";
import { initializeUsers } from "./reducers/usersReducer";
import Users from "./components/Users";
import Blogs from "./components/Blogs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";

const User = ({ users }) => {
  const id = useParams().id;
  const user = users.find((u) => u.id === (id));
  // console.log('uther',user);
  if (!user) {
    return null;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>added blogs</h2>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const users = useSelector((state) => state.users);
  console.log("users,", users);

  const [user, setUser] = useState("");
  const [info, setInfo] = useState({ message: null });

  const blogFormRef = useRef();

  useEffect(() => {
    const user = storageService.loadUser();
    setUser(user);
  }, []);

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]);

  const login = async (username, password) => {
    try {
      const user = await loginService.login({ username, password });
      setUser(user);
      storageService.saveUser(user);
      dispatch(setNotification(`Welcome`, 5));
    } catch (e) {
      dispatch(setNotification(`wrong username or password", error`, 5));
    }
  };

  const logout = async () => {
    setUser(null);
    storageService.removeUser();

    dispatch(setNotification(`logged out`, 5));
  };

  const like = (blog) => {
    dispatch(likeBlog(blog));
    dispatch(
      setNotification(
        `A like for the blog '${blog.title}' by '${blog.author}'`,
        5
      )
    );
  };

  const remove = async (blog) => {
    const ok = window.confirm(
      `Sure you want to remove '${blog.title}' by ${blog.author}`
    );
    if (ok) {
      await blogService.remove(blog.id);

      dispatch(
        setNotification(
          `The blog' ${blog.title}' by '${blog.author} removed`,
          5
        )
      );
    }
  };

  if (!user) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification info={info} />
        <LoginForm login={login} />
      </div>
    );
  }

  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);
  return (
    <div>
      <h2>blogs</h2>
      <Notification info={info} />
      <div>
        {user.name} logged in
        <button onClick={logout}>logout</button>
      </div>
      <Togglable buttonLabel='new note' ref={blogFormRef}>
        <NewBlog />
      </Togglable>

      <div>
        
      </div>
      <Router>
        <Routes>
          <Route path='/users/:id' element={<User users={users} />} />
          <Route path='/' element={<Blogs sortedBlogs={sortedBlogs} like={like} user={user} remove={remove} />} />
          <Route path='/users' element={<Users users={users} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
