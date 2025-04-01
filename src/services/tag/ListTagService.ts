import prismaClient from "../../prisma";

class ListTagService {
    async execute(){

        const tag = await prismaClient.tag.findMany({
            select:{
                userId: true,
                name: true,
                id: true,
                user: {
                    select: {
                        name: true,
                    }
                }
            }
        })
        
        return tag;
    }
}

export { ListTagService }