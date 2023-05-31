import { NoteCard } from "./NoteCard"

export const NoteList = ({noteList, setNoteList}) => {

    //JS
    const removeNoteFromList = (noteId) => {
        if(confirm("Do you really wish to delete this note?")){

            setNoteList ((noteList) => noteList.filter(note => note.id !== noteId));
        }

    }

    //JSX
    return(
        <ul>
            {noteList.map((note)=> <NoteCard key={note.id} note={note} removeNoteFromList= {removeNoteFromList} />)}
            
        </ul>
    )
}