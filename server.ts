import http from "http";
import "dotenv/config";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>
    HomePage
    </h1>
    <p>This is the first paragraph</p>
`);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>This is the about Page</h1>");
  } else {
    res.writeHead(404);
    res.write("<h1>Page not Found!</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
