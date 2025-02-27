import PropTypes from "prop-types";
import { useState, useEffect } from "react"
import Header from "./Header";
import NumbersQuestion from "./NumberQuestion";
import BtnAnswer from "./BtnAnswer";
import QuestionsGenerator from "../utils/QuesionGenerator"

const URL_API = "https://restcountries.com/v3.1/all"
const ENPOINT_API = "?fields=name,flags,population,capital,currencies,languages,continents"

export default function Questions({ sendPoints }) {
    const [score, setScore] = useState(0);
    const [arrayQuestion, setArrayQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState([]);
    const [arrayAnswerBtn, setArrayAnswerBtn] = useState(() =>
        Object.fromEntries(Array.from({ length: 10 }, (_, index) => [index, [null, null, null, null]]))
    );
    useEffect(() => {
        const numQuestionsAnswered = questionsAnswered.filter(q => q.wasAnswer).length;

        if (numQuestionsAnswered !== 10) {
            return
        }
        sendPoints(score)
                
    },[questionsAnswered, score, sendPoints])

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
    

    function checkCorrectAnswer(answer, numberBtn) {
        const correctAnswer = arrayQuestion[currentQuestion].answer;
        const correctIndex = arrayQuestion[currentQuestion].arrayAnswers.findIndex(a => a === correctAnswer);
    
        if (!questionsAnswered[currentQuestion].wasAnswer) {
            const wasCorrectlyAnswered = correctAnswer === answer;
    
            setArrayAnswerBtn(prev => ({
                ...prev,
                [currentQuestion]: prev[currentQuestion].map((btn, index) => 
                    index === correctIndex ? true : 
                    index === numberBtn ? (wasCorrectlyAnswered ? true : false) : 
                    null
                )
            }));
    
            setScore(prev => prev + (wasCorrectlyAnswered ? 1 : 0));
    
            setQuestionsAnswered(prev => 
                prev.map((q, index) => 
                    index === currentQuestion 
                        ? { wasAnswer: true, wasCorrectlyAnswer: wasCorrectlyAnswered }
                        : q
                )
            );
        }
    }
    
    
    function switchBetweenQuestions(numberOfQuestion) {
        let ToChangeCurrentQuestion = numberOfQuestion - 1;
        setCurrentQuestion(ToChangeCurrentQuestion)
    }

    return (
        <div className="questionsComponent">
            <Header score={score} />
            <div className="questionsAnswerContainer">
                <NumbersQuestion wasAnwer={questionsAnswered}
                                 numberOfQuestion={switchBetweenQuestions}
                                 sendNumberOfQuestion={switchBetweenQuestions}/>

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
                            numberBtn={index} 
                            answer={answer} 
                            getValue={checkCorrectAnswer}
                            wasCorrectly={arrayAnswerBtn[currentQuestion]}                            
                            />
                    ))
                    : "Loading answers..."}
                </div>
            </div>
        </div>
    )
}

Questions.propTypes = {
    sendPoints: PropTypes.func
}