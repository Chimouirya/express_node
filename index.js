import express, { json }  from "express";
import connectdb from "./connectdb/connectdb.js";
// import mongoose from "mongoose";
import firstRouter from "./routes/firstroute.js";
import productRouter from "./routes/productRoute.js"
let expressApp = express();
let port ='8000'
expressApp.use(json())

expressApp.use("", firstRouter)
expressApp.use("/prods", productRouter)
connectdb()


expressApp.listen(port,()=>{console.log('The port is listening at 8000')});
