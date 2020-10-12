import { Router } from "express";
import entries from "./entries/entries.routes";
import users from "./users/users.routes";

const router = Router();
router.use("/entries", entries);
router.use("/users", users);

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to SportsMaker",
  });
});

export default router;
