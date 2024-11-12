import { useState } from 'react'
import { QUESTIONS } from '../assets/quizQuestions'
import { QuizResult } from './QuizResult'


export function Questions () {

  const [questionNumber, setQuestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const questionsArrayLength = QUESTIONS.length

  const handleClick = (e, questionText, text, isCorrect)=> {
    setQuestionNumber ((prevNumber) => prevNumber +1)
    setUserAnswers ([...userAnswers, {questionText, 'userAnswer' :text, isCorrect}])
  }

    if (questionNumber >= questionsArrayLength) {
    console.log(userAnswers)
    return ( <QuizResult props={userAnswers} /> )
  }

  const questionText = QUESTIONS[questionNumber].text

  return (
    <>
      <h2> Pytanie nr {questionNumber+1}: {questionText} </h2>

      {QUESTIONS[questionNumber].answers.map(({text, isCorrect}, index)=> {
        return (
          <button 
            key={index}
            onClick={(e) => handleClick(e, questionText, text, isCorrect)}
          >
            {text}
          </button>
          )
        })
      }  

    </>
    )
        
        
        
      
      


}