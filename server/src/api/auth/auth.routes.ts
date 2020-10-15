import { Router } from "express";
import User from "../users/users.model";
import bcrypt from "bcrypt";
const yup = require("yup"); // For some reason can't import it with typescript, it returns undefined

const router = Router();

const schema = yup.object().shape({
  username: yup.string().trim().min(2).matches(/\w+/i).required(),
  email: yup.string().trim().email().required(),
  password: yup
    .string()
    .min(7)
    .max(100)
    .matches(/[^A-Za-z0-9]/, "Password must contain a special character")
    .matches(/[a-z]/, "Password must contain a lowercase character")
    .matches(/[A-Z]/, "Password must contain an uppercase character")
    .matches(/[0-9]/, "Password must contain a number")
    .required(),
});
router.post("/signup", async (req, res, next) => {
  const { email, username, password } = req.body;
  try {
    const newUser = await schema.validate(
      {
        username,
        email,
        password,
      },
      {
        abortEarly: false,
      }
    );
    const existingUser = await User.query().where({ email }).first();
    if (existingUser) {
      const error = new Error("Email in use.");
      res.status(409);
      return next(error);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertedUser = await User.query<any>().insert({
      email,
      username,
      password: hashedPassword,
    });
    res.json({
      message: "Successful Sign Up",
      user: {
        id: insertedUser.id,
        username: insertedUser.username,
        email: insertedUser.email,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400);
      return next(error);
    }
    next(error);
  }
});
router.post("/login", async (req, res, next) => {
  res.json({
    message: "Login",
  });
});

export default router;
