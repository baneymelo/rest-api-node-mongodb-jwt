import { Router } from "express";
const router = Router();

import * as authCtrl from "../controlllers/auth.controller";

router.post('/signup', authCtrl.signUp)
router.post('/signin', authCtrl.signIn)

export default router;