import React from 'react';

function Education(props) {
  const { education } = props;

  return (
    <div className='education-list'>
      <div className='section-header'>
        <h3>EDUCATION</h3>
      </div>

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
            <div className='education-info'>
              <div className='degree'>{edu.degree}</div>
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
