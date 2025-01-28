import { Router } from 'express';
import { authController } from '../controllers/';

const router = Router();

router.get("/auth/callback", authController);

export default router;
