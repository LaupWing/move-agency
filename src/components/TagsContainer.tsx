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
         </header>
         <Tags 
            tags={_tags}
            removeTag={removeTag}
         />
      </>
   )
}

export default TagsContainer
