import React from 'react';

function ExperienceOut(props) {
  const { experience } = props;

  return (
    <div className='experience-list'>
      <h3>WORK EXPERIENCE</h3>

      {experience.map((exp, i) => {
        return (
          <div className='experience' key={exp.id}>
            <div className='experience-heading'>
              <h4>{exp.company}</h4>
            </div>
            <div className='experience-info'>
              <div>{exp.position}</div>

              <div className='experience-details'>
                <span className='bold'>
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
            </div>
            <ul className='experience-description'>
              {exp.description.map((des, index) => {
                return <li key={index}>{des}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceOut;
