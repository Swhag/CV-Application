import React from 'react';

function SkillsOut(props) {
  const { skills } = props;

  return (
    <div className='skills-list'>
      <div className='section-header'>
        <h3>Skills</h3>
      </div>

      {skills.map((skill, i) => {
        return (
          <div className='skills' key={skill.id}>
            <div>
              <span className='skill-name'>{skill.name}:</span>{' '}
              <span>{skill.lists}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsOut;
