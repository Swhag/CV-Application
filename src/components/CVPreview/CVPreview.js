import React, { useRef, useState } from 'react';
import PersonalOut from './PersonalOut';
import EducationOut from './EducationOut';
import ExperienceOut from './ExperienceOut';
import SkillsOut from './SkillsOut';

import { useReactToPrint } from 'react-to-print';

function CVPreview(props) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });
  const pageStyle = `
  @page {
    size: 157mm 222.7mm;
    margin: 0;
  }
`;

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

  let [notification, setNotification] = useState('hide');
  // let [notification, setNotification] = useState('show');

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
        setNotification={setNotification}
      ></SideNav>

      <Notification notification={notification}></Notification>
    </>
  );
}

function SideNav(props) {
  const {
    handleLoadMyCV,
    handleSaveCV,
    handleLoadEmptyCV,
    handleLoadExampleCV,
    handlePrint,
    setNotification,
  } = props;

  return (
    <div className='side-btn-group'>
      <div className='side-btn-block'>
        <button className='side-btn' onClick={handleLoadMyCV}>
          My Resume
        </button>

        <button className='side-btn' onClick={handleLoadExampleCV}>
          Load Example
        </button>
      </div>

      <div className='side-btn-block'>
        <button className='side-btn' onClick={handleLoadEmptyCV}>
          New
        </button>
        <button
          className='side-btn'
          onClick={() => {
            if (
              window.confirm(
                'Do you want to overwrite "My Resume" with your current input?'
              )
            ) {
              handleSaveCV();
              setNotification('show');
              setTimeout(() => {
                setNotification('hide');
              }, 5000);
            }
          }}
        >
          Save
        </button>

        <button className='side-btn' onClick={handlePrint}>
          Generate PDF
        </button>
      </div>
    </div>
  );
}

function Notification(props) {
  const { notification } = props;
  return (
    <div className={`notification ${notification}`}>
      Current input saved as "My Resume"
    </div>
  );
}

export default CVPreview;
