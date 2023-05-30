import styled, { css } from "styled-components";

const InputDefaultStyles = css`
   font-family: var(--Font-Primary);
   font-weight: 400;
   font-size: 1rem;

   background: var(--Color-Gray);
`;

export const StyledInput = styled.input`
   ${InputDefaultStyles};

   width: 100%;
   height: 2.875rem;

   padding: 0 1.25rem;
`;

export const StyledTextArea = styled.textarea`
   ${InputDefaultStyles};

   width: 100%;
   resize: none;

   padding: 1.25rem;

   height: 7.8125rem;
`;
