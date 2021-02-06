import { Router } from "express";
import Event from "../../models/Event";
import * as config from "config";

const router = Router();

router.post("/create-map-main", async (req, res) => {
  try {
    const allEvent = await Event.find();
    return res.json(allEvent);
  } catch (e) {

    return res.json({ message: "Don't work!" });
  }
});

export default router;
