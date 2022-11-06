import '../styles/components/_Renting.scss'

function Renting(props) {
    const rentingTitle = props.rentingTitle
    const rentingLocation = props.rentingLocation

    return (
        <>
            <div className="renting-title">
                <p>{rentingTitle}</p>
            </div>
            <div className="renting-location">
                <p>{rentingLocation}</p>
            </div>
        </>
    )
}

export default Renting
