import styled from 'styled-components'

export const Container = styled.div`
grid-area: AS;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.secondary};
padding-left: 20px;
border-right: 1px solid ${props => props.theme.colors.gray}
`;

export const Header = styled.header`
display: flex;
height: 70px;
align-items: center;
`;

export const LogImg = styled.img`
height: 40px;
width: 40px;
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