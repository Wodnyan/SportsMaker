export type Proficiency = "beginner" | "intermediate" | "professional";
export interface Entry {
  title: string;
  descripiton: string;
  proficiency: Proficiency;
  location: string;
  img_url: string;
  user_id?: number;
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
