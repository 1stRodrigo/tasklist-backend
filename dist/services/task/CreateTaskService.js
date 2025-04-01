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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTaskService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ title, description, user_id, due_date, status, priority, tag_name }) {
            //find a existing tag
            let tag = yield prisma_1.default.tag.findFirst({
                where: {
                    name: tag_name,
                    userId: user_id
                },
            });
            if (!tag) {
                throw new Error('Tag not exists');
            }
            ;
            //Create a task
            const task = yield prisma_1.default.task.create({
                data: {
                    title: title,
                    description: description,
                    due_date: due_date,
                    authorId: user_id,
                    status: status,
                    priority: priority,
                },
                select: {
                    id: true,
                    title: true,
                    due_date: true,
                    authorId: true,
                }
            });
            //Connecting a relation between Task and Tag on TaskTag
            yield prisma_1.default.taskTag.create({
                data: {
                    taskId: task.id,
                    tagId: tag.id,
                }
            });
            //Return a Task with a Tag connected
            const taskWithTag = yield prisma_1.default.task.findUnique({
                where: { id: task.id },
                include: {
                    tags: {
                        include: {
                            tag: true
                        }
                    }
                }
            });
            return taskWithTag;
        });
    }
}
exports.CreateTaskService = CreateTaskService;
