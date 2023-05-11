"use client"
import { useState, useEffect } from "react"
import FormTag from "../components/FormTag"
import { Tag } from "@/types"
import randomColor from "randomcolor"
import Tags from "../components/Tags"
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// async function fetchTags() {
//    const response = await prisma.tag.findMany()
//    console.log(response)
//    return response
// }

export default async function Home() {
   // const tags = await fetchTags()
   const [tags, setTags] = useState<Tag[]>([])

   const formatAndAdd = (value: string) => {
      const tags = value.split(",").filter(x => x !== "")
      fetch("/api/new", {
         method: "POST",
         body: JSON.stringify({
            tags: tags.map(tag => ({
               name: tag,
               color: randomColor()
            }))
         })
      })
      setTags((prev) => {
         const added = tags.map(tag => ({
            name: tag,
            color: randomColor()
         }))
         return [...prev, ...added]
      })
   }
   
   useEffect(() => {
      // const init = async () => {
      //    const res = await fetch("/api/tags")
      //    const json = await res.json()
      //    console.log(json)
      //    setTags(json)
      // }
      // init()
   }, [])
   console.log(tags)

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="p-4 bg-white rounded shadow w-full max-w-sm">
            <header className="flex flex-col">
               <h1 className="uppercase font-bold text-slate-400">
                  Tags
               </h1>
               <FormTag addTag={formatAndAdd} />
            </header>
            <Tags 
               tags={tags}
            />
         </div>
      </main>
   )
}

