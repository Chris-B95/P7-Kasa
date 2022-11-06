import '../styles/components/_Tag.scss'

function Tag(props) {
    // const name= props.name
    const tagArray = props.tagArray

    return (
        // <div className="kasa-tag">
        //     <p>{name}</p>
        // </div>
        <>
            {tagArray.map((name, index) => (
                <div
                    key={`tag${index}`}
                    className={`kasa-tag`}
                >
                    <p>{name}</p>
                </div>
            ))}
        </>
    )
}

export default Tag
