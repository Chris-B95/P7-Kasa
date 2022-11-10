import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import bannermob from '../../assets/banner_mob.png'
import banner from '../../assets/banner.png'
import useMediaQuery from '../../hooks/useMediaQuery'
import '../../styles/pages/_home.scss'

function Home() {

        const { matches: isDesktop } = useMediaQuery({
        mixOrMax: 'min',
        widthOrHeight: 'width',
        value: 1440,
    })

    return (
        <>
            {!isDesktop && <Banner src={bannermob} className="test">Chez vous,<br></br> partout et ailleurs</Banner>}
            {isDesktop && <Banner src={banner}>Chez vous, partout et ailleurs</Banner>}
            <Cards />
        </>
    )
}

export default Home
