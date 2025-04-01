import { Router } from "express";

import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateTagController } from "./controllers/tag/CreateTagController";
import { ListTagController } from "./controllers/tag/ListTagController";

import { CreateTaskController } from "./controllers/task/CreateTaskController";
import { ListByTagController } from "./controllers/task/ListByTagController";
import { RemoveTaskController } from "./controllers/task/RemoveTaskController";

import { ListTasksController } from "./controllers/task/ListTasksController";
import { DetailTaskController } from "./controllers/tag/DetailTaskController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { FinishTaskController } from "./controllers/task/FinishTaskController";

const router = Router();

// -- USER ROUTES --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/profile', isAuthenticated, new DetailUserController().handle)

// -- TAG ROUTES --

/*Create a new tag */
router.post('/tag', isAuthenticated, new CreateTagController().handle)

/*List all tags */
router.get('/tag', isAuthenticated, new ListTagController().handle)


// -- TASK ROUTES --

/* Create a Task */
router.post('/task', isAuthenticated, new CreateTaskController().handle)

/* List Task by Tag */
router.get('/tag/task', isAuthenticated, new ListByTagController().handle)

/* Remove Task */
router.delete('/task', isAuthenticated, new RemoveTaskController().handle)

/* List All Tasks */
router.get('/tasks', isAuthenticated, new ListTasksController().handle)

/* Detail Task */
router.get('/task/detail', isAuthenticated, new DetailTaskController().handle)

/* Finish Task */
router.put('/task/finish', isAuthenticated, new FinishTaskController().handle)

export { router };
