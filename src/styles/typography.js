import styled, {css} from "styled-components";

export const HeadlineStyles = css`
    font-family: var(--Font-Primary);
    font-size: ${({fontSize}) => fontSize === "big" ? "2rem" : "1.375rem"};
    font-weight: 700;    

    /*
    ${({fontSize}) => {
        switch(fontSize){
            case "big":
                return css`
                    font-size: clamp(1.5rem, 80%, 2.5rem);
                `
            case "medium":
                return css`
                    font-size: clamp(1.25rem, 80%, 2rem);
                `    

            case "small":
                return css`
                    font-size: clamp(1rem, 80%, 1.75rem);
                `      
        }
    }}
    */
`

export const StyledHeadline1 = styled.h1`
    ${HeadlineStyles};   
`

export const StyledHeadline2 = styled.h2`
    ${HeadlineStyles};
`

export const StyledHeadline3 = styled.h3`
    ${HeadlineStyles};
`