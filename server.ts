import http from "http";
import "dotenv/config";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/json" });
  res.write(
    JSON.stringify({
      firstName: "Chiranjeev",
      lastName: "Prasannaa",
      CP: "Grandmaster",
      job: "SDE at Google",
      para: "Let's see if this paragrapgh turns into an array"
        .trim()
        .split(" "),
    }),
  );
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
