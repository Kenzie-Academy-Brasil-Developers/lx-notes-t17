import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListSection } from "./components/ListSection"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"

function App() {
  const [noteList, setNoteList] = useState([]);
  /* console.log(noteList); */

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <main>
        <Form setNoteList={setNoteList}/>
        <ListSection noteList={noteList} setNoteList={setNoteList}/>
      </main>
    </div>
  )
}

export default App
