import React from 'react';
import PersonalOut from './PersonalOut';
import EducationOut from './EducationOut';
import ExperienceOut from './ExperienceOut';

function CVPreview(props) {
  const { personalInfo, education, experience } = props;

  return (
    <div id='cv-preview'>
      <PersonalOut personalInfo={personalInfo}></PersonalOut>
      <EducationOut education={education}></EducationOut>
      <ExperienceOut experience={experience}></ExperienceOut>
    </div>
  );
}

export default CVPreview;
