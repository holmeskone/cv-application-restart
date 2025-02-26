import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Accordion from "./components/Accordion";
import InputFirstName from "./components/FirstName"
import InputLastName from "./components/LastName";
import InputEmail from "./components/Email";
import InputPhone from "./components/Phone";
import InputNationality from "./components/Nationality";
import DynamicInputField from "./components/Languages";
import Display from "./display"
import DisplayDynamicLanguage from "./components/displayDynamicInputs";
import DisplayDate from "./displayDate";
import DisplayDynamicResponsability from "./components/displayDynamicResponsability";
import ExperiencesField from './components/Experiences';


function App() {
  const [firstName, setfirstName] = useState("John")
  const [lastName, setlastName] = useState("Doe")
  const [email, setEmail] = useState("example@example.com")
  const [phone, setPhone] = useState("+123456789")
  const [nationality, setNationality] = useState("EU Citizen")
  const [languages, setLanguages] = useState([{language:"English"}]);
  const [company, setCompany] = useState("ACME inc.")
  const [position, setPosition] = useState("Software Engineer")
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [responsabilities, setResponsabilities] = useState([{responsability:"Solve Problems"}])
  const [id, setId] = useState("")
    // State to store all experience sections
    const [experiences, setExperiences] = useState([{
      company: "ACME inc.",
      position: "Software Engineer",
      startDate: new Date(),
      endDate: new Date(),
      responsabilities: [{ text: "Solve Problems" }],
      id: crypto.randomUUID()
    }]);

  console.log({experiences})
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
        <div id="experience-information">
          <Accordion title="Experience">
          <ExperiencesField experiences = {experiences} setExperiences ={setExperiences} company = {company} setCompany = {setCompany} position={position} setPosition ={setPosition} startDate={startDate} setStartDate={setStartDate} endDate ={endDate} setEndDate={setEndDate} responsabilities = {responsabilities} setResponsabilities = {setResponsabilities} id = {id} setId = {setId}>
          </ExperiencesField>
          </Accordion>
        </div>
      </div>
      <div id="output-section">
        <Display text={firstName} />
        <Display text={lastName}/>
        <Display text={email} />
        <Display text={phone}/>
        <Display text={nationality}/>
        <DisplayDynamicLanguage text={languages}/>
        {experiences.map((experience)=> (
        <>
        <Display text={experience.company} id={`company-display-${experience.id}`}/>
        <Display text={experience.position} id={`position-display-${experience.id}`}/>
        <DisplayDate date={experience.startDate} id={`start-display-${experience.id}`} />
        <DisplayDate date={experience.endDate} id={`end-display-${experience.id}`} />
        <DisplayDynamicResponsability text={experience.responsabilities} id={`responsability-display-${experience.id}`}/>
        </>
        ))}

      </div>
    </div>
  )
}

export default App
