import express from "express";
import { Request, Response } from "express";
import http from "http";
import "dotenv/config";

const app = express();

//NOTE: use this line so as to parse the incoming json streams into req.body
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server running on PORT : ", process.env.PORT);
});

//NOTE: This just sends the status alone , even the json is being sent in code , it just sends only the status code and returns.
// app.get("/", (req, res) => {
//   res.sendStatus(200);
//   res.send({
//     name: "redCoder",
//   });
// });

//FIX: You can't use http.IncomingMessage & http.ServerResponse from "http" for the (req,res) of express , instead use Request & Response from express.

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ name: "redcoder" });
});

app.post("/", (req: Request, res: Response) => {
  console.log("GOT NEW REQUEST  :");
  console.log(req.body);
  res.status(200).send({
    message: "Request recieved successfuly",
  });
});
