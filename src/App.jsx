import StartQuiz from "./components/StartQuiz"
import Questions from "./components/Questions"
import "./App.css"
import { useEffect, useState } from "react"

export default function App() {

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [start, setStart] = useState(false);

  function startGame(value) {
    setStart(value);
  }
  function endGame(points) {
    setCorrectAnswers(points)
  }

  useEffect(() => {
    setStart(false);
  },[correctAnswers])

  return (
    <div className="appContainer">
      {!start ? <StartQuiz startGame={startGame} correctAnswers={correctAnswers}/>
      : <Questions sendPoints={endGame}/>}           
    </div>
  )
}