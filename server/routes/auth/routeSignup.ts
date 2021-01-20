import { Router } from "express";
import User from "../../models/User";
import * as bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";

const router = Router();

router.post(
  `/registration`,
  [
    check(`email`, `Uncorrect email`).isEmail(),
    check(
      `password`,
      `Password must be longe than 4 and shorter than 12`,
    ).isLength({ min: 4, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors) {
        return res.status(400).json({ message: `Uncorrect request`, errors });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} alredy exist` });
      }

      const hashPassword = await bcrypt.hash(password, 5);

      const user = new User({ email, password: hashPassword });

      await user.save();

      return res.json({ message: `User was created` });
    } catch (e) {
      res.send({ message: `SERVER ERROR ${e}` });
    }
  },
);

export default router;
