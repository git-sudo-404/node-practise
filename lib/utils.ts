import http, { ServerResponse } from "http";
import * as fs from "fs/promises";

export const writeToRes = (res: http.ServerResponse, data: string) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(data);
  res.end();
};

export const handleInvalidReqMethod = (
  req: http.IncomingMessage,
  res: ServerResponse,
) => {
  res.writeHead(500, { "content-type": "text/plain" });
  res.write("Invalid Request Method");
  res.end();
};

export const handleNotFoundPage = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => {
  res.writeHead(404, { "content-type": "text/html" });

  fs.readFile("pages/NotFound.html", "utf-8")
    .then((data) => {
      res.write(data);
    })
    .catch((err) => {
      console.log("Error : ", err);
    });
};
