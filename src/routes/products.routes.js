import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controlllers/products.controller";

router.post('/', productsCtrl.createProduct);
router.get('/', productsCtrl.getProducts);
router.get('/:productId', productsCtrl.getProductById);
router.put('/:productId', productsCtrl.updateProductById);
router.delete('/:productId', productsCtrl.deleteProductById);

export default router;