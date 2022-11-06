import greystar from '../assets/greystar.png'
import redstar from '../assets/redstar.png'
import '../styles/components/_Rating.scss'

function Rating(props) {
    const ratingValue = props.ratingValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className="starwrap">
            {range.map((rangeElem) =>
                ratingValue >= rangeElem ? (
                    <span className="starwrap__item" key={'Star' + rangeElem.toString()}>
                        <img src={redstar} alt="Etoile rouge" />
                    </span>
                ) : (
                    <span className="starwrap__item" key={'Star' + rangeElem.toString()}>
                        <img src={greystar} alt="Etoile grise" />
                    </span>
                )
            )}
        </div>
    )
}

export default Rating
