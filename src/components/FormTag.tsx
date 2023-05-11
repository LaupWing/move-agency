"use client"
import { FC, FormEvent } from "react"

interface FormTagProps {
   addTag: (value: string) => void
}

const FormTag:FC<FormTagProps> = ({
   addTag
}) => {
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      // @ts-ignore
      const input = (e.target as HTMLFormElement).elements["tags"] as HTMLInputElement

      if (input.value == "") {
         alert("Cannot be empty")
      } else {
         addTag(input.value)
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