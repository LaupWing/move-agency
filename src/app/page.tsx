"use client"
import { FormEvent } from "react"

export default function Home() {
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      // @ts-ignore
      const value = (e.target as HTMLFormElement).elements["tags"].value
      if(value == ""){
         alert("Cannot be empty")
      }
      
   }
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="p-4 bg-white rounded shadow w-full max-w-sm">
            <header className="flex flex-col">
               <h1 className="uppercase font-bold text-slate-400">
                  Tags
               </h1>
               <form onSubmit={handleSubmit} className="w-full flex">
                  <input name="tags" className="rounded-l w-full border-slate-300 p-1" type="text" />
                  <button className="px-4 uppercase text-xs bg-indigo-400 rounded-r font-bold text-white">Add</button>
               </form>
            </header>
         </div>
      </main>
   )
}
