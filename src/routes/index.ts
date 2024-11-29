import { Router } from "express";
import authRoutes from "./auth.routes";
import orderRoutes from "./order.routes";
import productRoutes from "./product.routes";
import webhookRoutes from "./webhook.routes";

const router = Router();

router.use(authRoutes);
router.use(orderRoutes);
router.use(productRoutes);
router.use(webhookRoutes);

export default router;