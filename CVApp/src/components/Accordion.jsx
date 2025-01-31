import { useState } from "react"
function Accordion ({title, children}){
    const [isActive, setActive] = useState(false);
    return(
        <div className="accordion">
            <div className="accordion-item">
            <div className="accordion-title" onClick={() => setActive(!isActive)}>
                <div>
                    <h3>{title}</h3>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                </div>{isActive && <div className="accordion-content">{children}</div>}
            </div>
        </div>
    )

}

export default Accordion