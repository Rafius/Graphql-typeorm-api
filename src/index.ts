import "reflect-metadata";
import {startServer} from "./app";
import {connect} from "./config/typeorm";

async function main() {
  connect();
  const app = await startServer();
  app.listen(3001);
  console.log("server listening", 3001);
}

main();
