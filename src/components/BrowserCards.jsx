import dots from '../assets/images/bg-dots.svg'

const BrowserCards = ({imgSrc, browser, version, cardId}) => {
  return (
    <div className='card' id={cardId}>
        <img className='card-img' src={imgSrc} alt="" />
        <h3 className='card-title'>Add to {browser}</h3>
        <p className='card-p'>Mimnimum version {version}</p>
        <div>
          <img id='card-dots' src={dots} alt="" />
            <button className='btn primary-btn'>
                Add &amp; Install Extension 
            </button>
        </div>
    </div>
  )
}

export default BrowserCards