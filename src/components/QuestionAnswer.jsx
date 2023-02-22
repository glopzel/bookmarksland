import { useState } from 'react'

const QuestionAnswer = ({question, answer}) => {
  const [isActive, setActive] = useState(false)

  const toggleHeight = () => {
    setActive(!isActive)
  }

  return (
    <>
      <div className="link-icon">
        <p className='question-p'>{question}</p>
        <button className='toggle-question' onClick={() => toggleHeight()}><svg className={isActive ? "control-up" : ""} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={isActive ? "#fa5757" : "#5267DF"} stroke-width="3" d="M1 1l8 8 8-8"/></svg></button>
      </div>
      <p className={isActive ? "open-answer answer" : "answer"}>{answer}</p>
    </>
  )
}

export default QuestionAnswer