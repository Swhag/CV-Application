import React from 'react';
import Personal from './Personal';
import Experience from './Experience';

function CVForm(props) {
  const {
    personalInfo,
    handleChangePersonal,
    experience,
    handleChangeExperience,
    handleAddExperience,
    handleDeleteExperience,
  } = props;

  return (
    <div className='input-container'>
      <Personal
        personalInfo={personalInfo}
        handleChangePersonal={handleChangePersonal}
      ></Personal>

      <div>--------------------------------------------</div>

      <Experience
        experience={experience}
        handleChangeExperience={handleChangeExperience}
        handleAddExperience={handleAddExperience}
        handleDeleteExperience={handleDeleteExperience}
      ></Experience>
    </div>
  );
}

export default CVForm;
