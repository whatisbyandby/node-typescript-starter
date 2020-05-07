import express from "express";
import SwaggerUI from "swagger-ui-express";
import { swaggerDocument } from "./swagger";

const app = express();
const port = 3000;
const sayHelloTo = (name: string): string => `Hello ${name}!`;

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.get("/", (req, res) => res.send(sayHelloTo("World")));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
