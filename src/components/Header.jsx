import logo from "../assets/images/logo-bookmark.svg"
import logoLight from "../assets/images/logo-light.svg"
import burgerIcon from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg"
import { useState, useRef, useEffect } from "react"

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  const toggleNav = (e) => {
    
    if (e) {
      e.currentTarget.setAttribute('aria-expanded', !navExpanded)
    }
    setNavExpanded(!navExpanded)
  }

  const ref = useRef(null);

  useEffect(() => {
    const primaryNav = ref.current;
 
    if (navExpanded) {
      document.body.classList.add('hide-overflow');
    } else {
      document.body.classList.remove('hide-overflow');
    }
  
    primaryNav.setAttribute('data-visible', navExpanded);

  }, [navExpanded]);

  return (
    <header className="first-header">
        <div className="logo"><img src={navExpanded ? logoLight : logo} alt="" /></div>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded='false' onClick={(e) => toggleNav(e)}>
          <img id="burger-icon" className={navExpanded ? 'hidden' : 'nav-btn'} src={burgerIcon} alt="" />
          <img id="close-icon" className={navExpanded ? 'nav-btn' : 'hidden'} src={closeIcon} alt="" />
        </button>
        <nav className="first-nav">
            <ul ref={ref} role='list' data-visible="false" id="primary-navigation" className="primary-navigation">
                <li><a className="nav-btn" href="#features-container" onClick={() => navExpanded ? toggleNav() : ''}>Features</a></li>
                <li><a className="nav-btn" href="#download-section" onClick={() => navExpanded ? toggleNav() : ''}>Pricing</a></li>
                <li><a className="nav-btn" href="#contact" onClick={() => navExpanded ? toggleNav() : ''}>Contact</a></li>
                <li><a id="#login" href="#" className='btn accent-btn login-nav-btn'>Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header