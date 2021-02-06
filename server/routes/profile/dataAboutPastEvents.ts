import { Router } from "express";
import Event from "../../models/Event";
import * as config from "config";

const router = Router();


router.post("/data-past-event", async (req, res) => {
  try {

    const now = new Date();

    const events = await Event.find({ endDate: { $lt: now.toJSON() } })

    return res.json( [events] );

  } catch (e) {

    return res.json({ message: "Don't work server!" });
  }
});

export default router;
