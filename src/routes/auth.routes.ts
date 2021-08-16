import express, { Router } from "express";
const router = Router();

import { signup, signin } from "../controllers/user.controller";

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
