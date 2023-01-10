import React from 'react';

function ExperienceOut(props) {
  const { experience } = props;

  return (
    <>
      {experience.map((exp, i) => {
        return (
          <ul key={exp.id}>
            <li>
              <div className='text-output'>{exp.company}</div>
            </li>
            <li>
              <div className='text-output'>{exp.position}</div>
            </li>
            <li>
              <div className='text-output'>{exp.startDate}</div>
            </li>
            <li>
              <div className='text-output'>{exp.endDate}</div>
            </li>
            <li>
              <div className='text-output'>{exp.description}</div>
            </li>
            <div>--------------------------------------------</div>
          </ul>
        );
      })}
    </>
  );
}

export default ExperienceOut;
