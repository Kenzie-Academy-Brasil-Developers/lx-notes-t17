import styled from "styled-components";

//Essa ferramenta ela vai aceita todo o CSS que eu já sei e vai ter disponível mais uma gama de recursos que são opcionais

export const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   background: var(--Color-White);
   box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
   padding: 30px;

   h2{
    margin-bottom: 10px;
   }
`;
