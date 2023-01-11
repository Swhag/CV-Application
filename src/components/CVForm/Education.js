import React from 'react';

function Education(props) {
  const {
    education,
    handleChangeEducation,
    handleAddEducation,
    handleDeleteEducation,
  } = props;

  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, i) => {
        return (
          <div className='group' key={edu.id}>
            <input
              onChange={handleChangeEducation}
              value={edu.university}
              id={edu.id}
              type='text'
              name='university'
              placeholder='University'
            />
            <input
              onChange={handleChangeEducation}
              value={edu.program}
              id={edu.id}
              type='text'
              name='program'
              placeholder='Program'
            />
            <input
              onChange={handleChangeEducation}
              value={edu.degree}
              id={edu.id}
              type='text'
              name='degree'
              placeholder='Degree'
            />
            <input
              onChange={handleChangeEducation}
              value={edu.startDate}
              id={edu.id}
              type='text'
              name='startDate'
              placeholder='Start Date'
            />
            <input
              onChange={handleChangeEducation}
              value={edu.endDate}
              id={edu.id}
              type='text'
              name='endDate'
              placeholder='End Date'
            />

            <div className='btn-group'>
              <button className='btn-add' onClick={handleAddEducation}>
                Add
              </button>
              <button
                className='btn-delete'
                id={edu.id}
                onClick={handleDeleteEducation}
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

export default Education;
