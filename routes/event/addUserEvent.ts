import { Router } from "express";
import Event from "../../models/Event";
import User from "../../models/User";

const router = Router();

router.post("/add-user-event", async (req, res) => {
  try {
    const { idEvent,
            idUser } = await req.body;

    const event = await Event.update( { _id: idEvent },  {  $push: { members: idUser } });
    await User.update({_id : idUser}, {$inc: {range: 10}});

    res.json({
      message: "Участник добавлен",
    });
  } catch (e) {
    res.send({ message: `SERVER ERROR ${e}` });
  }
});

export default router;
