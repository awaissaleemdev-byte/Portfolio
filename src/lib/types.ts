import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

export interface Profile {
  name: string;
  avatarId: string;
  bio: string;
  location: string;
  email: string;
  socials: {
    name: string;
    url: string;
    icon: ComponentType<LucideProps>;
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageId: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export interface Skill {
  id: string;
  name: string;
  icon?: ComponentType<LucideProps>;
}
