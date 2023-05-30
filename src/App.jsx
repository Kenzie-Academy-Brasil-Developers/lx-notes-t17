import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { ListSection } from "./components/ListSection"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"

function App() {
  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <main>
        <Form />
        <ListSection />
      </main>
    </div>
  )
}

export default App
