import http from "http";
import { handleNotFoundPage } from "../lib/utils.ts";

export const handleNotFound = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => {
  handleNotFoundPage(req, res);
};
