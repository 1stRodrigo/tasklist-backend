"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createUserController_1 = require("./controllers/user/createUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateTagController_1 = require("./controllers/tag/CreateTagController");
const ListTagController_1 = require("./controllers/tag/ListTagController");
const CreateTaskController_1 = require("./controllers/task/CreateTaskController");
const ListByTagController_1 = require("./controllers/task/ListByTagController");
const RemoveTaskController_1 = require("./controllers/task/RemoveTaskController");
const ListTasksController_1 = require("./controllers/task/ListTasksController");
const DetailTaskController_1 = require("./controllers/tag/DetailTaskController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const FinishTaskController_1 = require("./controllers/task/FinishTaskController");
const router = (0, express_1.Router)();
exports.router = router;
// -- USER ROUTES --
router.post('/users', new createUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/profile', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
// -- TAG ROUTES --
/*Create a new tag */
router.post('/tag', isAuthenticated_1.isAuthenticated, new CreateTagController_1.CreateTagController().handle);
/*List all tags */
router.get('/tag', isAuthenticated_1.isAuthenticated, new ListTagController_1.ListTagController().handle);
// -- TASK ROUTES --
/* Create a Task */
router.post('/task', isAuthenticated_1.isAuthenticated, new CreateTaskController_1.CreateTaskController().handle);
/* List Task by Tag */
router.get('/tag/task', isAuthenticated_1.isAuthenticated, new ListByTagController_1.ListByTagController().handle);
/* Remove Task */
router.delete('/task', isAuthenticated_1.isAuthenticated, new RemoveTaskController_1.RemoveTaskController().handle);
/* List All Tasks */
router.get('/tasks', isAuthenticated_1.isAuthenticated, new ListTasksController_1.ListTasksController().handle);
/* Detail Task */
router.get('/task/detail', isAuthenticated_1.isAuthenticated, new DetailTaskController_1.DetailTaskController().handle);
/* Finish Task */
router.put('/task/finish', isAuthenticated_1.isAuthenticated, new FinishTaskController_1.FinishTaskController().handle);
