import http from "http";
import "dotenv/config";
import { handleHomeRoute } from "./routes/homepage";
import { handleAboutRoute } from "./routes/aboutpage";

const PORT = process.env.PORT;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      processGetRequests(req, res);
    } else if (req.method === "POST") {
      processPostRequests(req, res);
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("WRONG Request Mothod");
    }
  },
);

server.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});

const processGetRequests = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => {
  if (req.url === "/") {
    handleHomeRoute(req, res);
  } else if (req.url === "/about") {
    handleAboutRoute(req, res);
  }
};

const processPostRequests = (
  req: http.IncomingMessage,
  http: http.ServerResponse,
) => { };
