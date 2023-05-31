import { StyledNoteCard } from "./style"

export const NoteCard = ({note, removeNoteFromList}) => {
    return(
        <StyledNoteCard>
            <h3>{note.title}</h3>
            <p>{note.message}</p>
            <button onClick={() => removeNoteFromList(note.id)}>Excluir</button>
        </StyledNoteCard>
    )
}