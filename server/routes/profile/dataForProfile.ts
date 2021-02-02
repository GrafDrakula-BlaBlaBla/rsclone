import { Router } from "express";
import User from "../../models/User";
import * as config from "config";

const router = Router();

router.post("/data-profile", async (req, res) => {
  try {
    const { idUser } = req.body;

    const user = await User.find({ _id: idUser });
    return res.json(user);
  } catch (e) {
    return res.json({ message: "Don't work server!" });
  }
});

export default router;
