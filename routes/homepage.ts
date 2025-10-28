import http, { ServerResponse } from "http";
import * as fs from "fs/promises";
import { handleNotFoundPage, writeToRes } from "../lib/utils.ts";
import url from "url";
import { ROOT_DIR } from "../path.ts";
import path from "path";

const homePageFile = path.join(ROOT_DIR, "pages", "HomePage.html");

function handleHomeRouteGET(
  req: http.IncomingMessage,
  res: http.ServerResponse,
) {
  fs.readFile(`${homePageFile}`, "utf-8")
    .then((data: string) => {
      writeToRes(res, data);
    })
    .catch((err: NodeJS.ErrnoException) => {
      console.log("Error : ", err);
    });
}

function handleHomeRoutePOST(req: http.IncomingMessage, res: ServerResponse) {
  console.log("POST METHOD FOR HOME PAGE");
}

export function handleHomeRoute(
  req: http.IncomingMessage,
  res: http.ServerResponse,
) {
  if (req.method === "GET") {
    handleHomeRouteGET(req, res);
  } else if (req.method === "POST") {
    handleHomeRoutePOST(req, res);
  } else {
    handleNotFoundPage(req, res);
  }
}
