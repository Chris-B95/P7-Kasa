import '../styles/layout/_Header.scss'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'
import useMediaQuery from '../hooks/useMediaQuery'

function Header() {
    const { matches: isDesktop } = useMediaQuery({
        mixOrMax: 'min',
        widthOrHeight: 'width',
        value: 1440,
    })

    return (
        <div className="kasa-header">
            <img className="kasa-header__logo" src={logo} alt="Logo de Kasa" />
            {isDesktop && (
                <nav className="kasa-header__nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/A-Propos">A propos</Link>
                </nav>
            )}
            {!isDesktop && (
                <nav className="kasa-header__nav">
                    <Link to="/">ACCUEIL</Link>
                    <Link to="/A-Propos">A PROPOS</Link>
                </nav>
            )}
        </div>
    )
}

export default Header
