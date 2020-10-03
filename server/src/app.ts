import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";
import { notFoundHandler, errorHandler } from "./middlewares/middlewares";
import api from "./routes/api/api";
import auth from "./routes/auth/auth";
import passportConfig from "./passportConfig/config";

dotenv.config();

const app = express();

passportConfig();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(
  cookieSession({
    name: "auth_session",
    keys: [process.env.SESSION_KEY!],
    httpOnly: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/v1", api);
app.use("/auth", auth);

app.use(notFoundHandler);
//Error handler
app.use(errorHandler);

export default app;
