import React from 'react';

function SkillsOut(props) {
  const { skills } = props;

  return (
    <div className='skills-list'>
      <h3>Skills</h3>

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
