"use client"
import { FC, FormEvent } from "react"
import randomColor from "randomcolor"
import { Tag } from "@prisma/client"

interface FormTagProps {
   updateTags: (newTags: Tag[]) => void
}

const FormTag:FC<FormTagProps> = ({
   updateTags
}) => {

   const postTag = async (value: string) => {
      const tags = value.split(",").filter(x => x !== "")
      const res = await fetch("/api/tags", {
         method: "POST",
         body: JSON.stringify({
            tags: tags.map(tag => ({
               name: tag,
               color: randomColor()
            }))
         })
      })
      const newTags = await res.json()

      updateTags(newTags)
   }
   const handleSubmit = (e: FormEvent) => {
      console.log(e)
      e.preventDefault()
      // @ts-ignore
      const input = (e.target as HTMLFormElement).elements["tags"] as HTMLInputElement

      if (input.value == "") {
         alert("Cannot be empty")
      } else {
         postTag(input.value)
      }
      input.value = ""
   }
   return (
      <form onSubmit={handleSubmit} className="w-full flex">
         <input
            name="tags"
            className="rounded-l w-full border-slate-300 p-1"
            type="text"
         />
         <button className="px-4 uppercase text-xs bg-indigo-400 rounded-r font-bold text-white">
            Add
         </button>
      </form>
   )
}
export default FormTag