import { Router } from "express";
import Event from "../../models/Event";

// completed

const router = Router();

router.post("/compliteEvent", async (req, res) => {
  try {
    const { idEvent, completed } = await req.body;

    const event = await Event.findById(idEvent);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    Event.updateOne({ _id: idEvent }, { $set: { completed: true } });

    // await Event.updateOne({ _id: idEvent }, { $set: { completed: completed } });

    res.json({
      status,
    });
  } catch (e) {
    res.send({ message: `SERVER ERROR ${e}` });
  }
});

export default router;
