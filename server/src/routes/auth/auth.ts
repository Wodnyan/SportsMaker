import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/github", passport.authenticate("github"));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000/",
  })
);
router.get("/", (req, res) => {
  res.send("hello, world");
});

export default router;
