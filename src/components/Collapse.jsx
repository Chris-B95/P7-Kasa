import { useState } from 'react'
import '../styles/components/_Collapse.scss'
import arrow from '../assets/arrow.png'

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isArrowDown, setArrowDown] = useState(true);
    let className = ''
    const collapseText = props.texte
    const handleClick = (event) => {
        setIsOpen(isOpen ? false : true)
        setArrowDown(isArrowDown ? false : true);
    }
    
    
    if (props.className !== undefined) {
        className = props.className
    } else {
        className = 'collapse'
    }

    return (
        <div className={className}>
            {!isOpen ? (
                <div className={`${className}__wrapper`}>
                    <div className={`${className}__header`}>
                        <h2>{collapseText}</h2>
                        <div
                            // className={`${className}__header__arrow`}
                            className={`${className}__header__arrow ${isArrowDown ? `arrowdown` : `arrowup`}`}
                            onClick={handleClick}
                        >
                            <img src={arrow} alt="Bouton d'ouverture" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`${className}__wrapper`}>
                    <div className={`${className}__header`}>
                        <h2>{collapseText}</h2>
                        <div
                            // className={`${className}__header__arrow`}
                            className={`${className}__header__arrow ${isArrowDown ? `arrowdown` : `arrowup`}`}
                            onClick={handleClick}
                        >
                            <img src={arrow} alt="Bouton de fermeture" />
                        </div>
                    </div>
                    <div className={`${className}__opened`}>
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Collapse
