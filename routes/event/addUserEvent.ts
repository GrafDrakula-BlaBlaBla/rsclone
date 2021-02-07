import { Router } from "express";
import Event from "../../models/Event";

const router = Router();

router.post("/add-user-event", async (req, res) => {
  try {
    const { idEvent,
            idUser } = await req.body;

    const event = await Event.update( { _id: idEvent },  {  $push: { members: idUser } });

    res.json({
      message: "Участник добавлен",
    });
  } catch (e) {
    res.send({ message: `SERVER ERROR ${e}` });
  }
});

export default router;
