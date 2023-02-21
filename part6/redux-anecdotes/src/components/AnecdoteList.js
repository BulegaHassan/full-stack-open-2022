import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdotes";
import { updateAnecdotesVotes } from "../reducers/anecdoteReducer";
const AnecdoteList = ({ showNotification }) => {
  const anecdotes = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.anecdotes;
    }
    return state.anecdotes.filter((anec) =>
      anec.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(addVote(id));
    // dispatch(updateAnecdotesVotes(id))
    const anecToUpdate = sortedAnecdotes.find((anec) => anec.id === id);
    anecdoteService
      .updateAnecdotes(id, { ...anecToUpdate, votes: anecToUpdate.votes })
      .then((updatedAnec) =>
        sortedAnecdotes.map((ane) => (ane.id !== id ? ane : updatedAnec))
      );
  };
  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                vote(anecdote.id);
                showNotification(`You voted ${anecdote.content}`);
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
