import React from 'react';

function Education(props) {
  const { education } = props;

  return (
    <div className='education-list'>
      <h3>EDUCATION</h3>

      {education.map((edu, i) => {
        return (
          <div className='education' key={edu.id}>
            <div className='education-heading'>
              <h4>{edu.university}</h4>
              <div className='education-details'>
                <span className='bold'>{edu.graduationDate}</span>
              </div>
            </div>
            <div>{edu.program}</div>
            <div className='education-heading'>
              <div>{edu.degree}</div>
              <div className='education-details'>
                <span className='bold'>{edu.gpa}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
