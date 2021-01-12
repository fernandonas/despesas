import styled, { css } from 'styled-components'

interface IContainerProps {
    menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
    position: relative;

    @media(max-width: 600px){
        padding-left: 7px;
        position: fixed;
        z-index: 2;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;
        width: 170px;
    
        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `}        
    }
`;

export const Header = styled.header`
    display: flex;
    height: 70px;
    align-items: center;
`;

export const LogImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px){
        display: none;
    }

    @media(max-width: 600px) {
        height: 25px;
        width: 25px;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

`;

export const MenuItemLink = styled.a`
    display:flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0px;
&:hover{
    color: #fff;
    opacity: .4;
    transition: opacity 1s;
}

> svg {
    font-size: 18px;
    margin-right: 5px;
}
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

@media(max-width: 600px) {
    display: none;
    width: 100px;
    font-size: 14px;
    margin-left: 5px;
}
`;

export const MenuItemButton = styled.button`
    display:flex;
    font-size: 16px;
    text-decoration: none;
    background: none;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0px;
&:hover{
    color: #fff;
    opacity: .4;
    transition: opacity 1s;
}

> svg {
    font-size: 18px;
    margin-right: 5px;
}
`;

export const ToggleMenu = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    transition: opacity 0.3s;    
    color: ${props => props.theme.colors.white};
    display: none;

    &:hover {
        opacity: 0.7
    }

    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        align-items: center;

    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 470px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'}
    }
`;
