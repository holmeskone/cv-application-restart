function DynamicSkills(prop) {
    const handleAddInput = () => {
        prop.setInputs([...prop.inputs, {skill:""}]);
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
    <div className="dynamic-skills">
        {prop.inputs.map((item, index) => (
            <div className="input-skill" key={index}>
                <input 
                    type="text"
                    name="skill"
                    value={item.skill}
                    onChange={(event) => handleChange(event, index)}
                />
                {prop.inputs.length > 1 && (
                <button className="delete" onClick={() => handleDeleteInput(index)}>Delete Skill</button>
                )}
                {index === prop.inputs.length - 1 &&(
                    <button onClick={() => handleAddInput(index)}>Add Skill</button>
                )}
            </div>
        ))}
    </div>
)
}

export default DynamicSkills