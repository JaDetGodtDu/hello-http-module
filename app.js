import http from "node:http";
import * as fs from 'fs/promises';
/* import { users } from "./users.js"; */

const app = http.createServer(async (request, response) => {

  if (request.url === "/" && request.method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Working with HTTP module and routing!");
  } 
  else if (request.url === "/users" && request.method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const json = await fs.readFile("users.json")
    response.end(json);
  } 
  else if (request.url === "/posts" && request.method === "GET") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const json = await fs.readFile("posts.json");
    response.end(json);
  }
  else if (request.url ==="/users" && request.method ==="POST"){
    const newUser = {
      id: new Date().getTime(),
      image: "",
      mail: "satan@hell.com",
      name: "Test User",
      title: "Testerino"
    };

    const json = await fs.readFile("users.json");
    /* console.log(json); */

    const users = JSON.parse(json);
    console.log(users);

    users.push(newUser)

    const usersJSON = JSON.stringify(users)
    await fs.writeFile("users.json", usersJSON);

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(usersJSON))
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
