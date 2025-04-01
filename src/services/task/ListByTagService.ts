import prismaClient from "../../prisma";

interface TagRequest{
    tag_id: String;
}

class ListByTagService {
    async execute({ tag_id }: TagRequest){

        // list taskId by tag using TaskTag
        const findByTag = await prismaClient.taskTag.findMany({
            where: {
                tagId: tag_id,
            },
            include: {
                task: {
                    select:{
                        id
                         : true,
                        title: true,
                        description: true,
                        due_date: true,
                        status: true,
                        priority: true,
                        user: {
                            select: {
                                id:true,
                                name: true,
                            }
                        },
                    }
                }
            }
        })



        return findByTag;

    }

}

export { ListByTagService }