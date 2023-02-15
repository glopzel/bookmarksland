import Header from './Header'
import heroIllustration from '../assets/images/illustration-hero.svg'
import blueBlurb from '../assets/images/blub.svg'

const Hero = () => {
  return (
      <div className="hero-wrap">
          <Header />
          <div className='container'>
            <div className="hero-layout">
              <section className='hero flex'>
                  <h1 className='text-res'>A Simple Bookmark Manager</h1>
                  <p className='text-res'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                  <div className="hero-btns flex">
                      <button className='btn primary-btn btn-shadow'>Get it on Chrome</button>
                      <button className='btn neutral-btn btn-shadow'>Get it on Firefox</button>
                  </div>
              </section>
              <div className='hero-img'>
                <img src={heroIllustration} alt="" />
                <img src={blueBlurb} alt="" id="hero-blub" className="background-blurb" />
              </div>
            </div>
          </div>
      </div>
  )
}

export default Hero