import { Request, Response } from "express";
import { RemoveTaskService } from "../../services/task/RemoveTaskService";

class RemoveTaskController {
    async handle(req: Request, res: Response){
        const task_id = req.query.task_id as string;
        const tag_id = req.query.task_id as string;

        const removeTask = new RemoveTaskService();

        const task = await removeTask.execute({
            task_id,

        });

        return res.json(task);
    }
}

export { RemoveTaskController }