import '../styles/components/_Card.scss'
// import defaultCard from '../assets/default_card.png'
// import defaultCardMob from '../assets/default_card_mob.png'
// import useMediaQuery from '../hooks/useMediaQuery'

function Card(props) {
    // const { matches: isDesktop } = useMediaQuery({
    //     mixOrMax: 'min',
    //     widthOrHeight: 'width',
    //     value: 1440,
    // })
    const title = props.title
    const img = props.cover
    return (
        <div className="kasa-card">
            {/* {isDesktop && <img className="kasa-card__img" src={defaultCard} alt=""></img>}
            {!isDesktop && <img className="kasa-card__img" src={defaultCardMob} alt=""></img>} */}
            <img className="kasa-card__img" src={img} alt=""></img>
            <p>{title}</p>
        </div>
    )
}

export default Card
