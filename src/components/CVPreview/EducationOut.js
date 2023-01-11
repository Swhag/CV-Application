import React from 'react';

function Education(props) {
  const { education } = props;

  return (
    <div className='experience-list'>
      <h3>EDUCATION</h3>

      {education.map((edu, i) => {
        return (
          <div className='experience' key={edu.id}>
            <div className='experience-heading'>
              <h4>{edu.university}</h4>
              <div className='experience-details'>
                {edu.program} |
                <span className='bold'>
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
            </div>
            {edu.degree}
          </div>
        );
      })}
    </div>
  );
}

export default Education;
