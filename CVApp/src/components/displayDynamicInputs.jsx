function DisplayDynamic (prop) {

return(
    <div id="tester">
        {prop.text.map((item,index) => {
            return <div className="language" key={index}>
                <p>{item.language}</p>
            </div>            
    })}
    </div>)
}

export default DisplayDynamic