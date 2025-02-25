function ItemNumberQuestion({number, numberOfQuestion}) {
    return (
        <div className="circleNumber"
             onClick={() => numberOfQuestion(number)}>
            {number}
        </div>
    )
}

export default function NumbersQuestion({number, switchBetweenQuestions}) {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    return (
        <div className="numberQuestionsContainer">
            {numbers.map((item, index) => {
                return (
                <ItemNumberQuestion number={item}
                                    numberOfQuestion={switchBetweenQuestions}
                                    key={index}/>)
            })}
        </div>
        
    )
}