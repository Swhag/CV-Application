import React from 'react';

function SkillsOut(props) {
  const { skills } = props;

  return (
    <div className='experience-list'>
      <h3>Skills</h3>

      {skills.map((skill, i) => {
        return (
          <div className='skills' key={skill.id}>
            <div>
              {skill.name}: <span>{skill.lists}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsOut;
