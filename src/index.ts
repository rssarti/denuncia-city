import express, { Request, Response } from "express";
import { database } from "./config/database.config";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    database.then(() => {
        console.log("Conexão com o banco de dados estabelecida com sucesso")
    }) ;
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
