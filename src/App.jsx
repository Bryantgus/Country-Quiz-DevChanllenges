import StartQuiz from "./components/StartQuiz"
import Questions from "./components/Questions"
import "./App.css"
import { useState } from "react"

export default function App() {

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [start, setStart] = useState(false);

  function startGame(value) {
    setStart(value);
  }

  return (
    <div className="appContainer">
      {!start ? <StartQuiz startGame={startGame} correctAnswers={correctAnswers}/>
      : <Questions/>}           
    </div>
  )
}