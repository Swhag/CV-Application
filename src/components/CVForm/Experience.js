import React from 'react';

function Experience(props) {
  const {
    experience,
    handleChangeExperience,
    handleAddExperience,
    handleDeleteExperience,
  } = props;

  return (
    <section>
      <h2>Work Experience</h2>
      {experience.map((exp, i) => {
        return (
          <div className='group' key={exp.id}>
            <input
              onChange={handleChangeExperience}
              value={exp.company}
              id={exp.id}
              type='text'
              name='company'
              placeholder='Company'
            />
            <input
              onChange={handleChangeExperience}
              value={exp.position}
              id={exp.id}
              type='text'
              name='position'
              placeholder='Position'
            />
            <input
              onChange={handleChangeExperience}
              value={exp.startDate}
              id={exp.id}
              type='text'
              name='startDate'
              placeholder='Start Date'
            />
            <input
              onChange={handleChangeExperience}
              value={exp.endDate}
              id={exp.id}
              type='text'
              name='endDate'
              placeholder='End Date'
            />
            <input
              onChange={handleChangeExperience}
              value={exp.description}
              id={exp.id}
              type='text'
              name='description'
              placeholder='Description'
            />
            <div className='btn-group'>
              <button id={exp.id} onClick={handleDeleteExperience}>
                Delete
              </button>
              <button className='btn-add' onClick={handleAddExperience}>
                Add
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Experience;
