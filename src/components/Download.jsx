import BrowserCards from './BrowserCards'
import SectionStart from './SectionStart'
import chrome from '../assets/images/logo-chrome.svg'
import firefox from '../assets/images/logo-firefox.svg'
import opera from '../assets/images/logo-opera.svg'

const Download = () => {
  return (
    <section className='container grid-section'>
        <SectionStart sectionHeading='Download the extension' desc='We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.'/>
    <div className="cards-container">
        <BrowserCards cardId={'start'} imgSrc={chrome} browser='Chrome' version='62'/>
        <BrowserCards cardId={'center'} imgSrc={firefox} browser='Firefox' version='55'/>
        <BrowserCards cardId={'end'} imgSrc={opera} browser='Opera' version='46'/>
    </div>
    </section>
  )
}

export default Download