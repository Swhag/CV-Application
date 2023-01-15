import React, { useRef, useState, useEffect } from 'react';
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
        // notification={notification}
        // setNotification={setNotification}
      ></SideNav>

      {/* <Notification notification={notification}></Notification> */}
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
  } = props;

  const [notification, setNotification] = useState('hide');
  const [message, setMessage] = useState('Loaded "My Resume"');
  const [sameMessage, SetSameMessage] = useState(false);

  function handleMessage(currentMessage) {
    if (currentMessage === message) {
      setNotification('hide');

      SetSameMessage(!sameMessage);
    }

    setMessage(currentMessage);
    console.log(sameMessage);
  }

  useEffect(() => {
    setTimeout(() => {
      setNotification('show');
    }, 150);

    const timer = setTimeout(() => {
      setNotification('hide');
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [sameMessage]);

  useEffect(() => {
    setNotification('hide');

    const timer1 = setTimeout(() => {
      setNotification('show');
    }, 150);

    const timer2 = setTimeout(() => {
      setNotification('hide');
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [message]);

  return (
    <>
      <div className='side-btn-group'>
        <div className='side-btn-block'>
          <button
            className='side-btn'
            onClick={() => {
              handleLoadMyCV();
              // setMessage(`Loaded "My Resume"`);
              setNotification('show');
              handleMessage(`Loaded "My Resume"`);
            }}
          >
            My Resume
          </button>

          <button
            className='side-btn'
            onClick={() => {
              handleLoadExampleCV();
              // setMessage('Loaded Example Resume');
              setNotification('show');
              handleMessage('Loaded Example Resume');
            }}
          >
            Load Example
          </button>
        </div>

        <div className='side-btn-block'>
          <button
            className='side-btn'
            onClick={() => {
              handleLoadEmptyCV();
              // setMessage('Loaded New form');
              setNotification('show');
              handleMessage('Loaded New form');
            }}
          >
            New
          </button>
          <button
            className='side-btn'
            onClick={() => {
              if (window.confirm('Do you want to overwrite "My Resume"?')) {
                handleSaveCV();
                // setMessage(`Current input saved as "My Resume"`);
                handleMessage(`Current input saved as "My Resume"`);
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

      <Notification
        notification={notification}
        message={message}
      ></Notification>
    </>
  );
}

function Notification(props) {
  const { notification, message } = props;
  return <div className={`notification ${notification}`}>{message}</div>;
}

export default CVPreview;
