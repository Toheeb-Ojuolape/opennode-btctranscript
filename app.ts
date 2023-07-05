const express = require("express")
import cors from "cors";
import { Request, Response } from "express-serve-static-core";
const port = process.env.PORT || 3000;


const config = {
    host: process.env.API_HOST,
    url: process.env.API_URL,
  };

const app = express();
app.use(express.json()); 

app.use(
  cors({
    origin: process.env.PROJECT_URL,
    credentials: true,
  })
);


app.get("/", function (req: Request, res: Response) {
       res.send(
        'Sun\'\s gonna shine on everything you do' 
      );
  });


  const server = app.listen(port, config.host, function () {
    console.log("Server listening on port: " + port);
  });
  