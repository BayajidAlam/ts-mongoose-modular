import { Router } from "express";
import { getAllProduct } from "./product.controller";

const router:Router = Router();

router.get("/allProducts", getAllProduct);

export default router;