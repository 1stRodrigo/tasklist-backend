import prismaClient from "../../prisma";

interface RemoveTaskRequest {
    task_id: string;
}

class RemoveTaskService {
    async execute({ task_id }: RemoveTaskRequest){

        const taskWithTag = await prismaClient.taskTag.deleteMany({
            where: {
                taskId: task_id,
            }
        })

        const task = await prismaClient.task.delete({
            where: {
                id: task_id
            }
        })

        return task;
    }
}

export { RemoveTaskService }