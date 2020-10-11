import { Router } from "express";
import queries from "./entries.queries";

const router = Router();

router.get("/", async (req, res) => {
  const entries = await queries.find();
  res.json({
    message: "All Entries",
    entries,
  });
});

router.get("/:entryId", async (req, res, next) => {
  try {
    const { entryId } = req.params;
    if (isNaN(Number(entryId))) {
      res.status(404);
      return next();
    }
    const entry = await queries.getById(Number(entryId));
    res.json({
      message: `Entry With the Id of ${entry.id}`,
      entry: {
        id: entry.id,
        userId: entry.user_id,
        title: entry.title,
        description: entry.description,
        proficiency: entry.proficiency,
        location: entry.location,
        imgUrl: entry.img_url,
      },
    });
  } catch (err) {
    if (err.message === "Cannot read property 'id' of undefined") {
      res.status(404);
      return next();
    }
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const entries = await queries.insert(req.body);
    res.json({
      message: "New Entry",
    });
  } catch (err) {
    next(err);
  }
});

export default router;
