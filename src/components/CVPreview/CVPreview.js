import React, { useRef } from 'react';
import PersonalOut from './PersonalOut';
import EducationOut from './EducationOut';
import ExperienceOut from './ExperienceOut';
import SkillsOut from './SkillsOut';

import { useReactToPrint } from 'react-to-print';

function CVPreview(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  const { personalInfo, education, experience, skills } = props;

  return (
    <>
      <div className='cv-preview-wrapper' ref={componentRef}>
        <div id='cv-preview'>
          <PersonalOut personalInfo={personalInfo}></PersonalOut>
          <EducationOut education={education}></EducationOut>
          <ExperienceOut experience={experience}></ExperienceOut>
          <SkillsOut skills={skills}></SkillsOut>
        </div>
      </div>
      <div className='bottom-btn-group'>
        <button className='bottom-btn' onClick={handlePrint}>
          Generate PDF
        </button>
      </div>
    </>
  );
}

export default CVPreview;
