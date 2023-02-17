import { useState } from 'react'
import arrow from '../assets/images/icon-arrow.svg'

const QuestionAnswer = ({question, answer}) => {
  const [isActive, setActive] = useState(false)

  const toggleHeight = () => {
    setActive(!isActive)
  }

  return (
    <>
      <div className="link-icon">
        <p className='question-p'>{question}</p>
        <button className='toggle-question' onClick={() => toggleHeight()}><img src={arrow} alt=""/></button>
      </div>
      <p className={isActive ? "open-answer answer" : "answer"}>{answer}</p>
    </>
  )
}

export default QuestionAnswer