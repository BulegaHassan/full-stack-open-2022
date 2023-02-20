import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
const AnecdoteForm = ({ showNotification }) => {
  const dispatch = useDispatch();
  const addAnecdote = (event) => {
    event.preventDefault();
    const anecdote = event.target.anec.value;
    event.target.anec.value = "";
    dispatch(createAnecdote(anecdote));
    showNotification(`You created ${anecdote}`);
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anec' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
