import http from "http";
import "dotenv/config";
import { handleNotFound } from "./routes/notfound.ts";
import { handleHomeRoute } from "./routes/homepage.ts";
import { handleAboutRoute } from "./routes/aboutpage.ts";
import url, { fileURLToPath } from "url";
import path from "path";

const PORT = process.env.PORT;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/") {
      handleHomeRoute(req, res);
    } else if (req.url === "/about") {
      handleAboutRoute(req, res);
    } else {
      handleNotFound(req, res);
    }
  },
);

server.listen(PORT, () => {
  console.log("SERVER LISTENING ON PORT : ", PORT);
});
