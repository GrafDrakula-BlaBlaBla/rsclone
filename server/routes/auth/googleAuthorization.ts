import { Router } from "express";
import User from "../../models/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as config from "config";

const router = Router();

router.post("/authentication-google", async (req, res) => {
  try {
    const {
      eventTitle,
      startDate,
      endDate,
      location,
      goal,
      description, }  = req.body.event;

    return res.json({ message: eventTitle.toString() });

  } catch (e) {
    return res.json({ message: "Don't work!" });
  }
});

export default router;
