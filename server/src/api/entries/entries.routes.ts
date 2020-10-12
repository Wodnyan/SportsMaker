import { Router } from "express";
import query from "./entries.queries";

const router = Router();

router.get("/", async (req, res) => {
  const entries = await query.find();
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
    const entry = await query.getById(Number(entryId));
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
    console.log(req.body);
    const entries = await query.insert(req.body);
    res.status(201);
    res.json({
      message: "New Entry",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/:entryId", async (req, res, next) => {
  try {
    const { entryId } = req.params;
    const deleteEntry = await query.deleteEntry(Number(entryId));
    if (deleteEntry === 0) {
      res.status(404);
      return next();
    } else {
      res.json({
        message: `Deleted Entry with the Id of ${entryId}`,
      });
    }
  } catch (err) {
    next();
  }
});

export default router;
