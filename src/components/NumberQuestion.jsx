
function ItemNumberQuestion({number, numberOfQuestion, isAnswer}) {
    return (
        <div className="circleNumber"
             onClick={() => numberOfQuestion(number)}
             style={{background: isAnswer && "linear-gradient(#E65895, #BC6BE8)"}}>
            {number}
        </div>
    )
}

export default function NumbersQuestion({number, switchBetweenQuestions}) {
    const numbers = Array.from({ length: 10 }, (_, i) => ({ number: i + 1, value: false }));

    return (
        <div className="numberQuestionsContainer">
            {numbers.map((item, index) => {
                return (
                <ItemNumberQuestion number={item.number}
                                    numberOfQuestion={switchBetweenQuestions}
                                    isAnswer={item.value}
                                    key={index}/>)
            })}
        </div>
        
    )
}