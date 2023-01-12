import React from 'react';

function Experience(props) {
  const {
    experience,
    handleChangeExperience,
    handleAddExperience,
    handleDeleteExperience,
    handleAddExperienceDescription,
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

            {exp.description.map((des, index) => {
              return (
                <input
                  key={index}
                  onChange={handleAddExperienceDescription}
                  value={des}
                  id={exp.id}
                  type='text'
                  // name='description'
                  name={index}
                  placeholder='Description'
                />
              );
            })}

            {/* <input
              onChange={handleChangeExperience}
              value={exp.description}
              id={exp.id}
              type='text'
              name='description'
              placeholder='Description'
            /> */}

            <button onClick={handleAddExperience}>Add Bullet Points</button>

            <div className='btn-group'>
              <button className='btn-add' onClick={handleAddExperience}>
                Add
              </button>
              <button
                className='btn-delete'
                id={exp.id}
                onClick={handleDeleteExperience}
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

export default Experience;
