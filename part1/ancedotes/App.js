import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick ={handleClick}>{text}</button>
  )
}

const Header = (props) => {
  return(
    <h2>{props.text}</h2>
  )
}

const MostVotes = ({anecdotes, votes}) => {
  const highestVoted = Math.max(...votes)
  const indexHighestVoted = votes.indexOf(highestVoted)
  const displayHighestVoted = anecdotes[indexHighestVoted]
  if (highestVoted === 0) {
    return(
      <p>
        No votes yet
      </p>
    )
  }
  else {
    return(
      <div>
        <p>
          {displayHighestVoted}
        </p>
        <p>
          has {highestVoted} vote(s)
        </p>
      </div>
    )
  }
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint16Array(7))

  const handleNextAncedote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
      setSelected(randomNumber)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Header text="Ancedote of the day" />
      {anecdotes[selected]}
      <p> has {votes[selected]} vote(s) </p>
      <p>
        <Button handleClick ={handleVote} text="vote" />
        <Button handleClick ={handleNextAncedote} text="next anecdote" />
      </p>

      <Header text ="Ancedote with most votes" />
      <MostVotes anecdotes ={anecdotes} votes ={votes} />
    </div>
  )
}

export default App