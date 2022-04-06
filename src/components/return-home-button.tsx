import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { IconArrowNarrowLeft } from '@tabler/icons';

const ReturnHomeButton = () => {
    return (
        <StyledLink to='/'>
            <IconArrowNarrowLeft className="icon"/>
            go back
        </StyledLink>
    )
}

export default ReturnHomeButton

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    text-decoration: none;
    .icon {
        margin-right: .5rem;
    }
`