import { Request, Response } from "express";
import { FinishTaskService } from "../../services/task/FinishTaskService";
import prismaClient from "../../prisma";

class FinishTaskController {
    async handle(req: Request, res: Response){
        const { task_id } = req.body;

        const finishTaskService = new FinishTaskService();

        const task = await finishTaskService.execute({
            task_id
        })

        return res.json(task)

    }
}

export { FinishTaskController }