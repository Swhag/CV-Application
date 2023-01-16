import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

import PersonalOut from './PersonalOut';
import EducationOut from './EducationOut';
import ExperienceOut from './ExperienceOut';
import SkillsOut from './SkillsOut';
import SideNav from '../utils/SideNav';

function CVPreview(props) {
  const {
    handleLoadMyCV,
    handleSaveCV,
    handleLoadEmptyCV,
    handleLoadExampleCV,
    personalInfo,
    education,
    experience,
    skills,
  } = props;
  const [notification, setNotification] = useState('hide');
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  const pageStyle = `
  @page {
    size: 157mm 203.7mm;
    margin: 0;
    border: none;
    box-shadow: none;
  }
`;

  return (
    <>
      <div className='cv-preview-wrapper' ref={componentRef}>
        <style>{pageStyle}</style>
        <div id='cv-preview'>
          <PersonalOut personalInfo={personalInfo}></PersonalOut>
          <EducationOut education={education}></EducationOut>
          <ExperienceOut experience={experience}></ExperienceOut>
          <SkillsOut skills={skills}></SkillsOut>
        </div>
      </div>

      <SideNav
        handleLoadMyCV={handleLoadMyCV}
        handleSaveCV={handleSaveCV}
        handleLoadEmptyCV={handleLoadEmptyCV}
        handleLoadExampleCV={handleLoadExampleCV}
        handlePrint={handlePrint}
        notification={notification}
        setNotification={setNotification}
      ></SideNav>
    </>
  );
}

export default CVPreview;
