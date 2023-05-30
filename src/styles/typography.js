import styled, {css} from "styled-components";

export const HeadlineOneStyles = css`
    font-family: var(--Font-Primary);
    font-size: 2rem;
    font-weight: 700;
`

export const HeadlineTwoStyles = css`
    font-family: var(--Font-Primary);
    font-size: 1.375rem;
    font-weight: 700;
`

export const StyledTitleOneBig = styled.h1`
    ${HeadlineOneStyles};
`

export const StyledTitleTwoBig = styled.h2`
    ${HeadlineOneStyles};
`

export const StyledTitleThreeBig = styled.h3`
    ${HeadlineOneStyles};
`

export const StyledTitleOneSmall = styled.h1`
    ${HeadlineTwoStyles};
`

export const StyledTitleTwoSmall = styled.h2`
    ${HeadlineTwoStyles};
`

export const StyledTitleThreeSmall = styled.h3`
    ${HeadlineTwoStyles};
`


