import prismaClient from "../../prisma";

class DetailTaskService{
    async execute({ task_id }){
        const tasks = await prismaClient.task.findFirst({
            where: {
                id: task_id
            },
        })

        return tasks
    }
}


export { DetailTaskService }