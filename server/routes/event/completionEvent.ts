import { Router } from "express";
import Event from "../../models/Event";

const router = Router();

router.post("/eventCompletion", async (req, res) => {
  try {
    console.log(req);

    const { idEvent } = req.body;

    console.log(idEvent);

    const event = await Event.findOne({ idEventCalendarGoogle: idEvent });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    console.log(event);

    res.json({
      event,
    });
  } catch (e) {
    res.send({ message: `Server error` });
  }
});

export default router;
