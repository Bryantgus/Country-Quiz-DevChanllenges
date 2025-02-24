import "../assets/congrats.webp"

// import congrats1 from "../assets/congrats.webp"

export default function StartQuiz({correctAnswers}) {
    
    return (
        <div className="startQuizContainer">
            <div className="congratsImg"></div>
            <div className="pContainer">
                <p>Congrats! You completed the quiz</p>
            </div>
            <p>You answer {correctAnswers}/10 correctly</p>
            <button className="btnComponent">Play Again</button>
        </div>
    )
}