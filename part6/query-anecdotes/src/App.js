import { useQuery, useMutation, useQueryClient } from "react-query";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { getAnecdotes, createAnecdote, updateAnecdote } from "./requests";
import { useReducer } from "react";

// const notificationReducer = (state, action) => {
//   switch (action.type) {
//     case "SHOW":
//       return action.payload;
//     default:
//       return state;
//   }
// };

const App = () => {
  // const [notification, notificationDispatch] = useReducer(
  //   notificationReducer,
  //   ''
  // );
  const queryClient = useQueryClient();

  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });
  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
    // notificationDispatch({ type: "SHOW", payload: anecdote });
  };

  const result = useQuery("anecdotes", getAnecdotes);

  if (result.isLoading) {
    return <div>loading data...</div>;
  }
  const anecdotes = result.data;
  // console.log('anecs',anecdotes);
  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification  />
      <AnecdoteForm />
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
