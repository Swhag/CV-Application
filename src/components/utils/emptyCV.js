import { v4 as uuidv4 } from 'uuid';

const emptyCV = {
  personalInfo: {
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
    description: '',
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
      position: '',
      startDate: '',
      endDate: '',
      description: ['description 1', 'description 2'],
    },
  ],

  tasks: [],
};

export default emptyCV;
