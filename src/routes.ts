import { Router, Request, Response } from "express";
import { RequestOptions } from "https";
import TasksController from "./controller/TasksController";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});
routes.get("/tasks", TasksController.getTasks);
routes.get("/task/:id", TasksController.getTask);
routes.post("/tasks", TasksController.saveTask);
routes.put("/tasks/:id", TasksController.updateTask);

export default routes;
