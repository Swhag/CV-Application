import React from 'react';

function Personal(props) {
  const { personalInfo, handleChangePersonal } = props;

  return (
    <div>
      <input
        onChange={handleChangePersonal}
        value={personalInfo.name}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input
        onChange={handleChangePersonal}
        value={personalInfo.title}
        type='text'
        name='title'
        placeholder='Title'
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
      <input
        onChange={handleChangePersonal}
        value={personalInfo.location}
        type='text'
        name='location'
        placeholder='Location'
      />
      <input
        onChange={handleChangePersonal}
        value={personalInfo.description}
        type='text'
        name='description'
        placeholder='Description'
      />
    </div>
  );
}

export default Personal;
