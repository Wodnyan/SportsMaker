import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import dotenv from "dotenv";
import { notFoundHandler, errorHandler } from "./middlewares/middlewares";
import api from "./api/api";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/v1", api);

app.use(notFoundHandler);
//Error handler
app.use(errorHandler);

export default app;
