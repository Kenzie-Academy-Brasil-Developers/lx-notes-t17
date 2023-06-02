import styled from "styled-components";

/* grid-template-columns: repeat(auto-fit, minmax(clamp(0px, 100%, 300px), 1fr)); */ 

export const StyledNoteList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: 640px){
        grid-template-columns: repeat(2, 1fr);
    }
`