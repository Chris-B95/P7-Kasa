import "../styles/layout/_Header.scss"
import logo from "../assets/LOGO.png"
import {Link} from "react-router-dom"

function Header() {
    return <div className="kasa-header">
        <img className="kasa-header__logo" src={logo} alt="Logo de Kasa"/>
        <nav className="kasa-header__nav">
            <Link to="/">ACCUEIL</Link>
            <Link to="/A-Propos">A PROPOS</Link>
        </nav>
    </div>

}

export default Header