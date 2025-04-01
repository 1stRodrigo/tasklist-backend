import { Request, Response } from 'express';
import { CreateTaskService } from '../../services/task/CreateTaskService';

class CreateTaskController{
    async handle(req: Request, res: Response){

        const {title, description, tag_name, due_date, status, priority } = req.body;
        const user_id = req.user_id;

        const createTaskService = new CreateTaskService();

        const task = await createTaskService.execute({
            title,
            description,
            tag_name,
            user_id,
            due_date,
            status,
            priority,
        });

        return res.json(task)
    }
}

export { CreateTaskController }