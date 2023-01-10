import React from 'react';

function PersonalOutput(props) {
  const { personalInfo } = props;

  return (
    <ul>
      <li>
        <div className='text-output'>{personalInfo.name}</div>
      </li>
      <li>
        <div className='text-output'>{personalInfo.title}</div>
      </li>
      <li>
        <div className='text-output'>{personalInfo.phone}</div>
      </li>
      <li>
        <div className='text-output'>{personalInfo.email}</div>
      </li>
      <li>
        <div className='text-output'>{personalInfo.location}</div>
      </li>
      <li>
        <div className='text-output'>{personalInfo.description}</div>
      </li>
    </ul>
  );
}

export default PersonalOutput;
