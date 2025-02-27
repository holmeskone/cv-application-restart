function DisplayDynamicLanguage (prop) {

return(
    <div id="languages">
        {prop.text.map((item,index) => {
            return <div className="languages" key={index}>
                <p>{item.language}</p>
            </div>            
    })}
    </div>)
}

export default DisplayDynamicLanguage