import { Request, Response } from 'express';
import { ListTagService } from '../../services/tag/ListTagService';

class ListTagController{
    async handle(req: Request, res: Response){

        const listTagService = new ListTagService();

        const tag = await listTagService.execute();

        return res.json(tag);

    }
}

export { ListTagController }