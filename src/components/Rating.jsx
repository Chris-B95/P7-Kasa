import greystar from '../assets/greystar.png'
import redstar from '../assets/redstar.png'
import '../styles/components/_Rating.scss'

function Rating(props) {
    const ratingValue = props.ratingValue

    const range = [1, 2, 3, 4, 5]

    return (
        <div className="starwrap">
            {range.map((rangeElem, index) =>
                ratingValue >= rangeElem ? (
                    <span className="starwrap__item" key={`redstar${index}`}>
                        <img src={redstar} alt="Etoile rouge" />
                    </span>
                ) : (
                    <span className="starwrap__item" key={`greystar${index}`}>
                        <img src={greystar} alt="Etoile grise" />
                    </span>
                )
            )}
        </div>
    )
}

export default Rating
