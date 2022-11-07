import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import Owner from '../../components/Owner'
import Renting from '../../components/Renting'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import useMediaQuery from '../../hooks/useMediaQuery'
import '../../styles/pages/_fiche.scss'

function FicheLogement() {
    const { id } = useParams()
    const { isLoading, data, error, item } = useFetch('/logements.json', id)
    const logsData = data
    const loading = isLoading
    const loadError = error
    const logsItem = item

    const { matches: isDesktop } = useMediaQuery({
        mixOrMax: 'min',
        widthOrHeight: 'width',
        value: 1440,
    })

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
                    <Carousel imgsArray={logsItem.pictures} />
                    <div className="header-wrapper">
                        <div>
                            <Renting
                                rentingTitle={logsItem.title}
                                rentingLocation={logsItem.location}
                            />
                            <div className="fiche-tags">
                                <Tag tagArray={logsItem.tags} />
                            </div>
                        </div>
                        <div className="ownerrating-block">
                            {isDesktop && (
                                <>
                                    <Owner
                                        ownerName={logsItem.host.name}
                                        ownerPic={logsItem.host.picture}
                                    />
                                    <div className="fiche-rating">
                                        <Rating ratingValue={logsItem.rating} />
                                    </div>
                                </>
                            )}
                            {!isDesktop && (
                                <>
                                    <div className="fiche-rating">
                                        <Rating ratingValue={logsItem.rating} />
                                    </div>
                                    <Owner
                                        ownerName={logsItem.host.name}
                                        ownerPic={logsItem.host.picture}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="collapse-group">
                        <Collapse
                            className="collapse-fiche"
                            texte="Description"
                        >
                            <p>{logsItem.description}</p>
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
