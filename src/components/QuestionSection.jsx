import SectionStart from './SectionStart'
import QuestionAnswer from './QuestionAnswer'

const QuestionSection = () => {
  return (
    <section className="container">
        <SectionStart sectionHeading='Frequently Asked Questions' desc='Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.'/>

        <div className="qs">
            <QuestionAnswer question='What is Bookmark?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'/>
            <QuestionAnswer question='How can I request a new browser?' answer='Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'/>
            <QuestionAnswer question='Is there a mobile app?' answer='Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'/>
            <QuestionAnswer question='What about other Chromium browsers?' answer='Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'/>
        </div>

        <button className='btn primary-btn'>
            More Info
        </button>
    </section>
  )
}

export default QuestionSection