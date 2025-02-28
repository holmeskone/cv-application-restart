// import { useState } from "react";
import InputCompany from "./Company";
import InputPosition from "./Position"; // Assuming this exists
import DatePicker from "react-datepicker"; // Assuming you're using this package
import ResponsabilitiesField from "./Responsabilities"; // Assuming this exists

function ExperiencesField(prop) {
//   // Initial empty state for a single experience section
//   const initialExperienceState = {
//     company: "",
//     position: "",
//     startDate: new Date(),
//     endDate: new Date(),
//     responsabilities: [{ text: "" }]
//   };

//   // State to store all experience sections
//   const [experiences, setExperiences] = useState([initialExperienceState]);

  // Function to add a new experience section
  const handleAddExperience = () => {
    prop.setExperiences([...prop.experiences, {
        company: "ACME inc.",
        position: "Software Engineer",
        startDate: new Date(),
        endDate: new Date(),
        responsabilities: [{ text: "Solve Problems" }],
        id: crypto.randomUUID()
      }]);
  };

// Function to delete an experience section by its id
// Takes an id as a parameter, creates a copy of the current experiences array,
// finds the index of the experience with the matching id, removes that experience
// from the array, and updates the state with the new array.
const handleDeleteExperience = (id) => {
    const newArray = [...prop.experiences];
    let index = newArray.map(e => e.id).indexOf(id);
    newArray.splice(index, 1);
    prop.setExperiences(newArray);
};

  // Function to update a specific field in a specific experience section
  const updateExperienceField = (index, field, value) => {
    const updatedExperiences = [...prop.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value
    };
    prop.setExperiences(updatedExperiences);
  };

  // Function to update responsabilities for a specific experience
  const updateResponsabilities = (experienceIndex, newResponsabilities) => {
    const updatedExperiences = [...prop.experiences];
    updatedExperiences[experienceIndex] = {
      ...updatedExperiences[experienceIndex],
      responsabilities: newResponsabilities
    };
    prop.setExperiences(updatedExperiences);
  };

  return (
    <div className="dynamic-experiences">
      {prop.experiences.map((experience, index) => (
        <div className="experience-subsection" key={experience.id} id={`experience-${experience.id}`}>
          <InputCompany
            id={`company-${index}`}
            className="company"
            label="Company"
            value={experience.company}
            setValue={(value) => updateExperienceField(index, "company", value)}
          />
          
          <InputPosition
            id={`position-${index}`}
            className="position"
            label="Position"
            value={experience.position}
            setValue={(value) => updateExperienceField(index, "position", value)}
          />
          
          <p>Start Date</p>
          <DatePicker
            selected={experience.startDate}
            onChange={(date) => updateExperienceField(index, "startDate", date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="start-date"
          />
          
          <p>End Date</p>
          <DatePicker
            selected={experience.endDate}
            onChange={(date) => updateExperienceField(index, "endDate", date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="end-date"
          />
          
          <p>Responsabilities</p>
          <ResponsabilitiesField
            inputs={experience.responsabilities}
            className="responsabilities"
            setInputs={(newResponsabilities) => 
              updateResponsabilities(index, newResponsabilities)
            }
          />
          
          {/* Add button after the last experience section */}
          {index === prop.experiences.length - 1 && (
            <button 
              onClick={handleAddExperience}
              className="add-button"
            >
              Add Another Experience
            </button>
          )}
            {/* Delete button after the "add another experience" button */}
            {prop.experiences.length > 1 && (
            <button onClick={(event) => handleDeleteExperience(event.target.id)} id={experience.id}
            className="delete-button">
              Delete Experience
            </button>
                      )}
        </div>
      ))}
      
    </div>
  );
}

export default ExperiencesField;