import { PrismaClient, Tag } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma = new PrismaClient()

export const GET = async () => {
   return NextResponse.json(await prisma.tag.findMany())
}

export const POST = async (request: Request) => {
   const {tags} = await request.json()
   
   const promises = tags.map(async (tag: Tag) => {
      return prisma.tag.create({
         data: {
            name: tag.name,
            color: tag.color
         }
      })
   })
   const _tags = await Promise.all(promises)
   return NextResponse.json(_tags)
}

