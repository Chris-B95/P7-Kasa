import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetchOneItem'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import '../../styles/pages/_fiche.scss'

function FicheLogement() {
    const { id } = useParams()
    const { isLoading, data, error, item } = useFetch('/logements.json', id)
    const logsData = data
    const loading = isLoading
    const loadError = error
    const logsItem = item

    console.log(logsData)
    console.log(logsItem)
    console.log(loading)
    console.log(loadError)

    return (
        <div>
            {loading ? (
                <span>loading</span>
            ) : (
                <>
                    {/* <div className="fiche-img">
                        <img src={logsItem.pictures[0]} alt="Logement" />
                    </div> */}
                    <Carousel imgsArray={logsItem.pictures} />
                    <div className="wrapper-gauchedroite">
                        <div className="grp-gauche">
                            <div className="fiche-title">{logsItem.title}</div>
                            <div className="fiche-location">
                                {logsItem.location}
                            </div>
                            <div className="fiche-tags">
                                {logsItem.tags.map((name) => (
                                    <div className="fiche-tags__element">
                                        <Tag key={name} name={name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grp-droite">
                            <div className="fiche-loueur">
                                <div className="fiche-loueur__name">
                                    {logsItem.host.name}
                                </div>
                                <div className="fiche-loueur__pic">
                                    <img
                                        src={logsItem.host.picture}
                                        alt="Logement"
                                    />
                                </div>
                            </div>

                            <div className="fiche-rating">
                                <Rating ratingValue={logsItem.rating} />
                            </div>
                        </div>
                    </div>
                    <div className="collapse-group">
                        <Collapse
                            className="collapse-fiche"
                            texte="Description"
                        >
                            {' '}
                            <p>{logsItem.description}</p>{' '}
                        </Collapse>
                        <Collapse
                            className="collapse-fichequip"
                            texte="Equipements"
                        >
                            <div className="equiplist">
                                {logsItem.equipments.map((equipName) => (
                                    <p key={equipName}>{equipName}</p>
                                ))}
                            </div>
                        </Collapse>
                    </div>
                </>
            )}
        </div>
    )
}

export default FicheLogement
