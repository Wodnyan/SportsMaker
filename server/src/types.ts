export type Proficiency = "beginner" | "intermediate" | "professional";
export interface Entry {
  id: number;
  user_id: number;
  title: string;
  description: string;
  proficiency: Proficiency;
  location: string;
  img_url: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  last_login: null | Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
