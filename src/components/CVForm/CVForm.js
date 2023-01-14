import React from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import SkillsField from './Skills';

function CVForm(props) {
  const {
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
    skills,
    handleSkillsChange,
    handleAddSkills,
    handleDeleteSkills,
  } = props;

  return (
    <div className='cv-form-wrapper'>
      <div id='cv-form'>
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
        <SkillsField
          skills={skills}
          handleSkillsChange={handleSkillsChange}
          handleAddSkills={handleAddSkills}
          handleDeleteSkills={handleDeleteSkills}
        ></SkillsField>
      </div>
    </div>
  );
}

export default CVForm;
