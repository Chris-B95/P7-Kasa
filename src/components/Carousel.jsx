import '../styles/components/_Carousel.scss'
import leftarrow from '../assets/carouselleft.png'
import rightarrow from '../assets/carouselright.png'
import { useState } from 'react'

function Collapse(props) {
    const imgsArray = props.imgsArray
    const [currentIndex, setCurrentIndex] = useState(0)
    const previousClick = (event) => {
        currentIndex === 0
            ? setCurrentIndex(imgsArray.length - 1)
            : setCurrentIndex(currentIndex - 1)
    }
    const nextClick = (event) => {
        currentIndex === imgsArray.length - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1)
    }

    return (
        <div className="carousel-wrapper">
            <div className='carousel-arrowleft'><img src={leftarrow} alt="Fleche precedente" onClick={previousClick}/></div>
            {imgsArray.map((name, index) => (
                <div
                    key={`image${index}`}
                    className="carousel-item"
                    style={{ transform: `translate(-${currentIndex * 100}%)` }}
                >
                    <img src={name} alt="Carousel d'images" />
                </div>
            ))}
            <div className='carousel-arrowright'><img src={rightarrow} alt="Fleche suivante" onClick={nextClick}/></div>
        </div>
    )
}

export default Collapse
