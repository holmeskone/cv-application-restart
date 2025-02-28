function ResponsabilitiesField(prop) {

    const handleAddInput = () => {
        prop.setInputs([...prop.inputs, {Responsability:""}]);
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
    <div className="dynamic-inputs">
        {prop.inputs.map((item, index) => (
            <div className="input-section" key={index}>
                <textarea 
                    type="text"
                    name="responsability"
                    value={item.language}
                    onChange={(event) => handleChange(event, index)}
                />
                {prop.inputs.length > 1 && (
                <button onClick={() => handleDeleteInput(index)}>Delete</button>
                )}
                {index === prop.inputs.length - 1 &&(
                    <button onClick={() => handleAddInput(index)}>Add</button>
                )}
            </div>
        ))}
    </div>
)
}

export default ResponsabilitiesField