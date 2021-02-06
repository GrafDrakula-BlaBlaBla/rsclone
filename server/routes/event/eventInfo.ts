import { Router } from "express";
import Event from '../../models/Event';

const routerEventInfo = Router();

routerEventInfo.post("/eventInfo", async (req, res) => {
  try {
    const { googleId } = await req.body;

    const currentEvent = await Event.findOne({idEventCalendarGoogle: googleId});

    return res.json(currentEvent);
  } catch (e) {
    res.send({ message: `Server ERROR ${e}` });
  }
});

export default routerEventInfo;
