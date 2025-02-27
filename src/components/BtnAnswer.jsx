import PropTypes from "prop-types"
import good from "../assets/Check_round_fill.webp"
import bad from "../assets/Close_round_fill.webp"
export default function BtnAnswer({ answer, getValue, numberBtn, wasCorrectly }) {
    const img = wasCorrectly && wasCorrectly[numberBtn] !== null 
    ? (wasCorrectly[numberBtn] ? good : bad) 
    : null;


    return (
        <div className="btnAnswer" id={numberBtn} onClick={() => getValue(answer, numberBtn)}>
            <span>{answer}</span>
            {img && <img src={img} className="ImgOnBtn" alt="IsCorrectlyTheAnswer" />}
        </div>
    );
}

BtnAnswer.propTypes = {
    answer: PropTypes.string,
    getValue: PropTypes.func,
    wasCorrectlyAnswerBtn: PropTypes.bool,
    wasIncorrectlyAnswerBtn: PropTypes.bool,
    wasGood: PropTypes.bool,
    wasBad: PropTypes.bool,
    numberBtn: PropTypes.number,
    wasCorrectly: PropTypes.object
}