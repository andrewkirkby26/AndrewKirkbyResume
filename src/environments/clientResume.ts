import {Social} from "../app/interfaces/social";
import {Education} from "../app/interfaces/education";
import {Certificate} from "../app/interfaces/certificate";

export const ClientResume =  {
    about: {
        name: 'Andrew Kirkby',
        about_photo: 'about_photo.png',
        landing_photo: 'landing_photo.png',
        address: 'Weatogue, CT',
        phone: '(860) 795-3675',
        extras: '',
        email: 'andrew.kirkby26@gmail.com',
        career: 'Software Engineer',
        summary: 'Full-stack software engineer with experience in creating modern, responsive user interfaces intended for various end users and devices. ' +
            'Experience with querying and compiling data required from various datastores. As well as experience with automation and control of multi axis robots.',
        salutations: [
            'A user interface is like a joke. <br> If you have to explain it, <br> it’s not that good. <br>- Anonymous'
        ]
    },
    traitsCircle: [
        {
            name: 'Communication',
            confidence: 100
        },
        {
            name: 'Efficiency',
            confidence: 100
        },
        {
            name: 'Leadership',
            confidence: 100
        }
    ],
    traitsBar: [
        {
            name: 'Web Interface',
            confidence: 100
        },
        {
            name: 'Software Architecture ',
            confidence: 95
        },
        {
            name: 'Data Structures',
            confidence: 90
        }
    ],
    skills: [
        {
            name: 'Skills',
            skills: [
                'Angular',
                'HTML/CSS',
                'JS/TS',
                'Java',
                'Spring',
                'Python',
                'Swift'
            ]
        },
        {
            name: 'Other',
            skills: [
                'SQL',
                'Mongo',
                'Docker',
                'Firebase',
                'REST'
            ]
        }
    ],
    socials: [
        {
            type: Social.LINKED_IN,
            url: 'https://www.linkedin.com/in/andrewskirkby/'
        },
        {
            type: Social.IG,
            url: 'https://www.instagram.com/kirkby_andrew/?igsh=MTR3YmR0ZDc4YTI3Yw%3D%3D&utm_source=qr'
        },
        {
            type: Social.GITHUB,
            url: 'https://github.com/andrewkirkby26?tab=repositories'
        }
    ],
    education: [
        {
            level: Education.LEVEL_COLLEGE,
            name: 'Western New England University',
            location: 'Springfield, MA',
            startDate: {
                display: '2015',
                year: 2015,
                month: 8
            },
            finishDate: {
                display: '2019',
                year: 2019,
                month: 5
            },
            concern: [
                'Bachelor of Science in Mechanical Engineering',
                'Mechatronics Concentration'
            ]
        }
    ],
    professions: [
        {
            company: 'Protedyne',
            location: 'Windsor, CT',
            position: 'Software Intern',
            startDate: {
                display: 'May 2017',
                month: 5,
                year: 2017
            },
            finishDate: {
                display: 'May 2019',
                month: 5,
                year: 2019
            },
            description: [
                'Research/Experiment with modern technologies the team was considering adding to our stack',
                'Develop web based user interface for products using HTML/CSS/Angular',
                '24/7 Support for dozens of large scale production devices in the field'
            ]
        },
        {
            company: 'Protedyne',
            location: 'Windsor, CT',
            position: 'Associate Software Engineer',
            startDate:  {
                display: 'May 2019',
                month: 5,
                year: 2019
            },
            finishDate:  {
                display: 'September 2021',
                month: 9,
                year: 2021
            },
            description: [
                'Design/Develop several SpringBoot services to query and modify data stored in MongoDB and MySQL',
                'Upgrade web interfaces from AngularJS to leverage latest version of Angular',
                'Lead SW Engineer on AMR (Autonomous Mobile Robot) project, integrating third party AMR',
                'with our internal services via REST.'
            ]
        },
        {
            company: 'Protedyne',
            location: 'Windsor, CT',
            position: 'Software Engineer',
            startDate: {
                display: 'September 2021',
                month: 9,
                year: 2021
            },
            finishDate: null,
            description: [
                'Be a mentor for interns and newest employees, ensuring they have a smooth integration and have the support they need',
                'Rapidly develop prototype services/interfaces to show management and make changes based on feedback'
            ]
        },
        {
            company: 'KPI',
            location: 'CT',
            position: 'Chief Technology Officer',
            startDate: {
                display: 'March 2023',
                month: 3,
                year: 2023
            },
            finishDate: null,
            description: [
                'CTO and sole developer of startup, designing web sites for various customers & use cases.'
            ]
        }
    ],
    activities: [

    ],
    projects: [
        {
            name: 'Web User Interfaces',
            position: 'Lead Developer',
            location: 'Windsor, CT',
            startDate: {
                display: 'May 2017',
                month: 5,
                year: 2017
            },
            finishDate: null,
            description: [
                'Lead developer on all web user interfaces since 2018',
                'Learn industry standards for web design as well integrate modern libraries with our interfaces',
                'Programmed modularized Angular libraries that are consumed by other Angular interfaces',
                '(No photos available to show)'
            ],
            images: [

            ]
        },
        {
            name: 'KPI',
            position: 'Chief Technology Officer',
            location: 'Weatogue, CT',
            startDate: {
                display: 'May 2023',
                month: 5,
                year: 2023
            },
            finishDate: null,
            description: [
                'Sole developer of front end interfaces for all clients.',
                'Worked on a range of projects from start to finish (including this one), interacting with the customer the whole way.'
            ],
            images: [
                './resources/images/photo6.png',
                './resources/images/photo7.png',
                './resources/images/photo8.png'
            ]
        },
        {
            name: 'BrightLife',
            position: 'Personal IoT Smart Home Project',
            location: 'CT',
            startDate: {
                display: '2020',
                month: 1,
                year: 2020
            },
            finishDate: null,
            description: [
                'Design and develop IoT devices that leverage BalenaOS (Docker)',
                'Leverage Firebase for authentication of users, hosting interface, Firebase functions to purge expired states',
                'Integrate with GoogleCloud Pub/Sub for sending/receiving messages with devices',
                'Create sleek interface/IOS app for users to register/control their devices'
            ],
            images: [
                './resources/images/photo1.png',
                './resources/images/photo2.png',
                './resources/images/photo3.png',
                './resources/images/photo4.png',
                './resources/images/photo5.png'
            ]
        }
    ],
    certificates: [
        {
            name: 'WNE Best Innovative and Creative Design in a Senior Project',
            location: 'Westen New England University',
            date: {
                display: 'April 2019',
                month: 4,
                year: 2019
            },
            concern: null,
            description: '',
            type: Certificate.TYPE_AWARD
        },
        {
            name: 'LabCorp IT Chairmans Award',
            location: 'Protedyne',
            date: {
                display: 'December 2023',
                month: 12,
                year: 2023
            },
            concern: null,
            description: '',
            type: Certificate.TYPE_AWARD
        }
    ]
};