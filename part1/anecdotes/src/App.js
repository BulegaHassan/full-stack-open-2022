import { useState } from "react";
const Display = ({ anecdotes, votes, text }) => {
  return (
    <>
      <div>{anecdotes[text]}</div>
      <div>has {votes[text]} votes</div>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  // console.log(anecdotes.length)
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(7).fill(0));

  const nextClickHandler = () => {
    const randomAnecdote = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };
    setSelected(randomAnecdote(0, 7));
  };

  const voteClickHandler = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const mostVotes = Math.max(...votes);
  const index = votes.indexOf(mostVotes);
  // console.log("MostVotes, index", mostVotes, index);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdotes={anecdotes} votes={votes} text={selected} />
      <Button handleClick={voteClickHandler} text='vote' /> {""}
      <Button handleClick={nextClickHandler} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <Display anecdotes={anecdotes} votes={votes} text={index} />
    </div>
  );
};

export default App;
