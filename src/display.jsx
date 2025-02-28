function Display (prop) {
    return(
        <div >
            <p className={prop.className} id={prop.id}>{prop.text}</p>
        </div>
    )
}

export default Display