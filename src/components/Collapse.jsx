import { useState } from 'react'
import '../styles/components/_Collapse.scss'

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false)
    let className = ""
    const collapseText = props.texte
    const handleClick = (event) => {
        setIsOpen(isOpen ? false : true)
    }
    if (props.className !== undefined) {
        className=props.className;
      } else {
        className="collapse";
      }

    return (
        <div className={className}>
            {!isOpen ? (
                <div className={`${className}__wrapper`}>
                    <div className={`${className}__header`}>
                        <h2>{collapseText}</h2>
                        <button onClick={handleClick}>
                            Appuyez pour ouvrir
                        </button>
                    </div>
                </div>
            ) : (
                <div className={`${className}__wrapper`}>
                    <div className={`${className}__header`}>
                        <h2>{collapseText}</h2>
                        <button onClick={handleClick}>
                            Appuyez pour fermer
                        </button>
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
