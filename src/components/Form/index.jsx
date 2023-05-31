import { useState } from "react";
import { StyledInput, StyledTextArea } from "../../styles/form";
import { v4 as uuidv4 } from 'uuid';
import { StyledButton } from "../../styles/button";

export const Form = ({setNoteList}) => {
   const [title, setTitle] = useState("");
   const [message, setMessage] = useState("");

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
      <form onSubmit={submit}>
         <h2>Cadastre a sua nota</h2>
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
         <StyledButton buttonSize="big" fullWidth={true} type="submit">Criar nota</StyledButton>
      </form>
   );
};
