import { getRepository } from "typeorm";
import { Tasks } from "../entity/Tasks";
import { Request, Response } from "express";
import { resolve } from "url";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await getRepository(Tasks).find();
  return res.json(tasks);
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await getRepository(Tasks).findOne(id);
  res.json(task);
};

export const saveTask = async (req: Request, res: Response) => {
  const task = await getRepository(Tasks).save(req.body);
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  const task = await getRepository(Tasks).update(id, req.body);

  if (task.affected === 1)
    return res.json(await getRepository(Tasks).findOne(id));

  res.status(404).json({ message: "Task not found" });
};

export default { getTasks, getTask, saveTask, updateTask };
