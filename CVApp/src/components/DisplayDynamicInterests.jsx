function DisplayDynamicInterests (prop) {

    return(
        <div id="interests">
            {prop.text.map((item,index) => {
                return <div className="skill" key={index}>
                    <p>{item.interest}</p>
                </div>            
        })}
        </div>)
    }
    
    export default DisplayDynamicInterests