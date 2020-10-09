import { Router } from "express";
import bcrypt from "bcrypt";
import query from "./auth.queries";
import { User } from "../../types";

const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    const insertNewUser = await query.addNewUser(user);
    res.json({
      message: "Created a User",
    });
  } catch (err) {
    if (
      (err.message = `insert into \"user\" (\"email\", \"password\", \"username\") values ($1, $2, $3) - duplicate key value violates unique constraint \"user_email_unique\"`)
    ) {
      const error = new Error("Email is Already in Use");
      res.status(409);
      next(error);
    }
    next(err);
  }
});
router.post("/login", async (req, res, next) => {
  try {
    const user: User = req.body;
    const queriedUser: User = await query.getUserInfo(user);
    console.log(queriedUser);
    if (queriedUser === undefined) {
      const error = new Error("User Not Found");
      res.status(404);
      next(error);
    } else {
      bcrypt.compare(user.password, queriedUser.password, (err, result) => {
        if (err) {
          next(err);
        } else if (!result) {
          const error = new Error("Incorrect Password");
          res.status(401);
          next(error);
        } else {
          res.json({
            message: "Successful Authentication",
            user: {
              id: queriedUser.id,
              username: queriedUser.username,
              email: queriedUser.email,
            },
          });
        }
      });
    }
  } catch (err) {
    next(err);
  }
});
router.get("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  const userInfo = await query.getUserInfoById(Number(userId));
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
