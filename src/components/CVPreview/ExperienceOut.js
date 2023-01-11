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
              <h4>{exp.position}</h4>
              <div className='experience-details'>
                {exp.company} |
                <span className='bold'>
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
            </div>
            {exp.description}
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceOut;
