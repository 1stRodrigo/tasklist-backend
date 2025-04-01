import { Request, Response } from "express";
import { ListTasksService } from "../../services/task/ListTasksService";

class ListTasksController {
    async handle(req: Request, res: Response){
        const listTasksService = new ListTasksService

        const tasks = await listTasksService.execute();

        return res.json(tasks)
    }
}

export { ListTasksController}