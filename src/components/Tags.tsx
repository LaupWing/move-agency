"use client"
import { Tag } from "@prisma/client"
import { FC, useState } from "react"
import { GrFormClose } from "react-icons/gr"

const Tags:FC<{
   tags: Tag[],
   removeTag: (id: string) => void
}> = ({
   tags,
   removeTag
}) => {
   const handleDelete = async (id: string) => {
      const res = await fetch(`/api/tags/${id}`, {
         method: "DELETE"
      })
      const json = await res.json()
      console.log(json)
      removeTag(id)
   }

   return (
      <div className="flex flex-wrap mt-4 gap-2">
         {tags.map((tag: Tag) => (
            <Tag
               key={tag.id}
               handleDelete={handleDelete}
               tag={tag}
            />
         ))}
      </div>
   )
}

export default Tags

const Tag:FC<{
   tag: Tag, 
   handleDelete: (id: string) => void
}> = ({tag, handleDelete}) => {
   const [hovering, setHovering] = useState(false)
   
   return (
      <div 
         className="text-xs text-black px-2 py-1 shadow font-bold rounded flex items-center"
         style={{
            backgroundColor: tag.color
         }}
         onMouseOver={() => setHovering(true)}
         onMouseOut={() => setHovering(false)}
      >
         <p>
            {tag.name}
         </p>
         <button 
            className={`duration-300 overflow-hidden ${hovering ? "ml-2 max-w-lg" : "ml-0 max-w-0"}`}
            onClick={() => handleDelete(tag.id)}
         >
            <GrFormClose
               size={22} 
            />
         </button>
      </div>
   )
}