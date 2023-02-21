import { useEffect } from "react";
import Filter from "./components/Filter";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import {
  setNotification,
  removeNotification,
} from "./reducers/notificationReducer";
import anecdoteService from "./services/anecdotes";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService.getAll().then((anecs) => dispatch(setAnecdotes(anecs)));
  }, [dispatch]);

  const showNotification = (notification) => {
    dispatch(setNotification(notification));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList showNotification={showNotification} />
      <AnecdoteForm showNotification={showNotification} />
    </div>
  );
};

export default App;
