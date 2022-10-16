import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FicheLogement from '../pages/Fiche-Logement'
import PageNotFound from '../pages/404'
import APropos from '../pages/A-Propos'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Fiche-Logement" element={<FicheLogement />} />
            <Route path="/A-Propos" element={<APropos />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Router
