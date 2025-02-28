import { useState } from "react"
function Accordion ({title, value, children}){
    const [isActive, setActive] = useState(false);
    return(
        <div className="accordion">
            <div className="accordion-item">
            <div className="accordion-title" onClick={() => setActive(!isActive)}>
                <div className="accordion-title-content">
                    <h3>{title}</h3>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                </div>{isActive && <div className="accordion-content"><div className={value}>{children}</div></div>}
            </div>
        </div>
    )

}

export default Accordion