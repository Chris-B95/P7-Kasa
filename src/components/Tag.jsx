import '../styles/components/_Tag.scss'

function Tag(props) {
    const tagArray = props.tagArray

    return (
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
