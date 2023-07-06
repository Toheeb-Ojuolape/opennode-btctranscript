declare const process: any;
const express = require("express");
import cors from "cors";
import {Request, Response, NextFunction } from "express-serve-static-core";
import validateRequest from "./src/middleware/validateRequest";
const port = process.env.PORT || 3000;
const routes = require("./src/router");
require("dotenv").config();

const config = {
  host: process.env.API_HOST,
  url: process.env.API_URL
};

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.PROJECT_URL,
    credentials: true,
  })
);



//middlewares

//check if all requests are formatted properly
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  validateRequest(err,req,res,next)
})

//render something simple
app.get("/", function (req: Request, res: Response) {
  res.send("Sun's gonna shine on everything you do");
});

const server = app.listen(port, config.host, function () {
  console.log("Server listening on port:  " + port);
});

app.use(routes);
