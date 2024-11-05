export function UserAnswers( {qText, uAnswer, style, qNo}) {

  return (
    <div className="answers">
      <div className="answers__item item--blue">Pytanie nr {qNo}: {qText}</div>
      <div className="answers__item">Twoja odpowiedź: 
        <p className="answer__item--userAnswer" style={{color: style}}>{uAnswer}</p></div>
    </div>
  )
}
