import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  personalInfo: {
    name: '',
    phone: '',
    email: '',
    summary: '',
  },

  education: [
    {
      id: uuidv4(),
      university: '',
      program: '',
      degree: '',
      graduationDate: '',
      gpa: '',
    },
  ],

  experience: [
    {
      id: uuidv4(),
      company: '',
      location: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ['', '', ''],
    },
  ],

  skills: [
    {
      id: uuidv4(),
      name: '',
      lists: '',
    },
  ],
};

export default emptyCV;
