const QuestionAnswer = ({question, answer}) => {
  return (
    <div>
      <div className="link-icon">
        <a href="">{question}</a>
        <img src='' alt="" />
      </div>
        {/* <h3>{question}</h3>
        <button>
            <img src="" alt="down arrow" />
        </button> */}
        <p>{answer}</p>
    </div>
  )
}

export default QuestionAnswer