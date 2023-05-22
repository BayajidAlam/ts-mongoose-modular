import { NextFunction, Request, Response } from "express";
import { getAllProductFromDB, getProductByIdFormDb } from "./product.service";

// get all product
export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await getAllProductFromDB();
  res.send(product);
};

// get a product
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductByIdFormDb(id);
  res.send(product);
};
