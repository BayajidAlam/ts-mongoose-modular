import { Router } from "express";
import { getAllProduct, getProductById } from "./product.controller";

const router:Router = Router();

router.get("/allProducts", getAllProduct);
router.get("/details/:id", getProductById);

export default router;