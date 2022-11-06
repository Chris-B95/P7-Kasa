import '../styles/components/_Owner.scss'

function Owner(props) {
    const ownerName = props.ownerName
    const [first, last] = ownerName.split(' ');
    const ownerPic = props.ownerPic

    return (
        <div className="owner-profile">
        <div className="owner-profile__name">
            <p>{first}</p>
            <p>{last}</p>
        </div>
        <div className="owner-profile__pic">
            <img
                src={ownerPic}
                alt="Propriétaire"
            />
        </div>
    </div>
    )
}

export default Owner