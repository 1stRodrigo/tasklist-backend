import prismaClient from "../../prisma";

interface FinishTaskRequest{
    task_id: string;
}
class FinishTaskService{
    async execute({ task_id }: FinishTaskRequest){

        const task = await prismaClient.task.update({
            where: {
                id: task_id
            },
            data: {
                status: "COMPLETED"
            }
        })

        return task;

    }
}

export { FinishTaskService }