// ================== Skills Section Logos ==================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// ================== Experience Section Logos ==================
import aws from './assets/company_logo/aws-icon.png';
import technohacks from './assets/company_logo/technohacks.png';

// ================== Education Section Logos ==================
import apex from './assets/education_logo/apex.png';
import kiet from './assets/education_logo/KIET.jpg';

// ================== Project Section Logos ==================
import mentalityLogo from './assets/work_logo/mentality.png';
import forkedLogo from './assets/work_logo/forked.png';
import vionixLogo from './assets/work_logo/vionix.png';

// ================== Skills Info ==================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Angular', logo: angularLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

// ================== Experience ==================
export const experiences = [
  {
    id: 0,
    img: aws,
    role: "DevOps Trainee",
    company: "AWS Academy",
    date: "June 2025 - July 2025",
    desc: "Hands-on training on DevOps tools and cloud-native development practices using AWS. Gained experience in CI/CD pipelines, cloud deployment, and containerized applications.",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Cloud Deployment",
    ],
  },
  {
    id: 1,
    img: technohacks,
    role: "Java Developer Intern",
    company: "Technohacks Solutions",
    date: "September 2023",
    desc: "Worked on fullstack web development projects with Java, ReactJS, and SQL. Collaborated with team members to deliver responsive web apps and enhance user experience.",
    skills: [
      "Java",
      "SQL",
      "ReactJS",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  }
];

// ================== Education ==================
export const education = [
  {
    id: 0,
    img: kiet,
    school: "KIET Group of Institutions, Delhi-NCR",
    date: "Nov 2022 - July 2026",
    grade: "8.53 CGPA",
    desc: "Pursuing B.Tech in Information Technology. Actively working on projects in full-stack development, cloud computing, and DevOps while participating in hackathons and technical events to strengthen problem-solving and collaboration skills.",
    degree: "Bachelor of Technology - B.Tech (Information Technology)",
  },
  {
    id: 1,
    img: apex,
    school: "Apex Public School, Gorakhpur",
    date: "Apr 2020 - March 2021",
    grade: "90%",
    desc: "Completed Class XII in PCM (Physics, Chemistry, Mathematics) under ICSE Board. Achieved strong foundation in core subjects and actively participated in science and math clubs to enhance analytical and problem-solving skills.",
    degree: "ICSE (XII)",
  },
  {
    id: 2,
    img: apex,
    school: "Apex Public School, Gorakhpur",
    date: "Apr 2018 - March 2019",
    grade: "91%", 
    desc: "Completed Class X under ICSE Board. Developed strong fundamentals in science and mathematics, while actively engaging in extracurricular activities such as debate and quiz competitions to enhance communication and critical thinking skills.",
    degree: "ICSE (X)",
  },
];


// ================== Projects ==================
export const projects = [
  {
    id: 0,
    title: "Vionix - AI short Video Generator",
    description:
      "An AI-powered platform that generates short video using Akool AI and Convex backend. Built with Next.js, React, and TailwindCSS, supporting real-time state management and seamless video creation.",
    image: vionixLogo,
    tags: ["Next.js", "React", "Akool AI", "Convex", "TailwindCSS"],
    github: "https://github.com/Sonalis1299/Vionix",
    webapp: "https://vionix.app/",
  },
  {
    id: 1,
    title: "Mentality - Mental Health Platform",
    description:
      "A mental health support system with chatbot integration, yoga and meditation resources, and therapist access. Built with React, Node, Vite, and Firebase authentication.",
    image: mentalityLogo,
    tags: ["React", "Firebase", "Node.js", "Vite", "Chatbot"],
    github: "https://github.com/Sonalis1299/mental-health-frontend",
    webapp: "https://mentalitymajor.netlify.app/",
  },
  {
    id: 2,
    title: "Share-A-Plate - Food Waste Reduction App",
    description:
      "A smart food waste reduction app that generates recipes using leftover or near-expiry ingredients. Built during a hackathon using React and FlavorDB APIs for ingredient pairing and substitutions.",
    image: forkedLogo,
    tags: ["React", "API", "Food Tech", "Hackathon"],
    github: "https://github.com/Sonalis1299/Share-A-Plate",
    webapp: "https://share-a-plate-v4ng.onrender.com/",
  },
];
