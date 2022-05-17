import { IconMenu2 } from '@tabler/icons'
import React from 'react'
import styled from 'styled-components'
import { HeaderProps } from './header'

export interface MenuProps {
    open: Boolean;
}

const MenuButton = ({open, setOpen}: HeaderProps) => {

    const openMenu = ()=>{
        setOpen(!open);
    }

    return (
        <BurgerMenu open={open} onClick={openMenu}>
            <IconMenu2/>
        </BurgerMenu>
    )
}

export default MenuButton

const BurgerMenu = styled.button<MenuProps>`
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: .5rem;
    :focus {
        border: 0.1rem solid ${({theme})=> theme.color.primary};
    }
    display: ${ props => props.open ? 'none' : 'block'};
    @media screen and (min-width: 55rem) {
        display: none;
    }
`