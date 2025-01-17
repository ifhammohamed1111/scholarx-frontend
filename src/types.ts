import { type z } from 'zod';
import {
  type MentorApplicationSchema,
  type MenteeApplicationSchema,
} from './schemas';

export interface Category {
  category: string;
  uuid: string;
  created_at?: string;
  updated_at?: string;
}
export interface Mentor {
  uuid: string;
  created_at: string;
  updated_at: string;
  state: string;
  category: Category;
  application: MentorApplication;
  availability: boolean;
  profile: Profile;
}

export type MenteeApplication = z.infer<typeof MenteeApplicationSchema>;

export type MentorApplication = z.infer<typeof MentorApplicationSchema>;

export interface Mentee {
  state: string;
  application: MenteeApplication;
  profile: string;
  mentor: string;
  uuid: string;
  created_at: Date;
  updated_at: Date;
  certificate_id: string;
  journal: string;
}

export interface Profile {
  created_at: Date;
  updated_at: Date;
  primary_email: string;
  contact_email: string;
  first_name: string;
  last_name: string;
  image_url?: string;
  linkedin_url: string;
  type: 'DEFAULT' | 'ADMIN';
  uuid: string;
}

export interface MentorCardType {
  mentorId: string;
  category: string;
  profile: {
    contact_email: string;
    first_name: string;
    last_name: string;
    image_url?: string | undefined;
    linkedin_url: string;
    position: string;
  };
}
