import React from 'react';

function Personal(props) {
  const { personalInfo, handleChangePersonal } = props;

  return (
    <section>
      <h2>Personal Details</h2>
      <div className='group'>
        <input
          onChange={handleChangePersonal}
          value={personalInfo.name}
          type='text'
          name='name'
          placeholder='Name'
        />
        <input
          onChange={handleChangePersonal}
          value={personalInfo.phone}
          type='text'
          name='phone'
          placeholder='Phone'
        />
        <input
          onChange={handleChangePersonal}
          value={personalInfo.email}
          type='text'
          name='email'
          placeholder='Email'
        />
        <textarea
          onChange={handleChangePersonal}
          value={personalInfo.summary}
          type='text'
          name='summary'
          placeholder='Summary'
        />
      </div>
    </section>
  );
}

export default Personal;
