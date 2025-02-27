function DisplayDynamicSkills (prop) {

    return(
        <div id="skills">
            {prop.text.map((item,index) => {
                return <div className="skill" key={index}>
                    <p>{item.skill}</p>
                </div>            
        })}
        </div>)
    }
    
    export default DisplayDynamicSkills