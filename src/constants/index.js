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
  cicd,
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
    name: "CI/CD",
    icon: cicd,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "کوردی",
  },
  {
    name: "English",
  },
  {
    name: "العربي",
  },
];

const experiences = [
  {
    title: "IT Managment , Accountant",
    company_name: "Zamin Company",
    iconBg: "#0070ff",
    date: "Oct 2024 - Parsent",
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
      "As a Full Stack Developer on the Tecno Speed Software Team, I built and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I handled the full development lifecycle, from UI design to back-end and database management.",
      "Front-End: Developed responsive, dynamic interfaces with React.js, JavaScript (ES7+), and Tailwind CSS, ensuring high performance, accessibility, and cross-browser compatibility.",
      "Back-End: Built RESTful APIs with Node.js and Express.js, implementing authentication, authorization, and secure data handling.",
      "Database: Designed MongoDB schemas, optimized queries, and ensured data integrity for scalable applications.",
      "Key Responsibilities:",
      "Full-stack development with React.js, Node.js, and Express.js.",
      "API development for seamless front-end and back-end communication.",
      "Database management and performance optimization.",
      "Implementing JWT-based authentication and secure data practices.",
      "State management using Redux Toolkit.",
      "Deployment on AWS/Render and setting up CI/CD pipelines.",
      "Version control with Git/GitHub.",
      "Performance optimization for speed and scalability.",
      "I delivered scalable, secure, and maintainable web applications while collaborating with cross-functional teams.",
    ],
  },
  {
    title: "IT Supporter & Technical Supporter",
    company_name: "Bradost PC and Mobile Center",
    iconBg: "#0070ff",
    date: "Jan 2018 - Jul 2019",
    points: [
      "Over the past two years, I have worked as an IT Technician, ensuring smooth system operations. My responsibilities included:",
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
    company_name: "Sardam Center",
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
