import path from "path";
import {createConnection} from "typeorm";

export async function connect() {
  await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "graphqlts",
    entities: [path.join(__dirname, "../entity/**/**.ts")],
    synchronize: true
  });

  console.log("Connected");
}
