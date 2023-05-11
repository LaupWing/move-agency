import FormTag from "./components/FormTag"

export default function Home() {
   
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="p-4 bg-white rounded shadow w-full max-w-sm">
            <header className="flex flex-col">
               <h1 className="uppercase font-bold text-slate-400">
                  Tags
               </h1>
               <FormTag />
            </header>
         </div>
      </main>
   )
}
