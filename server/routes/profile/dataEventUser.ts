import { Router } from "express";
import User from "../../models/User";
import * as config from "config";

const router = Router();

router.post("/data-event-profile", async (req, res) => {
  try {
    const {
            idUser,
          } = await req.body
    return res.json({ message: "Work server!" });

  } catch (e) {

    return res.json({ message: "Don't work server!" });
  }
});

export default router;
