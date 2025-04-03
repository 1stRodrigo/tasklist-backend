import { Request, Response } from "express";
import { ListByTagService } from "../../services/task/ListByTagService";

class ListByTagController{
    async handle(req: Request, res: Response) {
        const tag_id = req.query.tag_id as string;

        const listByTag = new ListByTagService();

        const tasks = await listByTag.execute({
            tag_id
        });

        return res.json(tasks)

    }
}

export { ListByTagController }