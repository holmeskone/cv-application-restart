import Input from "./input"
import Display from "./display"
import { useState } from "react";
import './App.css';

function App() {
  const [firstName, setfirstName] = useState("John")
  // const [lastName, setlasttName] = useState("Doe")

  const handleInput = (event) =>{
    const input = event.target.value;
    console.log(input)
    // console.log(`This should be for ${id}`)
    return(
      setfirstName(input)
    )
  }
  return (
    <div className="container">
      <div>
        <input type="text" onChange={handleInput} />
        <input type="text" onChange={handleInput} />
      </div>
      <div>
        <Display
        text ={firstName}  />
      </div>
    </div>
  )
}

export default App
