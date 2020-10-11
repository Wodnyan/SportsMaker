import { Router } from "express";
import entries from "./entries/entries.routes";

const router = Router();
router.use("/entries", entries);

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to SportsMaker",
  });
});

export default router;
