import logo from "../assets/images/logo-light.svg"
import facebookIcon from "../assets/images/icon-facebook.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"

const Footer = () => {
  return (
    <footer className='footer'>
        <div id="footer-nav" className="container">
            <div className="footer-logo">
                <img src={logo} alt="logo" />
            </div>
        <ul role='list' className="second-nav">
            <li><a href="#features-container">FEATURES</a></li>
            <li><a href="#download-section">PRICING</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="social-media flex">
            <img src={facebookIcon} alt="facebook" />
            <img src={twitterIcon} alt="twitter" />
        </div>
        </div>
    </footer>
  )
}

export default Footer