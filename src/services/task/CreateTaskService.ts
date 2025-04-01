import { TaskPriority, TaskStatus,  } from "@prisma/client";
import prismaClient from "../../prisma";

interface TaskRequest{
    title: string;
    description: string;
    user_id: string;
    due_date: string;
    tag_name: string;
    status: TaskStatus;
    priority: TaskPriority;

}

class CreateTaskService {
    async execute({title, description, user_id, due_date, status, priority, tag_name}: TaskRequest){

        //find a existing tag
        let tag = await prismaClient.tag.findFirst({
            where: {
                name: tag_name,
                userId: user_id
            },
        });

        if(!tag) {
            throw new Error('Tag not exists')
        };

        
        //Create a task
        const task = await prismaClient.task.create({
            data: {
                title: title,
                description: description,
                due_date: due_date,
                authorId: user_id,
                status: status,
                priority: priority,
            },
            select:{
                id: true,
                title: true,
                due_date: true,
                authorId: true,
            }
        });

        
        //Connecting a relation between Task and Tag on TaskTag
        await prismaClient.taskTag.create({
            data: {
                taskId: task.id,
                tagId: tag.id,
            }
        }) 


        //Return a Task with a Tag connected
        const taskWithTag = await prismaClient.task.findUnique({
            where: { id: task.id },
            include: {
                tags: {
                    include: {
                        tag: true
                    }
                }
            }
        })


        return taskWithTag
    }
}

export { CreateTaskService }