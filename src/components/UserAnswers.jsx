export function UserAnswers( {qText, uAnswer, style, qNo}) {

  console.log(qNo)

  return (
    <div>
      <p>Pytanie nr {qNo}: {qText}</p>
      <p style={{color: style}}>{uAnswer}</p>
    </div>
  )
}
