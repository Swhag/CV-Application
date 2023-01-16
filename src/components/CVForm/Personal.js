import React from 'react';

function Personal(props) {
  const { personalInfo, handleChangePersonal } = props;

  return (
    <section>
      <h2>Personal Details</h2>
      <div className='group'>
        <label>Name</label>
        <input
          onChange={handleChangePersonal}
          value={personalInfo.name}
          type='text'
          name='name'
          placeholder=' '
        />

        <label>Phone Number</label>
        <input
          onChange={handleChangePersonal}
          value={personalInfo.phone}
          type='text'
          name='phone'
          placeholder=' '
        />

        <label>Email</label>
        <input
          onChange={handleChangePersonal}
          value={personalInfo.email}
          type='text'
          name='email'
          placeholder=' '
        />

        <label>Summary</label>
        <textarea
          onChange={handleChangePersonal}
          value={personalInfo.summary}
          type='text'
          name='summary'
          placeholder=' '
        />
      </div>

      <div className='group'>
        <input className='input-field' type='text' placeholder='First Name' />
        {/* <label>First Name</label> */}
        <span className='focus-border'>
          <i></i>
        </span>
      </div>
    </section>
  );
}

export default Personal;
