import { useState, useEffect, useRef } from "react"
import NumbersQuestion from "./NumberQuestion";
import BtnAnswer from "./BtnAnswer";
import QuestionsGenerator from "../utils/QuesionGenerator"

const URL_API = "https://restcountries.com/v3.1/all"
const ENPOINT_API = "?fields=name,flags,population,capital,currencies,languages,continents"

export default function Questions() {
    const [score, setScore] = useState(0);
    const [arrayQuestion, setArrayQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState([]);

    useEffect(() => {
        fetch(URL_API + ENPOINT_API)
          .then(response => response.json())
          .then(apiData => {
            const generatedQuestions = QuestionsGenerator(apiData);
            setArrayQuestions(generatedQuestions);
          });
        
        setQuestionsAnswered(Array(10).fill(null).map(() => ({
            wasAnswer: false,
            wasCorrectlyAnswer: null
        })));
    }, []);
    

    function isTheCorrectAnswer(answer) {
        const wasAnswer = questionsAnswered[currentQuestion].wasAnswer;
        const correctAnswer = arrayQuestion.currentQuestion.answer;
        if (wasAnswer === false) {
            if (correctAnswer === answer) {
                setScore(prev => prev + 1);
                
            }
        }    
    }

    useEffect(() => {
        console.log(score);
    },[score]);
    

    function switchBetweenQuestions(numberOfQuestion) {
        let ToChangeCurrentQuestion = numberOfQuestion - 1;
        setCurrentQuestion(ToChangeCurrentQuestion)
    }

    return (
        <div className="questionsComponent">
            <div className="header">
                <h1 onClick={() => console.log(arrayQuestion[currentQuestion].question)}>
                Country Quiz
                </h1>
                <div className="scoreContainer">
                    <div className="imgTrophy"></div>
                    <span>{score}/10 Points</span>
                </div>
            </div>
            <div className="questionsContainer">
                <NumbersQuestion switchBetweenQuestions={switchBetweenQuestions}/>
                <span className="question">
                {arrayQuestion.length > 0 && arrayQuestion[currentQuestion] 
                    ? arrayQuestion[currentQuestion].question 
                    : "Loading..."}
                </span>



                <div className="answerContainer">
                {arrayQuestion.length > 0 && arrayQuestion[currentQuestion] 
                    ? arrayQuestion[currentQuestion].arrayAnswers.map((answer, index) => (
                        <BtnAnswer 
                            key={index} 
                            answer={answer} 
                            getValue={isTheCorrectAnswer}/>
                    ))
                    : "Loading answers..."}
                </div>
            </div>
        </div>
    )
}
