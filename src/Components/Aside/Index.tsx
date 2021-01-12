import React from 'react'
import {
    Container,
    Header,
    Title,
    LogImg,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from './styles'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
  } from 'react-icons/md'
import LogoImg from '../../Assets/logo.svg'
import { useAuth } from '../../Hooks/auth'

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    return (
        <Container>
            <Header>
                <LogImg src={LogoImg} alt="Logo minha carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    DashBord
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saidas
                </MenuItemLink>
                <MenuItemButton onClick={() => signOut()}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>

            </MenuContainer>
        </Container>
    )
}

export default Aside