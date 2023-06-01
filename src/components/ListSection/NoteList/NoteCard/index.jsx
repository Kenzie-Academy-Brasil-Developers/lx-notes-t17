import { StyledButton } from "../../../../styles/button"
import { StyledHeadline3, StyledParagraph } from "../../../../styles/typography"
import { StyledNoteCard } from "./style"

export const NoteCard = ({note, removeNoteFromList}) => {
    return(
        <StyledNoteCard>
            <StyledHeadline3>{note.title}</StyledHeadline3>
            <StyledParagraph>{note.message}</StyledParagraph>
            <StyledButton onClick={() => removeNoteFromList(note.id)}>Excluir</StyledButton>
        </StyledNoteCard>
    )
}