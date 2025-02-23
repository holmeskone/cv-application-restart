import Accordion from "./components/Accordion";
import InputFirstName from "./components/FirstName"
import InputLastName from "./components/LastName";
import InputEmail from "./components/Email";
import InputPhone from "./components/Phone";
import InputNationality from "./components/Nationality";
import DynamicInputField from "./components/Languages";
import Display from "./display"
import DisplayDynamic from "./components/displayDynamicInputs";
import { useState } from "react";
import './App.css';

function App() {
  const [firstName, setfirstName] = useState("John")
  const [lastName, setlastName] = useState("Doe")
  const [email, setEmail] = useState("example@example.com")
  const [phone, setPhone] = useState("+123456789")
  const [nationality, setNationality] = useState("EU Citizen")
  const[languages, setLanguages] = useState([{language:"English"}]);

  return (
    <div className="container">
      <div id="input-section">
        <div id="personal-information">
          <Accordion title="Personal Information" >
          <InputFirstName id="first-name" label = "First Name" value ={firstName} setValue={setfirstName}/>
          <InputLastName id="last-name" label = "Last Name" value ={lastName} setValue={setlastName} />
          <InputEmail id="email" label = "Email" value ={email} setValue={setEmail} />
          <InputPhone id="phone" label = "Phone" value ={phone} setValue={setPhone} />
          <InputNationality id="nationality" label = "Nationality" value ={nationality} setValue={setNationality} />
          </Accordion>
        </div>
        <div id="language-information">
        <Accordion title="Languages" >
          <DynamicInputField inputs={languages} setInputs={setLanguages} />
        </Accordion>
        </div>
      </div>
      <div id="output-section">
        <Display text={firstName} />
        <Display text={lastName}/>
        <Display text={email} />
        <Display text={phone}/>
        <Display text={nationality}/>
        <DisplayDynamic text={languages}/>
      </div>
    </div>
  )
}

export default App
