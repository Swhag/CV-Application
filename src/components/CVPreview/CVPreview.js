import React from 'react';
import PersonalOut from './PersonalOut';
import EducationOut from './EducationOut';
import ExperienceOut from './ExperienceOut';
import SkillsOut from './SkillsOut';

function CVPreview(props) {
  const { personalInfo, education, experience, skills } = props;

  return (
    <div id='cv-preview'>
      <PersonalOut personalInfo={personalInfo}></PersonalOut>
      <EducationOut education={education}></EducationOut>
      <ExperienceOut experience={experience}></ExperienceOut>
      <SkillsOut skills={skills}></SkillsOut>
    </div>
  );
}

export default CVPreview;
