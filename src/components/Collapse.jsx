import { useState } from 'react'
import '../styles/components/_Collapse.scss'

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)
    const collapseText = props.texte
    const openedText = props.description
    const handleClick = (event) => {
        setIsOpen(isOpen ? false : true)
    }

    return (
        <div>
            {!isOpen ? (
                <div className="collapse-wrapper">
                    <div className="collapse-header">
                        <h2>{collapseText}</h2>
                        <button onClick={handleClick}>
                            Appuyez pour ouvrir
                        </button>
                    </div>
                </div>
            ) : (
                <div className="collapse-wrapper">
                    <div className="collapse-header">
                        <h2>{collapseText}</h2>
                        <button onClick={handleClick}>
                            Appuyez pour fermer
                        </button>
                    </div>
                    <div className="collapse-opened">
                        <h3>{openedText}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Collapse
