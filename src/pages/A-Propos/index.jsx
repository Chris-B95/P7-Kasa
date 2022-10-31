import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import bannermob from '../../assets/banner_ap_mob.png'
import banner from '../../assets/banner_ap.png'
import useMediaQuery from '../../hooks/useMediaQuery'

function APropos() {
    const { matches: isDesktop } = useMediaQuery({
        mixOrMax: 'min',
        widthOrHeight: 'width',
        value: 1440,
    })

    const txtFiabilite = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos
    sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`
    const txtRespect = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement 
    discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
    const txtService = `Nos équipes se tiennent à votre disposition pour vous fournir une expérience 
    parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
    const txtSecurite = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les 
    voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant 
    une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards 
    sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`

    return (
        <>
            {!isDesktop && (
                <>
                    <Banner src={bannermob} />
                    <Collapse texte="Fiabilité"><p>{txtFiabilite}</p></Collapse>
                    <Collapse texte="Respect"><p>{txtRespect}</p></Collapse>
                    <Collapse texte="Service"><p>{txtService}</p></Collapse>
                    <Collapse texte="Sécurité"><p>{txtSecurite}</p></Collapse>
                </>
            )}
            {isDesktop && (
                <>
                    <Banner src={banner} />
                    <Collapse texte="Fiabilité"><p>{txtFiabilite}</p></Collapse>
                    <Collapse texte="Respect"><p>{txtRespect}</p></Collapse>
                    <Collapse texte="Service"><p>{txtService}</p></Collapse>
                    <Collapse texte="Sécurité"><p>{txtSecurite}</p></Collapse>
                </>
            )}
        </>
    )
}

export default APropos
