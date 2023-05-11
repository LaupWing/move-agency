import { Tag } from "@/types"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const POST = async (request: Request) => {
   const {tags} = await request.json()
   
   const promises = tags.map(async (tag: Tag) => {
      await prisma.tag.create({
         data: {
            name: tag.name,
            color: tag.color
         }
      })
   })
   await Promise.all(promises)
   return "test"
}