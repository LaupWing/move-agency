import TagsContainer from "@/components/TagsContainer"
import FormTag from "../components/FormTag"

import Tags from "../components/Tags"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function fetchTags() {
   const response = await prisma.tag.findMany()
   return response
}

export default async function Home() {
   const tags = await fetchTags()

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="p-4 bg-white rounded shadow w-full max-w-sm">
            <TagsContainer tags={tags} />
         </div>
      </main>
   )
}

