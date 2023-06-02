import styled from "styled-components"

export const StyledFlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3.125rem;

    .formBox{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        min-width: clamp(150px, 100%, 350px);
    }

    section{
        min-width: clamp(150px, 100%, 750px);
    }

    section, .formBox{
        flex-grow: 1;
    }
`