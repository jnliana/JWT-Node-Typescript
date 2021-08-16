import { Router } from "express";
const router = Router();

import passport from "passport";

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("all products with price and detail");
  }
);

export default router;
