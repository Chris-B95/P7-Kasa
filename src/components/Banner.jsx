import '../styles/components/_Banner.scss'
import bannermob from '../assets/banner_mob.png'
import banner from '../assets/banner.png'
import useMediaQuery from '../hooks/useMediaQuery'

function Banner(props) {
    const { matches: isDesktop } = useMediaQuery({
        mixOrMax: 'min',
        widthOrHeight: 'width',
        value: 1440,
    })

    return (
        <div className="kasa-banner">
            {!isDesktop && <img src={bannermob} alt="Bannière" />}
            {isDesktop && <img src={banner} alt="Bannière" />}
            <p>{props.children}</p>
        </div>
    )
}

export default Banner
