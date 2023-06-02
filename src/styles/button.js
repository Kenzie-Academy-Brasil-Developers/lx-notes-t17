import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    font-family: var(--Font-Primary);
    font-size: 1rem;
    font-weight: 700;
    color: var(--Color-White);
    background: var(--Color-Blue);
    border-radius: 255px;

    ${({fullWidth}) => {
        if(fullWidth){
            return css`
                width: 100%;
            `
        }
    }}

    ${({buttonSize}) => {
        if(buttonSize === "big"){
            return css`
                padding: 0 2rem;
                height: 3.0625rem;
            `
        } else {
            return css`
                padding: 0 1.5rem;
                height: 2.1875rem;
            `
        }
    }}
`