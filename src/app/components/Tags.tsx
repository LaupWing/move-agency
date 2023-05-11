import { Tag } from "@/types"
import { FC } from "react"

const Tags:FC<{
   tags: Tag[]
}> = ({tags}) => {
   return (
      <div className="flex flex-wrap mt-4">
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
      <div>
         {tag.name}
      </div>
   )
}