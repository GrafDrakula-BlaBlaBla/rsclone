import { v4 as uuid } from "uuid";
import { Router } from "express";

const router = Router();

// * GET DATA from DB
router.get("/", function (req, res, next) {
  // TODO GET somthing from DB
  res.json([]);
});

router.get("/:id", function (req, res, next) {
  const item = null;

  res.status(item ? 200 : 404).json(item);
});

// * POST DATA to DB
router.post("/", function (req, res, next) {
  const id = uuid();

  const { body } = req;

  body.id = id;

  // TODO need some code save to data base

  res.json(body);
});

// * PUT(SAVE) to DB
router.put("/", function (req, res, next) {
  const { body } = req;

  // TODO Save to DB

  res.json(body);
});

// * DELETE from DB
router.delete("/", function (req, res, next) {
  res.status(204).json(null);
});

export default router;
