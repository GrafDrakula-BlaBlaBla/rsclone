import { Router } from "express";
import Event from "../../models/Event";
import * as config from "config";

const router = Router();


router.post("/data-now-event", async (req, res) => {
  try {

    const now = new Date();

    const events =  await Event.find({$and : [ { endDate: { $gte: now.toJSON() } }, { startDate:  { $lte: now.toJSON() } }] })
    return res.json( [events] );

  } catch (e) {

    return res.json({ message: "Don't work server!" });
  }
});

export default router;
