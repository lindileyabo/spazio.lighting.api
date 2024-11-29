import { Router } from "express";
import { orderController } from "../controllers/order.controller";
const router = Router();

router.get('/order', orderController);

export default router;