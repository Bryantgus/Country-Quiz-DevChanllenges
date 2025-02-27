import PropTypes from "prop-types"

function ItemNumberQuestion({number, sendNumberOfQuestion, isAnswerCorrectly}) {
    return (
        <div className="circleNumber"
             onClick={() => sendNumberOfQuestion(number)}
             style={{background: isAnswerCorrectly && "linear-gradient(#E65895, #BC6BE8)"}}>
            {number}
        </div>
    )
}

export default function NumbersQuestion({sendNumberOfQuestion, wasAnwer}) {

    return (
        <div className="numberQuestionsContainer">
            {wasAnwer.map((item, index) => {
                return (
                <ItemNumberQuestion number={index+1}
                                    sendNumberOfQuestion={sendNumberOfQuestion}
                                    isAnswerCorrectly={item.wasAnswer}
                                    key={index}/>)
            })}
        </div>
        
    )
}

ItemNumberQuestion.propTypes = {
    number: PropTypes.number,
    sendNumberOfQuestion: PropTypes.func,
    isAnswerCorrectly: PropTypes.bool
}

NumbersQuestion.propTypes = {
    number: PropTypes.number,
    sendNumberOfQuestion: PropTypes.number,
    wasAnwer: PropTypes.array
}
