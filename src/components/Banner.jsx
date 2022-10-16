import '../styles/components/_Banner.scss'
// import bannermob from '../assets/banner_mob.png'
import banner from '../assets/banner.png'

function Banner() {
    return (
        <div className="kasa-banner">
            <img src={banner} alt="Bannière" />
        </div>
    )
}

export default Banner
