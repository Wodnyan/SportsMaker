import { Router } from "express";
import User from "./users.model";

const router = Router();

router.get("/", async (req, res, next) => {
  const users = await User.query()
    .select("id", "email", "username", "created_at")
    .where("deleted_at", null);
  res.json({
    users,
  });
});

export default router;
