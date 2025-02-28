function DynamicInterests(prop) {
    const handleAddInput = () => {
        prop.setInputs([...prop.inputs, {interest:""}]);
    };

    const handleChange = (event,index) =>{
        let {name, value} = event.target;
        let onChangeValue = [...prop.inputs];
        onChangeValue[index][name] = value;
        prop.setInputs(onChangeValue)
    }

    const handleDeleteInput = (index) => {
        const newArray = [...prop.inputs];
        newArray.splice(index, 1);
        prop.setInputs(newArray);
      };
return(
    <div className="dynamic-interests">
        {prop.inputs.map((item, index) => (
            <div className="input-skill" key={index}>
                <input 
                    type="text"
                    name="interest"
                    value={item.interest}
                    onChange={(event) => handleChange(event, index)}
                    id="interest"
                />
                {prop.inputs.length > 1 && (
                <button className="delete" onClick={() => handleDeleteInput(index)}>Delete Interest</button>
                )}
                {index === prop.inputs.length - 1 &&(
                    <button onClick={() => handleAddInput(index)}>Add Interest</button>
                )}
            </div>
        ))}
    </div>
)
}

export default DynamicInterests