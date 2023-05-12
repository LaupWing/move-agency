"use client"
import { FC, useState } from "react"
import FormTag from "./FormTag"
import Tags from "./Tags"
import { Tag } from "@prisma/client"

const TagsContainer:FC<{tags: Tag[]}> = ({
   tags
}) => {
   const [_tags, setTags] = useState(tags)

   const updateTags = (newTags: Tag[]) => {
      setTags((prev) => [...prev, ...newTags])
   }
   const removeTag = (id: string) => {
      setTags((prev) => prev.filter(tag => tag.id !== id))
   }

   return (
      <>
         <header className="flex flex-col">
            <h1 className="uppercase font-bold text-slate-400">
               Tags
            </h1>
            <FormTag updateTags={updateTags} />
            <p className="text-sm text-gray-300 uppercase font-bold mt-1">Currently the is not working, because it is connected to a sqlite database. With vercel you cannot write and create, so I need to swap it for a Postgres one.</p>
         </header>
         <Tags 
            tags={_tags}
            removeTag={removeTag}
         />
      </>
   )
}

export default TagsContainer
