import logo from "../assets/images/logo-bookmark.svg"
import burgerIcon from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg"
import { useState, useRef, useEffect } from "react"

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  const toggleNav = (e) => {
    setNavExpanded(!navExpanded)
    e.currentTarget.setAttribute('aria-expanded', !navExpanded)
  }

  const ref = useRef(null);

  useEffect(() => {
    const primaryNav = ref.current;
 
    const navBtn = document.querySelector('.mobile-nav-toggle');
    const attr = navBtn.getAttribute('aria-expanded')

    primaryNav.setAttribute('data-visible', attr);

  }, [navExpanded]);

  return (
    <header className="first-header">
        <div className="logo"><img src={logo} alt="" /></div>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded='false' onClick={(e) => toggleNav(e)}>
          <img id="burger-icon" className={navExpanded ? 'hidden' : 'nav-btn'} src={burgerIcon} alt="" />
          <img id="close-icon" className={navExpanded ? 'nav-btn' : 'hidden'} src={closeIcon} alt="" />
        </button>
        <nav className="first-nav">
            <ul ref={ref} role='list' data-visible="false" id="primary-navigation" className="primary-navigation">
                <li><a href="#features-container">Features</a></li>
                <li><a href="#download-section">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#" className='btn accent-btn'>Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header