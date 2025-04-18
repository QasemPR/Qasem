import {
  mobile,
  backend,
  creator,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  canva,
  word,
  excel,
  powerpoint,
  access,
  cpp,
  csharp,
  sql,
  firebase,
  github,
  sqlserver,
  render,
  restapi,
  aws,
  googlecloud,
  rapid,
  npm,
  postman,
  expo,
  bootstrap,
  jwt,
  docker,
  vue,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Computer Skill",
  },
  {
    id: "languages",
    title: "Language Skill",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mern Stack Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "JWT Auth",
    icon: jwt,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Redux",
    icon: redux,
  },

  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Expo",
    icon: expo,
  },
  {
    name: "Java Script",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Google Cloud",
    icon: googlecloud,
  },
  {
    name: "Render",
    icon: render,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },

  {
    name: "Rest API",
    icon: restapi,
  },
  {
    name: "Rapid API",
    icon: rapid,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Word",
    icon: word,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power Point",
    icon: powerpoint,
  },
  {
    name: "Access",
    icon: access,
  },
];

const languages = [
  {
    name: "Kurdish",
  },
  {
    name: "English",
  },
  {
    name: "Arabic",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "BoMN Company",
    iconBg: "#0070ff",
    date: "March 2025 - Parsent",
    points: [
      "At BOMN Company, I work as a Full Stack Developer, supporting the development of web applications using the MERN stack.",
      "Frontend Development: Implementing reusable components and building responsive layouts using React and Tailwind CSS, based on existing designs.",
      "Backend Development: Creating RESTful APIs and handling server-side logic with Node.js and Express.js.",
      "Database Management: Managing MongoDB collections, writing queries, and ensuring reliable data storage and retrieval.",
      "Integration: Connecting frontend and backend parts of the application for smooth data flow.",
      "Testing & Debugging: Fixing bugs, testing features, and ensuring overall application stability.",
      "Team Collaboration: Working with backend developers and designers to deliver features that meet project goals.",
      "Security & Optimization: Applying basic security measures like input validation and optimizing code for better performance.",
      "I focus on building functional, maintainable applications while improving my skills and contributing to the success of the development team.",
    ],
  },
  {
    title: "IT Managment , Accountant",
    company_name: "Zamin Company",
    iconBg: "#0070ff",
    date: "Oct 2024 - March 2025",
    points: [
      "At Zamin Company, I managed Accounting and IT, ensuring financial accuracy and IT efficiency. My responsibilities included:",
      "Financial Operations: Managed budgeting, forecasting, and financial reporting, ensuring compliance and supporting strategic decisions.",
      "Accounts Management: Oversaw accounts payable/receivable, conducted audits, and ensured timely reconciliations and compliance.",
      "Process Automation: Introduced automation tools to streamline accounting workflows, improving accuracy and reducing turnaround time.",
      "Technical Support: Resolved hardware and software issues, minimizing downtime and guiding staff on IT best practices.",
      "System Integration: Integrated accounting software with business tools, improving efficiency and data consistency.",
      "Security: Enforced IT policies, and ensured data protection.",
      "By combining financial expertise with IT management, I enhanced operational efficiency, data security, and technology-driven financial processes, supporting the company’s growth and stability.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "TS Software Team",
    iconBg: "#0070ff",
    date: "March 2024 - Aug 2024",
    points: [
      "As an Intermediate Full Stack Developer at Tecno Speed Software, I contributed to building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Front-End: Built responsive interfaces with React.js and Tailwind CSS to enhance user experience.",
      "Back-End: Developed simple APIs using Node.js and Express.js for handling core app features.",
      "Database: Created and managed MongoDB collections with a focus on basic data operations.",
      "Key Responsibilities:",
      "Developing and connecting front-end and back-end components.",
      "Basic API development and integration.",
      "Using Git/GitHub for source control and teamwork.",
      "Implementing simple authentication using JWT.",
      "Collaborating with the team to improve functionality and fix bugs.",
      "I supported the development team by delivering clean, functional features while improving my full stack skills in real-world projects.",
    ],

  },
  {
    title: "IT Technician",
    company_name: "Bradost PC/Mobile Center",
    iconBg: "#0070ff",
    date: "Jan 2018 - Jul 2019",
    points: [
      "Over the past year, I have worked as an IT Technician, ensuring smooth system operations. My responsibilities included:",
      "Troubleshooting: Diagnosed and resolved hardware, software, and network issues to minimize downtime and improve performance.",
      "System Maintenance: Conducted regular checks, updates, and hardware maintenance to ensure optimal IT infrastructure functionality.",
      "Technical Support: Provided remote and on-site assistance, guiding users on software, devices, and technical tools.",
      "Setup and Configuration: Installed and configured new devices, set up networks, and deployed software for users and teams.",
      "System Monitoring: Proactively monitored IT systems to identify and address potential issues, ensuring uninterrupted operations.",
      "Documentation: Maintained detailed records of technical issues, solutions, and system updates for reference and compliance.",
      "With strong technical skills and a problem-solving mindset, I contributed to seamless IT operations, supporting organizational efficiency and goals.",
    ],
  },
  {
    title: "IT Supporter",
    company_name: "Sardam",
    iconBg: "#0070ff",
    date: "Jul 2019 - march 2021",
    points: [
      "With 2 years of experience as an IT Support Specialist, I provided technical assistance and resolved IT-related issues. Key responsibilities included:",
      "Hardware and Software Troubleshooting: Diagnosed and fixed issues with desktops, laptops, printers, and peripherals, minimizing disruptions.",
      "System Setup and Configuration: Installed and configured hardware, software, and operating systems for employees and departments.",
      "User Support: Offered first-level support for login issues, software errors, and connectivity problems, both remotely and on-site.",
      "Network Support: Troubleshot network connectivity issues, managed routers, and ensured smooth internet and intranet access.",
      "System Maintenance: Conducted regular checks, updates, and backups to maintain data integrity and prevent security risks.",
      "Customer Service: Delivered clear, prompt support, addressing user concerns and ensuring a positive experience.",
      "I developed strong technical and communication skills, ensuring efficient issue resolution and seamless IT operations.",
    ],
  },
];

export { services, technologies, experiences, languages };
