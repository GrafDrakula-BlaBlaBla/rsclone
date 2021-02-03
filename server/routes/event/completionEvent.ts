import { Router } from "express";
import Event from "../../models/Event";

const router = Router();

router.post("/eventCompletion", async (req, res) => {
  try {
    const { idEvent } = await req.body;

    const event = await Event.findById(idEvent);

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
