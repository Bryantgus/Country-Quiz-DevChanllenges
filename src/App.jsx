import StartQuiz from "./components/StartQuiz"
import Questions from "./components/Questions"
import "./App.css"
import { useState } from "react"

export default function App() {

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [start, setStart] = useState(true);
  return (
    <div className="appContainer">
      {!start ? <StartQuiz correctAnswers={correctAnswers}/>
      : <Questions/>}           
    </div>
  )
}