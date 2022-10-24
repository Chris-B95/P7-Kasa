import { Link } from 'react-router-dom'
import "../../styles/pages/_404.scss"

function PageNotFound() {
    return (<div className='kasa-404'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <nav className='kasa-404__nav'><Link to="/">Retourner sur la page d'accueil</Link></nav>
    </div>)
}

export default PageNotFound