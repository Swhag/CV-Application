import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
  personalInfo: {
    name: 'ExampleCV',
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
      description: ['', '', ''],
    },
  ],

  tasks: [],
};

export default exampleCV;
