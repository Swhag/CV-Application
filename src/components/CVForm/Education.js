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
            <label>University</label>
            <input
              onChange={handleChangeEducation}
              value={edu.university}
              id={edu.id}
              type='text'
              name='university'
              placeholder=' '
            />

            <label>School Program (Optional)</label>
            <input
              onChange={handleChangeEducation}
              value={edu.program}
              id={edu.id}
              type='text'
              name='program'
              placeholder=' '
            />

            <label>Degree</label>
            <input
              onChange={handleChangeEducation}
              value={edu.degree}
              id={edu.id}
              type='text'
              name='degree'
              placeholder=' '
            />

            <label>Graduation Date</label>
            <input
              onChange={handleChangeEducation}
              value={edu.graduationDate}
              id={edu.id}
              type='text'
              name='graduationDate'
              placeholder=' '
            />

            <label>GPA</label>
            <input
              onChange={handleChangeEducation}
              value={edu.gpa}
              id={edu.id}
              type='text'
              name='gpa'
              placeholder=' '
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
