import { useState } from 'react'
import { StartScreen } from './components/StartScreen'
import { QuizScreen } from './components/QuizScreen'

import './App.css'

function App() {
  const [screenSetup, setScreenSetup] = useState('start')

  const handleStartClick = function () {
    setScreenSetup ('quiz-app')
  }

  const handleRestartClick = function () {
    setScreenSetup ('start')
  }

  return (
    <>
      {screenSetup === 'start' && ( <StartScreen handleClick={handleStartClick} />)}
      {screenSetup === 'quiz-app' && ( <QuizScreen handleClick={handleRestartClick} />)}
    </>
  )
}

export default App
