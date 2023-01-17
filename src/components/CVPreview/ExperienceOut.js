import React from 'react';

function ExperienceOut(props) {
  const { experience } = props;

  return (
    <div className='experience-list'>
      <div className='section-header'>
        <h3>WORK EXPERIENCE</h3>
      </div>

      {experience.map((exp, i) => {
        return (
          <div className='experience' key={exp.id}>
            <div className='experience-heading'>
              <h4>{exp.company}</h4>
              <span>|</span>
              <span className='italic'>{exp.location}</span>
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
