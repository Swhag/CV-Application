import React from 'react';

function Personal(props) {
  const { personalInfo, handleChangePersonal } = props;

  return (
    <section>
      <h2>Personal Details</h2>
      <div className='group'>
        <label>Name</label>
        <div className='input-block'>
          <input
            className='input-field'
            onChange={handleChangePersonal}
            value={personalInfo.name}
            type='text'
            name='name'
            placeholder=' '
          />
          <span className='focus-border'>
            <i></i>
          </span>
        </div>

        <label>Phone Number</label>
        <div className='input-block'>
          <input
            className='input-field'
            onChange={handleChangePersonal}
            value={personalInfo.phone}
            type='text'
            name='phone'
            placeholder=' '
          />
          <span className='focus-border'>
            <i></i>
          </span>
        </div>

        <label>Email</label>
        <div className='input-block'>
          <input
            className='input-field'
            onChange={handleChangePersonal}
            value={personalInfo.email}
            type='text'
            name='email'
            placeholder=' '
          />
          <span className='focus-border'>
            <i></i>
          </span>
        </div>

        <label>Summary</label>
        <textarea
          onChange={handleChangePersonal}
          value={personalInfo.summary}
          type='text'
          name='summary'
          placeholder=' '
        />
      </div>
    </section>
  );
}

export default Personal;
