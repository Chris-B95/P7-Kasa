import '../styles/components/_Card.scss'

function Card(props) {
    const title = props.title
    const img = props.cover
    return (
        <div className="kasa-card">
            <img className="kasa-card__img" src={img} alt=""></img>
            <p>{title}</p>
        </div>
    )
}

export default Card
