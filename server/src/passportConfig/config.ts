import passport from "passport";
import GithubStrategy from "./github";

const passportConfig = () => {
  passport.deserializeUser((user, done) => {});

  passport.serializeUser((user, done) => {});
  passport.use(GithubStrategy);
};

export default passportConfig;
