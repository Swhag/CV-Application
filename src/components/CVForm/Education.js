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
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeEducation}
                value={edu.university}
                id={edu.id}
                type='text'
                name='university'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>School Program (Optional)</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeEducation}
                value={edu.program}
                id={edu.id}
                type='text'
                name='program'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>Degree</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeEducation}
                value={edu.degree}
                id={edu.id}
                type='text'
                name='degree'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>Graduation Date</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeEducation}
                value={edu.graduationDate}
                id={edu.id}
                type='text'
                name='graduationDate'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

            <label>GPA</label>
            <div className='input-block'>
              <input
                className='input-field'
                onChange={handleChangeEducation}
                value={edu.gpa}
                id={edu.id}
                type='text'
                name='gpa'
                placeholder=' '
              />
              <span className='focus-border'>
                <i></i>
              </span>
            </div>

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
