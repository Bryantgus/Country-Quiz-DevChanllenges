import { useState, useEffect, useRef } from "react"
import NumbersQuestion from "./NumberQuestion";
import BtnAnswer from "./BtnAnswer";
import QuestionsGenerator from "../utils/QuesionGenerator"

const URL_API = "https://restcountries.com/v3.1/all"
const ENPOINT_API = "?fields=name,flags,population,capital,currencies,languages"

export default function Questions() {
    const [data, setData] = useState([]);
    
    const [score, setScore] = useState(0);
    const [arrayQuestion, setArrayQuestions] = useState([]);
    const [question, setQuestion] = useState("Which country does this flag belong to?");


    useEffect(() => {
        fetch(URL_API + ENPOINT_API)
          .then(response => response.json())
          .then(apiData => setData(apiData))
    },[])

    function switchBetweenQuestions(numberOfQuestion) {
        console.log(numberOfQuestion); 
    }

    return (
        <div className="questionsComponent">
            <div className="header">
            <h1 onClick={() => console.log(QuestionsGenerator(data))}>
            Country Quiz
            </h1>

                <div className="scoreContainer">
                    <div className="imgTrophy"></div>
                    <span>{score}/10 Points</span>
                </div>
            </div>
            <div className="questionsContainer">
                <NumbersQuestion switchBetweenQuestions={switchBetweenQuestions}/>
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
