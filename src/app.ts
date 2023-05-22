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

// render ejs 
app.set('view engine', "ejs")

// db connections
dbConnect();

// routes
import productRoute from './app/modules/Product/product.route'

// default routes
app.get('/', (req,res)=>{
  res.send('Hello World')
})

// custom routes
app.use("/api/v1/products",productRoute);

export { app };
