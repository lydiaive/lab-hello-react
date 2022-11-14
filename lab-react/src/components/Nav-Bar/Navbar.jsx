import './Navbar.css'
import logo from '../../images/ironhack-logo-xs.png'
import menuebar from '../../images/menu-top-xs.png'


function Navbar() {
    return (

        <nav className="nav-bar">
            <img src={logo} alt="logo"></img>
            <img src={menuebar} alt="menue"></img>
        </nav>
    )
}

export default Navbar;