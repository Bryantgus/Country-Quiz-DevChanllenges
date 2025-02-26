export default function BtnAnswer({answer, getValue}) {
    return (
        <button className="btnAnswer" onClick={(e) => getValue(e.target.textContent)}>{answer}</button>
    )
}