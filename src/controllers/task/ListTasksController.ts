import { Request, Response } from "express";
import { ListTasksService } from "../../services/task/ListTasksService";

class ListTasksController {
    async handle(req: Request, res: Response){
        const listTasksService = new ListTasksService
        const user_id = req.user_id;

        const tasks = await listTasksService.execute(user_id);
        
        return res.json(tasks)
    }
}

export { ListTasksController}