import { Router } from "express";
import Event from "../../models/Event";
import * as config from "config";

const routerEvent = Router();

routerEvent.post("/create", async (req, res) => {
  try {
    const {
      nameEvent,
      startDate,
      endDate,
      location,
      goal,
      description,
    } = req.body;

    const event: any = new Event({
      nameEvent,
      startDate,
      endDate,
      location,
      goal,
      description,
    });

    await event.save();

    return res.json({ message: `Event was created` });
  } catch (e) {
    res.send({ message: `SERVWR ERROR ${e}` });
  }
});

export default routerEvent;
