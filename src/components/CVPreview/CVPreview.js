import React from 'react';
import PersonalOut from './PersonalOut';
import EducationOut from './EducationOut';
import ExperienceOut from './ExperienceOut';

function CVPreview(props) {
  const { personalInfo, education, experience } = props;

  return (
    <div>
      <PersonalOut personalInfo={personalInfo}></PersonalOut>

      <div>--------------------------------------------</div>

      <EducationOut education={education}></EducationOut>

      <ExperienceOut experience={experience}></ExperienceOut>
    </div>
  );
}

export default CVPreview;
