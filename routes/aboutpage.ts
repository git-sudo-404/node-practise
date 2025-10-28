import http, { ServerResponse } from "http";
import { handleInvalidReqMethod } from "../lib/utils.ts";
import * as fs from "fs/promises";
import { ROOT_DIR } from "../path.ts";
import path from "path";

const aboutPageFile = path.join(ROOT_DIR, "pages", "About.html");

function handleAboutRouteGET(req: http.IncomingMessage, res: ServerResponse) {
  fs.readFile(`${aboutPageFile}`, "utf-8")
    .then((data: string) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    })
    .catch((err: NodeJS.ErrnoException) => {
      console.log("Error : ", err);
    });
}

function handleAboutRoutePOST(req: http.IncomingMessage, res: ServerResponse) {
  console.log("POST METHOD FOR ABOUT PAGE");
}

export const handleAboutRoute = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => {
  if (req.method === "GET") {
    handleAboutRouteGET(req, res);
  } else if (req.method === "POST") {
    handleAboutRoutePOST(req, res);
  } else {
    handleInvalidReqMethod(req, res);
  }
};
