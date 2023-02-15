import logo from "../assets/images/logo-bookmark.svg"

const Header = () => {
  return (
    <header>
        <div className="logo"><img src={logo} alt="" /></div>
        <nav>
            <ul role='list'>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="" class='btn accent-btn'>Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header