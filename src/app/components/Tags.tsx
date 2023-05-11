"use client"
import { Tag } from "@/types"
import { FC } from "react"

const Tags:FC<{
   tags: Tag[]
}> = ({tags}) => {
   return (
      <div className="flex flex-wrap mt-4 gap-2">
         {tags.map(tag => (
            <Tag
               tag={tag}
            />
         ))}
      </div>
   )
}

export default Tags

const Tag:FC<{tag: Tag}> = ({tag}) => {
   return (
      <div 
         className="text-xs text-black px-2 py-1 shadow font-bold rounded"
         style={{
            backgroundColor: tag.color
         }}
      >
         {tag.name}
      </div>
   )
}