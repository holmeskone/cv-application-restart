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
import DisplayDateExperience from "./displayDateExperience";
import DisplayDynamicResponsability from "./components/displayDynamicResponsability";
import DisplayDateEducation from "./DisplayDateEducation";
import ExperiencesField from './components/Experiences';
import EducationField from './components/Education';
import DynamicSkills from './components/Skills';
import DisplayDynamicSkills from './components/displayDynamicSkills';
import DisplayDynamicInterests from './components/DisplayDynamicInterests';
import DynamicInterests from './components/Interests';


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
  const [id, setId] = useState("");
  const [skills, setSkills] = useState([{skill:"Sales"}]);
  const [interests, setInterests] = useState([{interest:"Entrepreneurship"}]);
  // State to store all experience sections
  const [experiences, setExperiences] = useState([{
      company: "ACME inc.",
      position: "Software Engineer",
      startDate: new Date(),
      endDate: new Date(),
      responsabilities: [{ text: "Solve Problems" }],
      id: crypto.randomUUID()
  }]);
// State to store all education sections
const [university, setUniversity] = useState("My University");
const [degree, setDegree] = useState("Computer Science");
const [universityStartDate, setUniversityStartDate] = useState(new Date());
const [universityEndDate, setUniversityEndDate] = useState(new Date());
const [universityId, setUniversityId] = useState("");
const [educations, setEducations] = useState([{
    university: "My University",
    degree: "Computer Science",
    universityStartDate: new Date(),
    universityEndDate: new Date(),
    universityId: crypto.randomUUID()
}]);

  return (
    <div className="container">
      <div id="input-section">
        <div id="personal-information">
          <Accordion title="Personal Information" value="personal-information">
          <InputFirstName className="personal-section" id="first-name" label = "First Name" value ={firstName} setValue={setfirstName}/>
          <InputLastName className="personal-section" id="last-name" label = "Last Name" value ={lastName} setValue={setlastName} />
          <InputEmail className="personal-section" id="email" label = "Email" value ={email} setValue={setEmail} />
          <InputPhone className="personal-section" id="phone" label = "Phone" value ={phone} setValue={setPhone} />
          <InputNationality className="personal-section" id="nationality" label = "Nationality" value ={nationality} setValue={setNationality} />
          </Accordion>
        </div>
        <div id="language-information">
        <Accordion title="Languages" >
          <DynamicInputField inputs={languages} setInputs={setLanguages} />
        </Accordion>
        </div>
        <div id="experience-information">
          <Accordion title="Experience" value="experience-information">
          <ExperiencesField experiences = {experiences} setExperiences ={setExperiences} company = {company} setCompany = {setCompany} position={position} setPosition ={setPosition} startDate={startDate} setStartDate={setStartDate} endDate ={endDate} setEndDate={setEndDate} responsabilities = {responsabilities} setResponsabilities = {setResponsabilities} id = {id} setId = {setId}>
          </ExperiencesField>
          </Accordion>
        </div>
        <div id="education-information">
          <Accordion title="Education">
          <EducationField educations = {educations} setEducations ={setEducations} university={university} setUniversity={setUniversity} degree = {degree} setDegree={setDegree} universityStartDate={universityStartDate}  setUniversityStartDate={setUniversityStartDate} educationEndDate ={universityEndDate} setUniveristyEndDate={setUniversityEndDate} universityId = {universityId} setUniversityId = {setUniversityId}>
          </EducationField>
          </Accordion>
        </div>
        <div id="skills-information">
        <Accordion title="Skills" >
          <DynamicSkills inputs={skills} setInputs={setSkills} />
        </Accordion>
        </div>
        <div id="interests-information">
        <Accordion title="Interests" >
          <DynamicInterests inputs={interests} setInputs={setInterests} />
        </Accordion>
        </div>
      </div>
      <div id="output-section">
        <div className='personal-information'>
          <div className='personal-name'>
          <Display className='personal-firstName' text={firstName} />
          <Display className='personal-lastName' text={lastName}/>
          </div>
          <div className='personal-info'>
          <Display className='personal-email' text={email} />
          <Display className='personal-phone' text={phone}/>
          <Display className='personal-nationality' text={nationality}/>
          </div>
        </div>
        {/* <h5 className='section'>Languages</h5> */}
        <div className='languages-information'>
        <DisplayDynamicLanguage text={languages}/>
        </div>
        <h5 className='section'>Experience</h5>
        {experiences.map((experience, index)=> (
        <div className='experiences-information' key={index}>
        <Display text={experience.company} id={`company-display-${experience.id}`} className="company"/>
        <Display text={experience.position} id={`position-display-${experience.id}`} className="position"/>
        <DisplayDateExperience date={experience.startDate} id={`start-display-${experience.id}`} className="start-date"/>
        <DisplayDateExperience date={experience.endDate} id={`end-display-${experience.id}`} className="end-date"/>
        <DisplayDynamicResponsability text={experience.responsabilities} id={`responsability-display-${experience.id}`} className="responsabilities"/>
        </div>
        ))}
        <h5 className='section'>Education</h5>
        {educations.map((education,index)=> (
        <div className='education-information' key={index}>
        <Display text={education.university} id={`company-display-${education.universityId}`}/>
        <Display text={education.degree} id={`position-display-${education.universityId}`}/>
        <DisplayDateEducation date={education.universityStartDate} id={`start-display-${education.universityId}`} />
        <DisplayDateEducation date={education.universityEndDate} id={`end-display-${education.universityId}`} />
        </div>
        ))}
        <h5 className='section'>Skills</h5>
        <DisplayDynamicSkills text={skills}/>
        <h5 className='section'>Interests</h5>
        <DisplayDynamicInterests text={interests}/>
      </div>
    </div>
  )
}

export default App
