import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
const prisma = new PrismaClient()

export const GET = async () => {
   return NextResponse.json(await prisma.tag.findMany())
}