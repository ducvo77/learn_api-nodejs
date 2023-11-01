import { Request, Response } from "express";

const express = require("express");

const app = express();

const hostname = "localhost";
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, hostname, () => {
  console.log(`Running server at http://${hostname + ":" + port}/`);
});
