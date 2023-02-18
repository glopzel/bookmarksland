import logo from "../assets/images/logo-bookmark.svg"
import burgerIcon from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg"
import { useState } from "react"

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false)

  const toggleNav = () => {
    setNavExpanded(!navExpanded)
  }

  return (
    <header className="first-header">
        <div className="logo"><img src={logo} alt="" /></div>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded='false' onClick={() => toggleNav()}>
          <img id="burger-icon" className={navExpanded ? 'hidden' : 'nav-btn'} src={burgerIcon} alt="" />
          <img id="close-icon" className={navExpanded ? 'nav-btn' : 'hidden'} src={closeIcon} alt="" />
        </button>
        <nav className="first-nav">
            <ul role='list' data-visible="false" id="primary-navigation" className="primary-navigation">
                <li><a href="#features-container">Features</a></li>
                <li><a href="#download-section">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="" className='btn accent-btn'>Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header