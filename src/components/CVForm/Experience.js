import React from 'react';

function Experience(props) {
  const {
    experience,
    handleChangeExperience,
    handleAddExperience,
    handleDeleteExperience,
    handleChangeExperienceDescription,
    handleAddExperienceDescription,
    handleDeleteExperienceDescription,
  } = props;

  return (
    <section>
      <h2>Work Experience</h2>
      {experience.map((exp, i) => {
        return (
          <div className='group' key={exp.id}>
            <label>Company</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeExperience}
                value={exp.company}
                id={exp.id}
                type='text'
                name='company'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>Location</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeExperience}
                value={exp.location}
                id={exp.id}
                type='text'
                name='location'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>Position</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeExperience}
                value={exp.position}
                id={exp.id}
                type='text'
                name='position'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>Start Date</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeExperience}
                value={exp.startDate}
                id={exp.id}
                type='text'
                name='startDate'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>End Date</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeExperience}
                value={exp.endDate}
                id={exp.id}
                type='text'
                name='endDate'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>Description</label>
            {exp.description.map((des, index) => {
              return (
                <div className='description-input' key={index}>
                  <textarea
                    className='experience-description'
                    onChange={handleChangeExperienceDescription}
                    value={des}
                    id={exp.id}
                    type='text'
                    data-index={index}
                    name='description'
                    placeholder={`Description ${index + 1}`}
                  />

                  <i
                    id={exp.id}
                    data-index={index}
                    className='fa-solid fa-ban delete-icon'
                    onClick={(e) => {
                      handleDeleteExperienceDescription(e);
                    }}
                  ></i>
                </div>
              );
            })}

            <button
              id={exp.id}
              className='btn-bullet'
              onClick={handleAddExperienceDescription}
            >
              Add Bullet Points
            </button>

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
