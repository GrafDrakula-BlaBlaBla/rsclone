import { Router } from "express";
import User from '../models/User';

const routerEventInfo = Router();

routerEventInfo.post("/userInfo", async (req, res) => {
  try {
    const { userId } = await req.body;

    const currentUser: JSON = await User.findById(userId);

    return res.json(currentUser);
  } catch (e) {
    res.send({ message: `Server ERROR ${e}` });
  }
});

export default routerEventInfo;