import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import "dotenv/config";
import { dbConnect } from "./app/utils/dbConnect";

// middleware
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db connections
dbConnect();

// routes

// default route

export { app };