import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes'

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        //if as a instace type error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server error.'
    })
})

app.listen(process.env.PORT, () => console.log("Server intialized, enjoy"))