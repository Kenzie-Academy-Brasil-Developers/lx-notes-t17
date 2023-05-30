import { NoteList } from "./NoteList"
import { NoteNumbers } from "./NoteNumbers"

export const ListSection = () => {
    return (
        <section>
            <h1>Lista de notas</h1>
            <NoteNumbers />
            <NoteList />
        </section>
    )
}