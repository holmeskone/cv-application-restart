const InputEmail = (props) => {
    return (
      <div id={props.id}>
      <label htmlFor="">{props.label} </label>
     <input  onChange={(event) => props.setValue(event.target.value)}></input>
     </div>
   )
  }

export default InputEmail
