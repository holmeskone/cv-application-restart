function DisplayDateEducation (prop) {
    let month = prop.date.toLocaleString('default', { month: 'long' });
    let year = prop.date.getFullYear()
    return(
        <div>
        <p>{month} {year}</p>
      </div>
    )
}

export default DisplayDateEducation