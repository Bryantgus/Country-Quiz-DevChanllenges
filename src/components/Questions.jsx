import { useState } from "react"
import NumberQuestion from "./NumberQuestion";
import BtnAnswer from "./BtnAnswer";

export default function Questions() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const [score, setScore] = useState(0);
    const [arrayQuestion, setArrayQuestions] = useState([]);
    const [question, setQuestion] = useState("Which country does this flag belong to?");

    return (
        <div className="questionsComponent">
            <div className="header">
                <h1>Country Quiz</h1>
                <div className="scoreContainer">
                    <div className="imgTrophy"></div>
                    <span>{score}/10 Points</span>
                </div>
            </div>
            <div className="questionsContainer">
                <div className="numberQuestionsContainer">
                    {numbers.map((item, index) => {
                        return (
                        <NumberQuestion number={item}
                                        key={index}/>)
                    })}
                </div>
                <span className="question">{question}</span>

                <div className="answerContainer">
                    <BtnAnswer answer={"1"}/>
                    <BtnAnswer answer={"2"}/>
                    <BtnAnswer answer={"3"}/>
                    <BtnAnswer answer={"4"}/>
                </div>
            </div>
        </div>
    )
}
