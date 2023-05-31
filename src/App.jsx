import { useState } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListSection } from "./components/ListSection"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { StyledHeadline1 } from "./styles/typography"

function App() {
  const [noteList, setNoteList] = useState([]);

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <main>
        <StyledHeadline1 fontSize="big">Teste</StyledHeadline1>
        <Form setNoteList={setNoteList} />
        <ListSection noteList={noteList} setNoteList={setNoteList} />
      </main>
    </div>
  )
}

export default App
