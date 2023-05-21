import { NextFunction, Request, Response } from "express";
import { getAllProductFromDB } from "./product.service";

export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = await getAllProductFromDB();
  res.send(product);
};
