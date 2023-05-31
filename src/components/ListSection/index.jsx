import { NoteList } from "./NoteList";
import { NoteNumbers } from "./NoteNumbers";

export const ListSection = ({ noteList, setNoteList }) => {
   //Javascript

   //JSX
   // condicao ? resposta do if : resposta else
   // condicao ? caso seja verdadeiro : caso seja falso

   /*
        if(noteList.length > 0){
            return <NoteList.../>
        } else {
            return <p>Cadastre a sua primeira nota</p>
        }
   */
  
   return (
      <section>
         <h1>Lista de notas</h1>
         <NoteNumbers />
         {noteList.length > 0 ? (
            <NoteList noteList={noteList} setNoteList={setNoteList} />
         ) : (
            <p>Cadastre-se a sua primeira nota</p>
         )}
      </section>
   );
};
