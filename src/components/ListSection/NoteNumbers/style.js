import styled from "styled-components";

export const StyledNoteNumbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    gap: 1.25rem;

    border-radius: 255px;
    border: 1px solid ${({listLength}) => listLength > 5 ? 'red' : 'var(--Color-Blue)'};
    padding: 1.25rem 2.1875rem;    

    margin-top: 1.875rem;
    margin-bottom: 1.25rem;

    @media (min-width: 1024px){
        justify-content: flex-end;
    }
`