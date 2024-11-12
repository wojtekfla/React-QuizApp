import { useState } from 'react'
import { QUESTIONS } from '../assets/quizQuestions'
import { QuizResult } from './QuizResult'

export function QuizScreen (handleRestartClick) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  const handleStartClick = handleRestartClick.handleClick
  
  const handleClick = (questionText, text, isCorrect)=> {
    setQuestionNumber ((prevNumber) => prevNumber +1)
    setUserAnswers ([...userAnswers, {questionText, 'userAnswer':text, isCorrect}])
  }

  if (questionNumber >= 10) {
    return (
      <QuizResult props={userAnswers} handleClick={handleStartClick} />
    )
  }

  const questionText = QUESTIONS[questionNumber].text

  return (
    <>
      <h2 className="container"> Pytanie nr {questionNumber+1}: {questionText} </h2>
      {QUESTIONS[questionNumber].answers.map(({text, isCorrect}, index)=> {
        return (
          <>
          <button 
            key={index}
            onClick={() => handleClick(questionText, text, isCorrect)}
            className='container__button'
          >
            {text}
          </button>
          </>
          )
        })
      }     
    </>
  )
}