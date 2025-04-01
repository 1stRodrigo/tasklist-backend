import prismaClient from "../../prisma";

interface TagRequest{
    name: string;
    user_id: string;
}

class CreateTagService{
    async execute({ name, user_id } : TagRequest){

        if(name === ''){
            throw new Error('name invalid')
        }

        const tag = await prismaClient.tag.create({
            data: {
                name: name,
                userId: user_id
                
            },
            select: {
                id: true,
                name: true,
                userId: true
            }
        })

        return tag

    }
}

export { CreateTagService }