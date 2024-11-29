import { Router } from 'express';
import { installApp } from '../controllers/auth.controller';

const router = Router();

router.get('/install', installApp);

export default router;
