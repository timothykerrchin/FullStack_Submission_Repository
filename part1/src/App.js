import React, { useState } from 'react'

const Header = () => {
  return(
    <h1><p>give feedback</p></h1>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const postivePercentage = `${(good / (good + neutral + bad)) * 100}%`;
  if (good > 0 | neutral > 0 | bad > 0) {
    return(
      <div>
        <h1><p>statistics</p></h1>
          <tr>
            <td><StatisticLine text="good" /></td>
            <td><StatisticLine value={good}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral" /></td>
            <td><StatisticLine value={neutral}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad" /></td>
            <td><StatisticLine value={bad}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" /></td>
            <td><StatisticLine value={(good + neutral + bad)}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" /></td>
            <td><StatisticLine value={ (good - bad) / (good + neutral + bad)}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="postive" /></td>
            <td><StatisticLine value={ postivePercentage}/></td>
          </tr>
      </div>
    )
  } else {
    return(
      
      <div>
        <h1><p>statistics</p></h1>
        No feedback given
      </div>
    )  
  }
}

const StatisticLine = ({text, value}) => {
  return(
    <div>
      {text}  {value}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good + 1)}
  const handleNeutralClick = () => {setNeutral(neutral + 1)}
  const handleBadClick = () => {setBad(bad + 1)}

  return (
    <div>
      <Header title="give feedback"/>
    
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App