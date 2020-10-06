import { Router } from "express";
import bcrypt from "bcrypt";
import query from "./auth.queries";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    const insertNewUser = await query.addNewUser(user);
    res.json({
      message: "Created a User",
    });
  } catch (err) {
    next(err);
  }
});
router.get("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  const userInfo = await query.getUserInfo(Number(userId));
  res.json({
    userInfo,
  });
});
router.delete("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  const userInfo = await query.deleteUser(Number(userId));
  res.json({
    message: `Deleted user with the id of ${userId}`,
  });
});
router.patch("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  const update = req.body;
  try {
    const updated = await query.updateUser(Number(userId), update);
    res.json({
      message: `Updated user with the id of ${userId}`,
      updated,
    });
  } catch (err) {
    next(err);
  }
});
export default router;
