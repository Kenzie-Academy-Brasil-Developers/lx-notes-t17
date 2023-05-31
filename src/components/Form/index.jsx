import { useState } from "react";
import { StyledInput, StyledTextArea } from "../../styles/form";
import { StyledTitleTwoSmall } from "../../styles/typography";

import { v4 as uuidv4 } from 'uuid';

export const Form = ({setNoteList}) => {
   const [title, setTitle] = useState("");
   const [message, setMessage] = useState("");

   const addNoteToList = () => {
      const newNote ={id: uuidv4() ,title, message};
      setNoteList((noteList) => [...noteList, newNote]);
   }

   const submit = (e) => {
      e.preventDefault();
      addNoteToList();
      setTitle("");
      setMessage("");
   };

   // insere um evento de onChange capturando o valor de e.target.value
   // espelha o input, colocando a variável de estado como value

   return (
      <form onSubmit={submit}>
         <StyledTitleTwoSmall>Cadastre a sua nota</StyledTitleTwoSmall>
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
         <button type="submit">Criar nota</button>
      </form>
   );
};
