import { NextFunction, Request, Response } from "express";
import { getAllProductFromDB, getProductByIdFormDb } from "./product.service";
import { sendApiResponse } from "../../utils/responseHandlar";

// get all product
export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductFromDB();
  sendApiResponse(res, 200, true, products);
};

// get a product
export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductByIdFormDb(id);
  sendApiResponse(res, 200, true, product);
};
