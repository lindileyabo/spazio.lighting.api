import { Router } from "express";
import { productController } from "../controllers/product.controller";
const router = Router();

router.get('/product', productController);

export default router;