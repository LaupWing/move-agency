"use client"
import { FC, FormEvent } from "react"
import randomColor from "randomcolor"

interface FormTagProps {
   addTag: (value: string) => void
}

const FormTag:FC = () => {

   const postTag = (value: string) => {
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
      // setTags((prev) => {
      //    const added = tags.map(tag => ({
      //       name: tag,
      //       color: randomColor()
      //    }))
      //    return [...prev, ...added]
      // })
   }
   const handleSubmit = (e: FormEvent) => {
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