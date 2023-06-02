import { NoteCard } from "./NoteCard"
import { StyledNoteList } from "./style";

export const NoteList = ({noteList, setNoteList}) => {

    //Javascript
    const removeNoteFromList = (noteId) => {   
        if(confirm("Você deseja mesmo excluir essa nota?")){     
            setNoteList((noteList) => noteList.filter(note => note.id !== noteId));
        }
    }

    //JSX
    return(
        <StyledNoteList>
            {noteList.map((note) => <NoteCard key={note.id} note={note} removeNoteFromList={removeNoteFromList} />)}            
        </StyledNoteList>
    )
}