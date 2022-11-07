import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Card from './Card'
import '../styles/components/_Cards.scss'

function Cards() {
    const { isLoading, data, error } = useFetch('/logements.json', "all")
    const logsData = data
    const loading = isLoading
    const loadError = error
    console.log(logsData)
    console.log(loading)
    console.log(loadError)

    return (
        <div className="kasa-cards-container">
            {loading ? (
                <span>loading</span>
            ) : (
                <>
                    {logsData.map(({ id, title, cover }) => (
                        <Link key={id} to={`/Fiche-Logement/${id}`}><Card  title={title} cover={cover}></Card></Link>
                    ))}
                </>
            )}
        </div>
    )
}

export default Cards
