export interface User {
  id: number;
  username: string;
  email: string;
}

export type Proficiencies = "beginner" | "intermediate" | "pro" | "";
export type TypeOfSport = "outdoors" | "indoors" | "";

export interface Entry {
  id: number;
  userId: number;
  title: string;
  description: string;
  imgUrl: string;
  proficiency: Proficiencies;
}

export interface Filters {
  experience: Proficiencies;
  sortBy: "relevance" | "recent";
  typeOfSport: TypeOfSport;
}
