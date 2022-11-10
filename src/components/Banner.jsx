import '../styles/components/_Banner.scss'

function Banner(props) {
 
    const bannerImg = props.src
    let className = ""

    if (props.className !== undefined) {
        className = props.className
    } else {
        className = 'kasa-banner'
    }

    return (
        <div className={className}>
            <img src={bannerImg} alt="Bannière" />
            <p>{props.children}</p>
        </div>
    )
}

export default Banner
