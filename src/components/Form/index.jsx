import { useState } from "react";
import { StyledInput, StyledTextArea } from "../../styles/form";
import { v4 as uuidv4 } from 'uuid';
import { StyledButton } from "../../styles/button";
import { StyledHeadline2 } from "../../styles/typography";
import { StyledForm } from "./style";

export const Form = ({setNoteList}) => {
   const [title, setTitle] = useState("");
   const [message, setMessage] = useState("");
   //const [select, setSelect] = useState("");

   const addNoteToList = () => {
      const newNote = { id: uuidv4() ,title, message };
      setNoteList((noteList) => [...noteList, newNote]);
   }

   const submit = (e) => {
      e.preventDefault();
      addNoteToList();
      setTitle("");
      setMessage("");
   };

   return (
      <StyledForm onSubmit={submit}>
         <StyledHeadline2>Cadastre a sua nota</StyledHeadline2>
         <StyledInput            
            type="text"
            placeholder="Título da nota"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
         />
         <StyledTextArea            
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
         ></StyledTextArea>
         { /* <select value={select} onChange={(e) => setSelect(e.target.value)} required>
            <option value="">Selecione um valor feliz</option>
            <option value="felicidade">Felicidade</option>
         </select> */ }
         <StyledButton buttonSize="big" fullWidth={true} type="submit">Criar nota</StyledButton>        
      </StyledForm>
   );
};
