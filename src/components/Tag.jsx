import '../styles/components/_Tag.scss'

function Tag(props) {
    const name= props.name
    return (
        <div className="kasa-tag">
            <p>{name}</p>
        </div>
    )
}

export default Tag