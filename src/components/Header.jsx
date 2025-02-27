import PropTypes from "prop-types"

export default function Header({score}) {
    return (
        <div className="header">
                        <h1>
                        Country Quiz
                        </h1>
                        <div className="scoreContainer">
                            <div className="imgTrophy"></div>
                            <span>{score}/10 Points</span>
                        </div>
        </div>
    )
}

Header.propTypes = {
    score: PropTypes.numebr
}