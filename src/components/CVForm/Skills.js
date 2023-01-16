import React from 'react';

function SkillsField(props) {
  const { skills, handleSkillsChange, handleAddSkills, handleDeleteSkills } =
    props;

  return (
    <section>
      <h2>Skills</h2>
      {skills.map((skill, i) => {
        return (
          <div className='group' key={skill.id}>
            <label>Skill Name</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleSkillsChange}
                value={skill.name}
                id={skill.id}
                type='text'
                name='name'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>Skills</label>
            <textarea
              className='experience-description'
              onChange={handleSkillsChange}
              value={skill.lists}
              id={skill.id}
              type='text'
              name='lists'
              placeholder=' '
            />

            <div className='btn-group'>
              <button className='btn-add' onClick={handleAddSkills}>
                Add
              </button>
              <button
                className='btn-delete'
                id={skill.id}
                onClick={handleDeleteSkills}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SkillsField;
