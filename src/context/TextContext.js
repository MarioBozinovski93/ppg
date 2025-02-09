// TextContext.js

import React, { createContext, useContext } from 'react';

// Create a Context for the text data
const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const textData = {
    personalInfo: {
      name: "Mario Bozhinovski",
      position: "Principal Software Engineer / Technical Lead",
      phone: "+38978456950",
      email: "bozinovskimario@hotmail.com",
      location: "Skopje, North Macedonia",
      linkedin: "https://www.linkedin.com/in/mario-bozinovski-2a4a7a157/",
      birthDate: "26th August, 1993",
    },
    aboutMe: "I am an ambitious software engineer recognized for delivering reliable results. With experience in a variety of technologies and design patterns, I have contributed to past projects at a level higher than expected. I am passionate about building innovative products, and I thrive in an environment where I can leverage my expertise to solve complex challenges.",
    skills: {
        main:[
            'Microsoft .NET',
            'C#',
            'Microsoft Azure',
            'Azure Service Bus',
            'Azure Event Hub',
            'Azure IoT Hub',
            'Microsoft SQL Server (MSSQL)',
            'Azure Cosmos DB',
            'Azure Blob Storage',
            'Azure Functions',
            'Microservices',
            'Event-Driven Architecture (EDA)',
            'Extract Transform Load (ETL)',
            'Change Data Capture (CDC)',
            'Leadership',
            'Git'
          ],
          other: [
            'React',
            'Angular',
            'Blazor',
            'Xamarin',
            'Go',
            'Jenkins',
            'TypeScript',
            'jQuery',
            'JavaScript',
            'Debezium',
            'Apache Kafka',
            'RedPanda',
            'RabbitMQ',
            'OData',
            'GraphQL',
            'WebSocket',
            'Trunk-based Development'
          ]
    },
    experiences:[
        {
          title: 'Principal Software Engineer & Technical Lead',
          company: 'Damilah',
          companyUrl: 'https://damilah.com/',
          duration: '01/2023 – Present',
          projects: [
            'Tech lead (8 devs)',
            'Trunk-based development',
            'Extreme programming - Pair programming',
            'DataSync of old single tenant system to new multi-tenant solution',
            'Monolith to Microservices (Strangler)',
          ],
          skills: ['Azure ServiceBus', 'Azure IoTHub', 'MSSQL', 'Microservices', 'Trunk-based Development'],
        },
        {
          title: 'Senior Software Engineer',
          company: 'EPAM Systems',
          companyUrl: 'https://www.epam.com/',
          duration: '08/2022 – 01/2023',
          projects: [
            'RemoteDeployment, ServiceCockpit, AuditService, CloudToDeviceBridge, etc.',
            'Driving technical decisions',
            'Planning and Ownership',
          ],
          skills: ['Azure ServiceBus', 'Azure IoTHub', 'MSSQL', 'Technical Leadership'],
        },
        {
          title: 'Software Engineer',
          company: 'EPAM Systems',
          companyUrl: 'https://www.epam.com/',
          duration: '08/2021 – 08/2022',
          projects: ['Build Web application as a Desktop using Electron.NET for Tecan PC OS'],
          skills: ['Electron.NET', 'Web Application Development'],
        },
        {
          title: 'Senior Software Engineer',
          company: 'Allocate Software',
          companyUrl: 'https://www.allocatesoftware.com/',
          duration: '10/2020 – 08/2021',
          projects: [
            'Developed API from scratch for consuming OData services from HealthRoster.',
            'Led CI/CD processes and onboarded new team members.',
            'Collaborated with senior management to address blockers and deadlines.',
            'Worked on OData services for Rostering features and integration testing.',
          ],
          skills: ['CI/CD', 'OData', 'API Development', 'Autorest', 'Azure'],
        },
        {
          title: 'Full-Stack Software Engineer',
          company: 'Allocate Software',
          companyUrl: 'https://www.allocatesoftware.com/',
          duration: '12/2019 – 09/2020',
          projects: [
            'Developed MePlusMobile (Xamarin.Forms) and MePlusApi (.NET Core) for cross-platform.',
            'Refactored legacy code and implemented new features.',
            'Worked on data synchronization and HealthSuite bug fixes and deployments.',
          ],
          skills: ['Xamarin.Forms', 'Xamarin', 'API Development', 'Mobile Development'],
        },
        {
          title: 'Full-Stack Software Engineer',
          company: 'IT Crowd',
          companyUrl: 'https://itcrowd.me/',
          duration: '05/2018 – 12/2019',
          projects: [
            'Developed blockchain-based digital identity system (Farmer Connect).',
            'Created social media platform (SMP Platform) and integrated third-party APIs (Facebook, LinkedIn).',
          ],
          skills: ['Blockchain', 'ReactJS', 'API Integration'],
        },
        {
          title: 'Full-Stack Software Engineer Intern',
          company: 'IT Crowd',
          companyUrl: 'https://itcrowd.me/',
          duration: '03/2018 – 05/2018',
          projects: ['Worked on VisualGuest CRM/ERP application for a Swiss client.'],
          skills: ['ADO.NET', 'Entity Framework', 'MSSQL', 'HTML', 'CSS', 'Bootstrap'],
        },
        {
          title: 'Backend Developer Intern',
          company: 'PolarCape',
          companyUrl: 'https://www.polarcape.com/',
          duration: '09/2017 – 11/2017',
          projects: ['Developed Conference Rooms application for booking conference rooms.'],
          skills: ['Java', 'Spring Boot', 'Maven', 'Hibernate'],
        },
        {
          title: 'Bachelor’s Degree Student',
          company: 'Faculty of Electrical Engineering and Information Technologies, Skopje',
          companyUrl: 'https://feit.ukim.edu.mk/',
          duration: '2012 – 2017',
          projects: ['Developed SmartHome app for controlling non-smart devices with Raspberry Pi3 and Arduino.'],
          skills: ['Java', 'Spring Boot', 'Maven', 'Hibernate', 'MySql', 'Angular 2', 'Ionic', 'Cordova'],
        },
      ],
    languages:[
        { lang:'Macedonian: Native', color:'primary' }, 
        { lang:'English: Full Professional Proficiency', color:'primary' },
        { lang:'Bulgarian: Limited Working Proficiency', color:'secondary' }, 
        { lang:'Serbian: Full Professional Proficiency', color:'secondary' }, 
        ],
    education: {
      degree: "Bachelor’s Degree",
      institution: "Faculty of Electrical Engineering and Information Technologies, Skopje",
      duration: "2012 – 2017",
    },
    certifications:[
        {
            title: "Silver Award - The OLX Group Challenge",
            issuer: "Codility",
            issued: "Jan 2021",
            expired: "Nov 2022",
            credentialId: "certE9TZBP-UXFVFRZJ9N94TTN3",
            link: "https://app.codility.com/cert/view/certE9TZBP-UXFVFRZJ9N94TTN3/",
            logo: "https://www.codility.com/wp-content/uploads/2020/03/On_light-png.webp",
          },
      ]
  };

  

  return (
    <TextContext.Provider value={textData}>
      {children}
    </TextContext.Provider>
  );
};

// Custom hook to use the text data in other components
export const useText = () => {
  return useContext(TextContext);
};
