import { Button } from "./Button"
import { UserAnswers } from "./UserAnswers"

export function QuizResult (props, handleClick) {
  const userAnswers = props.props
  console.log('user ans', userAnswers)

  const fun2 = props.handleClick
  console.log('quizRes', fun2)
  
  const finalScore = (userAnswers.filter((item)=> item.isCorrect === true)).length
  const answerElement = userAnswers.map((el) => {
      const elementStyle = el.isCorrect ? '#008000' : '#ff0000'
      const qNo = (userAnswers.indexOf(el))+1
    return (
      <UserAnswers key={el.index} qText={el.questionText} uAnswer={el.userAnswer} style={elementStyle} qNo={qNo} />
    )
  })

  return (
    <>
      {finalScore >= 8 ?
        <h1 style={{ color: '#008000'}}>Gratulacje! Quiz zaliczony</h1> : 
        <h1 style={{ color: '#ff0000'}}>Niestety test niezaliczony.</h1>
      }
      <h3>Twój wynik to: {finalScore*10}% ({finalScore} z 10 poprawnych odpowiedzi)</h3>
      <br />
      <ul>{answerElement}</ul>
      <Button handleClick={fun2}>Powrót do startu</Button>
    </>
  )
}

//  (<StartScreen />) 
// <button>Powrót do startu</button>           
    