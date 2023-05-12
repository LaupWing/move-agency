import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
const prisma = new PrismaClient()

export const DELETE = async (request: NextRequest) => {
   const parts = request.url.split("/") 
   const id = parts[parts.length -1]
   const tag = await prisma.tag.findUnique({
      where: {
         id
      }
   })
   
   await prisma.tag.delete({
      where: {
         id
      }
   })

   return NextResponse.json(`Successfully Deleted tag ${tag!.name}`)
}