function DisplayDynamicResponsability (prop) {

return(
    <div className={prop.className} id={prop.id}>
        {prop.text.map((item,index) => {
            return <div className="responsability" key={index}>
                <p>{item.responsability}</p>
            </div>            
    })}
    </div>)
}
    
export default DisplayDynamicResponsability