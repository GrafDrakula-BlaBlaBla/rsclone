import { Router } from "express";
import Event from "../../models/Event";
import * as config from "config";
import * as jwt from "jsonwebtoken";

const router = Router();


router.post("/data-event-profile", async (req, res) => {
  try {
    const {
            idUser,
          } = await req.body

    const decoded = jwt.decode(idUser);

    const events = await Event.find({$or : [ {user: decoded['id'] }, { members:  {$in : [ decoded['id'] ]}}] }).sort( {startDate : -1} )

    return res.json( [events] );

  } catch (e) {

    return res.json({ message: "Don't work server!" });
  }
});

export default router;
