import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import FicheLogement from '../pages/Fiche-Logement'
import PageNotFound from '../pages/404'
import APropos from '../pages/A-Propos'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} errorElement={<PageNotFound />}/>
            <Route path="/Fiche-Logement/:id" element={<FicheLogement />} errorElement={<PageNotFound />}/>
            <Route path="/A-Propos" element={<APropos />} errorElement={<PageNotFound />}/>
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default Router
