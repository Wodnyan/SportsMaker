export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Filters {
  experience: "beginner" | "intermediate" | "pro" | "";
  sortBy: "relevance" | "recent";
  typeOfSport: "outdoors" | "indoors" | "";
}