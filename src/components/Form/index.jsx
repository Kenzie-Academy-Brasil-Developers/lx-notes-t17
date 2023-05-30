import { useState } from "react";
import { StyledInput, StyledTextArea } from "../../styles/form";
import { StyledTitleTwoSmall } from "../../styles/typography";

export const Form = () => {
   const [title, setTitle] = useState("");
   const [message, setMessage] = useState("");

   const submit = (e) => {
      e.preventDefault();
      console.log({ title, message });
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
