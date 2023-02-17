import SectionStart from './SectionStart'
import QuestionAnswer from './QuestionAnswer'

const FAQ = [
  {q: 'What is Bookmark?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'}, {q: 'How can I request a new browser?', a: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'}, {q: 'Is there a mobile app?', a: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'}, {q: 'What about other Chromium browsers?', a: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'}
]

const QuestionSection = () => {
  return (
    <section className="container">
        <SectionStart sectionHeading='Frequently Asked Questions' desc='Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.'/>

        <div className="qs">
          {FAQ.map((element, idx) => {
            return (
              <QuestionAnswer question={element.q} answer={element.a} key={idx}/>
            )
          })}
        </div>

          <div className="q-btn-container">
            <button id='q-btn' className='btn primary-btn'>
              More Info
            </button>
          </div>
    </section>
  )
}

export default QuestionSection