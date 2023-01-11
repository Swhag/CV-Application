import React from 'react';

function PersonalOutput(props) {
  const { personalInfo } = props;

  return (
    <>
      <header>
        <div className='heading'>
          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.title}</h2>
        </div>
        <div className='details-group'>
          <div className='contact-details'>
            <i class='fa-solid fa-phone'></i>
            <span className='details-text'>{personalInfo.phone}</span>
          </div>
          <div className='contact-details'>
            <i class='fa-solid fa-square-envelope'></i>
            <span className='details-text'>{personalInfo.email}</span>
          </div>
          <div className='contact-details'>
            <i class='fa-solid fa-location-dot'></i>
            <span className='details-text'>{personalInfo.location}</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default PersonalOutput;
