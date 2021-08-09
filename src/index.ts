import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import routes from "./routes";
import { Tasks } from "./entity/Tasks";
import { appendFile } from "fs";

const app = express();
createConnection();
app.use(bodyParser.json());
app.use(routes);

app.listen(3500);
