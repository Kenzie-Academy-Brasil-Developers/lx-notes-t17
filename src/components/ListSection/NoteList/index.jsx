import { NoteCard } from "./NoteCard"

export const NoteList = ({noteList, setNoteList}) => {

    //Javascript
    const removeNoteFromList = (noteId) => {   
        if(confirm("Você deseja mesmo excluir essa nota?")){     
            setNoteList((noteList) => noteList.filter(note => note.id !== noteId));
        }
    }

    return(
        <ul>
            {noteList.map((note) => <NoteCard key={note.id} note={note} removeNoteFromList={removeNoteFromList} />)}            
        </ul>
    )
}