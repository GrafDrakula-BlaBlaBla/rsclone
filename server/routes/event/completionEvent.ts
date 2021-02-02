import { Router } from "express";
import Event from "../../models/Event";

const router = Router();

router.post("/eventCompletion", async (req, res) => {
  try {
    const { idEvent } = req.body;
    console.info(idEvent);

    const event = await Event.findOne({ idEventCalendarGoogle: idEvent });

    console.log(event);
    debugger;
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({
      event,
    });
  } catch (e) {
    res.send({ message: `Server error` });
  }
});

export default router;
