import { Router } from "express";
import entries from "./entries/entries.routes";
import users from "./users/users.routes";
import auth from "./auth/auth.routes";

const router = Router();
router.use("/entries", entries);
router.use("/users", users);
router.use("/auth", auth);

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to SportsMaker",
  });
});

export default router;
