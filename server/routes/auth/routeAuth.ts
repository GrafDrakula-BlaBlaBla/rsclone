import { Router } from "express";
import User from "../../models/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as config from "config";

const router = Router();

router.post("/authentication", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassValid = bcrypt.compareSync(password, user.password);

    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    console.log(user);

    const token = jwt.sign({ id: user.id }, config.get("jwtSecretKey"), {
      expiresIn: "1h",
    });

    console.log(token);

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: `Server error` });
  }
});

export default router;
