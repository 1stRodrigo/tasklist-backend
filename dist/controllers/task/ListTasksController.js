"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksController = void 0;
const ListTasksService_1 = require("../../services/task/ListTasksService");
class ListTasksController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listTasksService = new ListTasksService_1.ListTasksService;
            const tasks = yield listTasksService.execute();
            return res.json(tasks);
        });
    }
}
exports.ListTasksController = ListTasksController;
