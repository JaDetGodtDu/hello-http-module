import http from "node:http";
import { users } from "./users.js";
import { posts } from "./posts.js";

/* console.log(posts); */

const app = http.createServer((request, response) => {
  if (request.url === "/" && request.method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Working with HTTP module and routing!");
  } else if (request.url === "/users" && request.method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(users));
  } else if (request.url === "/posts" && request.method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(posts));
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
