import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { ListSection } from "./components/ListSection";
import { GlobalStyles } from "./styles/global";
import { StyledContainer } from "./styles/grid";
import { StyledFlexBox } from "./styles/pages/app";
import { GlobalReset } from "./styles/reset";
import { StyledHeadline1 } from "./styles/typography";

function App() {
   // Quando a informação já estiver presente em um estado, não será necessário a criação de um estado derivado
   const [noteList, setNoteList] = useState([]);

   return (
      <div className="App">
         <GlobalReset />
         <GlobalStyles />
         <Header />
         <main>
            <StyledContainer>
               {/* <StyledHeadline1 fontSize="big">Teste</StyledHeadline1> */}
               <StyledFlexBox>
                  <div className="formBox">
                  <Form setNoteList={setNoteList} />
                  </div>                 
                  <ListSection noteList={noteList} setNoteList={setNoteList} />
               </StyledFlexBox>
            </StyledContainer>
         </main>
      </div>
   );
}

export default App;
