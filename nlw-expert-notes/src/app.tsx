import logo from "./assets/nlw-expert-logo.svg"
import { NewNoteCard } from "./components/new-note-card"
import { NoteCard } from "./components/note-card"

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert logo" />
      <form className="w-full">
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-light outline-none placeholder:text-slate-500"
          type="text"
          placeholder="Busque em suas notas..."
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content: "Hello World!",
          }}
        />
      </div>
    </div>
  )
}
