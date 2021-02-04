import { Router } from "express";
import User from "../../models/User";
import * as config from "config";
import * as jwt from "jsonwebtoken";

const router = Router();

router.post("/data-profile", async (req, res) => {
  try {
    const { idUser } = req.body;

    const decoded = jwt.decode(idUser);

    const user = await User.find({ _id: decoded["id"] });

    return res.json(user);
  } catch (e) {
    return res.json({ message: "Don't work server!" });
  }
});

export default router;
