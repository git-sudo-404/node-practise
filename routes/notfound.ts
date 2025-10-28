import http from "http";

export const handleNotFound = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => {
  res.writeHead(404, { "content-type": "text/plain" });
  res.end("404 - Page Not Found");
};
