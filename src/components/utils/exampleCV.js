import { v4 as uuidv4 } from 'uuid';

const exampleCV = {
  personalInfo: {
    name: 'John Doe',
    phone: '262-941-6330',
    email: 'John.Doe@exmaple.com',
    summary:
      'Front End developer with 3+ years of experience working with JavaScript/HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment, finding solutions and determining customer satisfaction.',
  },

  education: [
    {
      id: uuidv4(),
      university: 'State University of New York, New York, NY',
      program: '',
      degree: 'Bachelor of Science, in Computer Science',
      graduationDate: 'Graduation: June 2019',
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
        'Migrated multi-page user experience into a single page app, improving customer engagement by 10%.',
        'Architected product tours with React for a new feature that improved customer adoption by 20%.',
        'Partnered with data science to develop the front end for a product recommendation engine that increased user time on page by 5 minutes.',
        'Create non-technical descriptions of operations and workflow to enable non-coding team to function with minimal interruption.',
      ],
    },
    {
      id: uuidv4(),
      company: 'CodePerfect Corp',
      location: 'New York, NY',
      position: 'Front End Developer',
      startDate: 'May 2020',
      endDate: 'August 2021',
      description: [
        'Overhauled the UI for internal tool to refund customers which improved refund service speed by 10%.',
        'Cooperated with other developers to implement RESTFUL APIs in Django increased reporting speed by 20% by the analytical team.',
        'Used Selenium to build unit testing infrastructure for a client application and reduced the number of reported bugs by 8% monthly.',
      ],
    },
    {
      id: uuidv4(),
      company: 'United Capital Investment',
      location: 'New York, NY',
      position: 'Junior Front End Developer',
      startDate: 'July 2019',
      endDate: 'April 2020',
      description: [
        'Created a custom client dashboard that reduced support tickets by 50%.',
        'Collaborated with the UX/UI design teams to improve the website and applications, increasing conversion rates by 25%.',
        'Daily maintenance of code, debugging issues and solving clients’ problems.',
      ],
    },
  ],

  skills: [
    {
      id: uuidv4(),
      name: 'Coding Languages',
      lists:
        'Python, C++, PowerShell, JavaScript, PHP, JavaScript, HTML, CSS, jQuery, WordPress, MySQL, Django',
    },
    {
      id: uuidv4(),
      name: 'Computer Skills',
      lists:
        'Windows Server 2012/2016, Windows 7/8/10/11, IOS, Active Directory, MS Office Word, Excel, Access, Git, Gitbash, Ubuntu, Kali Linux',
    },
  ],
};

export default exampleCV;
