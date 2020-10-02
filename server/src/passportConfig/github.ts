import github from "passport-github";
import dotenv from "dotenv";

dotenv.config();

const GithubStrategy = new github.Strategy(
  {
    clientID: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
    callbackURL: "/auth/github/callback",
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(profile);
  }
);
export default GithubStrategy;
