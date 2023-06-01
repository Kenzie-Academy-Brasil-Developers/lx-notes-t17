import { StyledParagraph } from "../../../styles/typography";

export const NoteNumbers = ({noteList}) => {
    const totalChar = noteList.reduce((accValue, note) => {
        return accValue + note.title.length + note.message.length;
    }, 0);

    /* className={noteList.length > 3 ? "classeA" : "classeB"} */
    return(
        <div>
            <StyledParagraph>Notas: <strong>{noteList.length}</strong></StyledParagraph>
            <StyledParagraph>Caracteres: <strong>{totalChar}</strong></StyledParagraph>
            { /* noteList.length > 5 ? <p>Temos mais que 5 notas</p> : null */ }
        </div>
    )
}