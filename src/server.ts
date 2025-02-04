import express, { Request, Response, NextFunction } from "express";

const app = express();

app.listen(3333, () => console.log('Server online, enjoy!'))