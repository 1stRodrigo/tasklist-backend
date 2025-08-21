import prismaClient from "../../prisma";

class ListTasksService {
    async execute(){
        const tasks = prismaClient.task.findMany({
            orderBy: {
                created_at: "desc"
            },
            include: {
                tags: true,
            }
        })

        return tasks
    }
}

export { ListTasksService }