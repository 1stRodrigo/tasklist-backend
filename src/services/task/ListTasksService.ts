import prismaClient from "../../prisma";

class ListTasksService {
    async execute(){
        const tasks = prismaClient.task.findMany({
            orderBy: {
                created_at: "desc"
            }
        })

        return tasks
    }
}

export { ListTasksService }