import React from 'react';

function SkillsOut(props) {
  const { skills } = props;

  return (
    <div className='experience-list'>
      <h3>Skills</h3>

      {skills.map((skill, i) => {
        return (
          <div className='experience' key={skill.id}>
            <div className='experience-heading'>
              <div>
                {skill.name}: <span> {skill.lists}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsOut;
