// import { useState } from "react";
import InputUniversity from "./University";
import DatePicker from "react-datepicker"; // Assuming you're using this package
import InputDegree from "./Degree";

function EducationField(prop) {

  // Function to add a new experience section
  const handleAddEducation = () => {
    prop.setEducations([...prop.educations, {
      university: "My University",
      degree: "Computer Science",
      universityStartDate: new Date(),
      universityEndDate: new Date(),
      universityId: crypto.randomUUID()
      }]);
  };

// Function to delete an experience section by its id
// Takes an id as a parameter, creates a copy of the current experiences array,
// finds the index of the experience with the matching id, removes that experience
// from the array, and updates the state with the new array.
const handleDeleteEducation = (id) => {
  console.log(id)
    const newArray = [...prop.educations];
    let index = newArray.map(e => e.universityId).indexOf(id);
    newArray.splice(index, 1);
    prop.setEducations(newArray);
};

  // Function to update a specific field in a specific experience section
  const updateEducationField = (index, field, value) => {
    const updatedEducations = [...prop.educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value
    };
    prop.setEducations(updatedEducations);
  };


  return (
    <div className="dynamic-education">
      {prop.educations.map((education, index) => (
        <div className="education-subsection" key={education.universityId} id={`education-${education.universityId}`}>
          <InputUniversity
            id={`university-${index}`}
            label="university"
            value={education.university}
            setValue={(value) => updateEducationField(index, 'university', value)}
          />
          
          <InputDegree
            id={`degree-${index}`}
            label="Degree"
            value={education.degree}
            setValue={(value) => updateEducationField(index, "degree", value)}
            key={`degree-${education.univeristyId}`}
          />
          
          <p>Start Date</p>
          <DatePicker
            selected={education.universityStartDate}
            onChange={(date) => updateEducationField(index, "universityStartDate", date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
          
          <p>End Date</p>
          <DatePicker
            selected={education.universityEndDate}
            onChange={(date) => updateEducationField(index, "universityEndDate", date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker   />
          
          {/* Add button after the last experience section */}
          {index === prop.educations.length - 1 && (
            <button 
              onClick={handleAddEducation}
              className="add-education-button"
            >
              Add Education
            </button>
          )}
            {/* Delete button after the "add another experience" button */}
            {prop.educations.length > 1 && (
            <button onClick={(event) => handleDeleteEducation(event.target.id)} id={education.universityId}
            className="delete-education-button">
              Delete Education
            </button>
                      )}
        </div>
      ))}
      
    </div>
  );
}

export default EducationField;