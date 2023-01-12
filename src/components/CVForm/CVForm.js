import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';

function CVForm(props) {
  const {
    handleLoadEmptyCV,
    handleLoadExampleCV,
    personalInfo,
    handleChangePersonal,
    education,
    handleChangeEducation,
    handleAddEducation,
    handleDeleteEducation,
    experience,
    handleChangeExperience,
    handleAddExperience,
    handleDeleteExperience,
    handleChangeExperienceDescription,
    handleAddExperienceDescription,
    handleDeleteExperienceDescription,
  } = props;

  return (
    <div id='cv-form'>
      <div className='btn-group'>
        <button className='btn-add' onClick={handleLoadEmptyCV}>
          New
        </button>
        <button className='btn-delete' onClick={handleLoadExampleCV}>
          Load Example
        </button>
      </div>

      <Personal
        personalInfo={personalInfo}
        handleChangePersonal={handleChangePersonal}
      ></Personal>

      <Education
        education={education}
        handleChangeEducation={handleChangeEducation}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
      ></Education>

      <Experience
        experience={experience}
        handleChangeExperience={handleChangeExperience}
        handleAddExperience={handleAddExperience}
        handleDeleteExperience={handleDeleteExperience}
        handleChangeExperienceDescription={handleChangeExperienceDescription}
        handleAddExperienceDescription={handleAddExperienceDescription}
        handleDeleteExperienceDescription={handleDeleteExperienceDescription}
      ></Experience>
    </div>
  );
}

export default CVForm;
