import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
  personalInfo: {
    name: 'John Doe',
    title: 'Front-End Developer',
    phone: '262-941-6330',
    email: 'John.Doe@exmaple.com',
    location: 'New York, NY',
    summary:
      'Front End developer with 2+ years of experience working with JavaScript/HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment, finding solutions and determining customer satisfaction.',
  },

  education: [
    {
      id: uuidv4(),
      university: 'State University of New York, New York, NY',
      program: '',
      degree: 'Bachelor of Science in Computer Science',
      graduationDate: 'June 2020',
      gpa: 'GPA 3.6',
    },
  ],

  experience: [
    {
      id: uuidv4(),
      company: 'Awesome Tech Solutions',
      location: 'New York, NY',
      position: 'Front End Developer',
      startDate: 'September 2021',
      endDate: 'Current',
      description: [
        'Migrated multi-page user experience into a single page app, improving customer engagement by 10%',
        'Architected product tours with React for a new feature that improfved customer adoption by 20%',
        'Partnered with data science to develop the front end for a product recommendation engine that increased user time on page by 5 minutes',
      ],
    },
    {
      id: uuidv4(),
      company: 'CodePerfect Corp',
      location: 'New York, NY',
      position: 'Junior Front End Developer',
      startDate: 'July 2020',
      endDate: 'August 2021',
      description: [
        'Overhauld the UI for internal tool to refund customers which improved refund service speed by 10%.',
        'Cooperated with other developers to implement RESTFUL APIs in Django increased reporting speed by 20% by the analytical team',
        'Used Selenium to build unit testing infrastructure for a client applcation and reduced the number of reported bugs by 8% monthly',
      ],
    },
  ],

  tasks: [],
};

export default exampleCV;
