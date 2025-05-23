import { Request, Response } from "express";
import { DetailTaskService } from "../../services/task/DetailTaskService";

class DetailTaskController {
    async handle(req: Request, res: Response){
        const task_id = req.params.task_id as string;

        const detailTaskService = new DetailTaskService();

        const task = await detailTaskService.execute({
            task_id
        })

        return res.json(task);
    }    
}

export { DetailTaskController }