import '../styles/layout/_Footer.scss'
import logo from '../assets/LOGO-footer.png'

function Footer() {

    return (
        <div className='kasa-footer'><div className='kasa-footer__logo'><img src={logo} alt="Logo de Kasa" /></div>
        <p className='kasa-footer__texte'>&copy; 2020 Kasa. All rights reserved</p></div>
    )
}

export default Footer