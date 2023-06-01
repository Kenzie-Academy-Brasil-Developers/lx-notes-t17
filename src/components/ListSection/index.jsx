import { StyledContainer } from "../../styles/grid";
import { StyledHeadline1, StyledParagraph } from "../../styles/typography";
import { NoteList } from "./NoteList";
import { NoteNumbers } from "./NoteNumbers";

export const ListSection = ({ noteList, setNoteList }) => {
   //Javascript

   // condicao ? resposta do if : resposta else
   // condicao ? caso seja verdadeiro : caso seja falso

   /*
        if(noteList.length > 0){
            return <NoteList.../>
        } else {
            return <p>Cadastre a sua primeira nota</p>
        }
   */

   //JSX
   return (
      <section>
         <StyledContainer>
            <StyledHeadline1 fontSize="big">Lista de notas</StyledHeadline1>
            <NoteNumbers noteList={noteList} />
            {noteList.length > 0 ? (
               <NoteList noteList={noteList} setNoteList={setNoteList} />
            ) : (
               <StyledParagraph>Cadastre a sua primeira nota</StyledParagraph>
            )}
         </StyledContainer>
      </section>
   );
};
