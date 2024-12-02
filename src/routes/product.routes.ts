import { Router } from "express";
import { getProducts,createProduct,updateProduct,getProduct, deleteProduct, } from "../controllers";
const router = Router();

router
.route('/products')
.get(getProducts )
.post(createProduct);
router
.route("/:id")
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct)

export default router;