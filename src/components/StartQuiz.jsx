import "../assets/congrats.webp"

// import congrats1 from "../assets/congrats.webp"

export default function StartQuiz({correctAnswers, startGame}) {
    
    return (
        <div className="startQuizContainer">
            <div className="congratsImg"></div>
            <div className="pContainer">
                <p>Congrats! You completed the quiz</p>
            </div>
            <p>You answer {correctAnswers}/10 correctly</p>
            <button className="btnComponent"
                    onClick={() => startGame(true)}>
                    Play Again</button>
        </div>
    )
}