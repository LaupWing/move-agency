"use client"
import { useState } from "react"
import FormTag from "./components/FormTag"
import { Tag } from "@/types"
import randomColor from "randomcolor"

export default function Home() {
   const [tags, setTags] = useState<Tag[]>([])

   const formatAndAdd = (value: string) => {
      const tags = value.split(",").filter(x => x !== "")
      setTags(tags.map(tag => ({
         name: tag,
         color: randomColor()
      })))
   }
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
         </div>
      </main>
   )
}
