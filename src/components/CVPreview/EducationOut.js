import React from 'react';

function Education(props) {
  const { education } = props;

  return (
    <>
      {education.map((edu, i) => {
        return (
          <ul key={edu.id}>
            <li>
              <div className='text-output'>{edu.university}</div>
            </li>
            <li>
              <div className='text-output'>{edu.program}</div>
            </li>
            <li>
              <div className='text-output'>{edu.degree}</div>
            </li>
            <li>
              <div className='text-output'>{edu.startDate}</div>
            </li>
            <li>
              <div className='text-output'>{edu.endDate}</div>
            </li>
            <div>--------------------------------------------</div>
          </ul>
        );
      })}
    </>
  );
}

export default Education;
