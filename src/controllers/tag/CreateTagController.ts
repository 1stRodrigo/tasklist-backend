import { Request, Response } from "express";
import { CreateTagService } from "../../services/tag/CreateTagService";

class CreateTagController{
    async handle(req: Request, res: Response){

        const { name } = req.body
        const user_id = req.user_id;

        const createTagService = new CreateTagService();

        const tag = await createTagService.execute({
            name,
            user_id
        });

        return res.json(tag);
    }
}

export { CreateTagController }