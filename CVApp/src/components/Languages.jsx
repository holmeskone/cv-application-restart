function DynamicInputField(prop) {

    const handleAddInput = () => {
        prop.setInputs([...prop.inputs, {language:""}]);
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
            <div className="input-language" key={index}>
                <input 
                    type="text"
                    name="language"
                    value={item.language}
                    onChange={(event) => handleChange(event, index)}
                />
                {prop.inputs.length > 1 && (
                <button className="delete" onClick={() => handleDeleteInput(index)}>Delete</button>
                )}
                {index === prop.inputs.length - 1 &&(
                    <button onClick={() => handleAddInput(index)}>Add Language</button>
                )}
            </div>
        ))}
    </div>
)
}

export default DynamicInputField