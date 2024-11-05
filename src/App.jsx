import { useState } from 'react'
import { StartScreen } from './components/StartScreen'
import { QuizScreen } from './components/QuizScreen'

import './App.css'

function App() {
  const [screenSetup, setScreenSetup] = useState('start')
  const [questionNumber, setQuestionNumber] = useState(0)
  // const [userAnswers, setUserAnswers] = useState([])
  // const [score, setScore] = useState(0)

  const handleStartClick = function () {
    setScreenSetup ('quiz-app')
  }

  const handleRestartClick = function () {
    console.log('klik')
    setScreenSetup ('start')
  }

  // const handleQuestionClick = function (event, text) {    
  //   setQuestionNumber (prevNumber => prevNumber + 1) 
  // }

  return (
    <>
      {screenSetup === 'start' && ( <StartScreen handleClick={handleStartClick} />)}
      {screenSetup === 'quiz-app' && ( <QuizScreen handleClick={handleRestartClick} /> )}
      {/* {screenSetup === 'result' && <EndScreen />} */}
    </>
  )
}

export default App
