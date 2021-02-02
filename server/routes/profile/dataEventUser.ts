import { Router } from "express";
import Event from "../../models/Event";
import * as config from "config";

const router = Router();


router.post("/data-event-profile", async (req, res) => {
  try {
    const {
            idUser,
          } = await req.body

    const events = await Event.find({$or : [ {user: idUser }, { members:  {$in : [ idUser ]}}] }).sort( {startDate : -1} )

    return res.json( [events] );

  } catch (e) {

    return res.json({ message: "Don't work server!" });
  }
});

export default router;
