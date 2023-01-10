import React from 'react';
import PersonalOut from './PersonalOut';
import ExperienceOut from './ExperienceOut';

function CVPreview(props) {
  const { personalInfo, experience } = props;

  return (
    <div>
      <PersonalOut personalInfo={personalInfo}></PersonalOut>
      <div>--------------------------------------------</div>
      <ExperienceOut experience={experience}></ExperienceOut>
    </div>
  );
}

export default CVPreview;
