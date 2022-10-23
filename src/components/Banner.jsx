import '../styles/components/_Banner.scss'

function Banner(props) {
 
    const bannerImg = props.src

    return (
        <div className="kasa-banner">
            <img src={bannerImg} alt="Bannière" />
            <p>{props.children}</p>
        </div>
    )
}

export default Banner
