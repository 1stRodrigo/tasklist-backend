import prismaClient from "../../prisma";

class ListTasksService {
    async execute(user_id){
        
        const tasks = await prismaClient.task.findMany({
            where: {
                authorId: user_id
            },
            orderBy: {
                created_at: "desc"
            },
            include: {
                tags: {
                    include: {
                        tag: true
                    }
                }
        }
    })
        console.log("Dados retornados do Prisma: ", tasks)
        console.dir(tasks, {depth: null});
        return tasks
    }
}

export { ListTasksService }