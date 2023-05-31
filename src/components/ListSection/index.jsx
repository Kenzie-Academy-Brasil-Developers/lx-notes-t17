import { NoteList } from "./NoteList"
import { NoteNumbers } from "./NoteNumbers"

export const ListSection = ({noteList, setNoteList}) => {
    //JS


    //JSX
    // Condition ? If Answer: Else Answer
    // Condition ? If true: if False

    /* if(noteList.length >0) {
        return <NoteList.../>
    } else {
        return <p> write your first note!</p>
    } */

    // CONDITION ? IF TRUE: IF FALSE
    return (
        <section>
            <h1>Lista de notas</h1>
            <NoteNumbers />
            {noteList.length > 0 ? (
                <NoteList noteList={noteList} setNoteList={setNoteList}/>
            ) : <p>Write your first No</p>}
        </section>
    )
}