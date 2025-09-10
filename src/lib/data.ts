import {
  Github,
  Linkedin,
  Globe,
  Mail,
  BrainCircuit,
  Database,
  Cloud,
  Component,
  Code,
  PenTool,
} from 'lucide-react';
import type { Profile, Education, Project, Skill } from './types';

export const portfolioData: {
  profile: Profile;
  education: Education[];
  projects: Project[];
  skills: Skill[];
} = {
  profile: {
    name: 'Alex Doe',
    avatarId: '1',
    bio: 'Full-stack developer with a passion for building modern web applications and exploring the potential of AI. Turning ideas into elegant, functional, and user-friendly software solutions.',
    location: 'San Francisco, CA',
    email: 'alex.doe@example.com',
    socials: [
      { name: 'GitHub', url: 'https://github.com', icon: Github },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
      { name: 'Website', url: '#', icon: Globe },
    ],
  },
  education: [
    {
      id: 'edu1',
      degree: 'M.S. in Computer Science',
      institution: 'Stanford University',
      startDate: '2020',
      endDate: '2022',
    },
    {
      id: 'edu2',
      degree: 'B.S. in Software Engineering',
      institution: 'University of California, Berkeley',
      startDate: '2016',
      endDate: '2020',
    },
  ],
  projects: [
    {
      id: 'proj1',
      title: 'AI-Powered Content Platform',
      description:
        'A web platform that uses generative AI to help users create and curate content for their blogs and social media.',
      imageId: '101',
      tags: ['Next.js', 'TypeScript', 'GenAI', 'Firebase'],
      links: {
        github: 'https://github.com',
        demo: '#',
      },
    },
    {
      id: 'proj2',
      title: 'E-Commerce Analytics Dashboard',
      description:
        'A comprehensive dashboard for e-commerce sites to track sales, user engagement, and product performance in real-time.',
      imageId: '102',
      tags: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
      links: {
        github: 'https://github.com',
        demo: '#',
      },
    },
    {
      id: 'proj3',
      title: 'Cloud Storage Solution',
      description:
        'A secure and scalable cloud storage application with file versioning and sharing capabilities, built on AWS.',
      imageId: '103',
      tags: ['AWS S3', 'Lambda', 'API Gateway', 'Python'],
      links: {
        github: 'https://github.com',
        demo: '#',
      },
    },
  ],
  skills: [
    { id: 'skill1', name: 'TypeScript', icon: Code },
    { id: 'skill2', name: 'React', icon: Component },
    { id: 'skill3', name: 'Next.js', icon: Component },
    { id: 'skill4', name: 'Node.js', icon: Code },
    { id: 'skill5', name: 'Firebase', icon: Database },
    { id: 'skill6', name: 'SQL', icon: Database },
    { id: 'skill7', name: 'GenAI', icon: BrainCircuit },
    { id: 'skill8', name: 'Cloud Services', icon: Cloud },
    { id: 'skill9', name: 'UI/UX Design', icon: PenTool },
  ],
};
