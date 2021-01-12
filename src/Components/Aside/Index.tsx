import React, { useState } from 'react'
import Toggle from '../../Components/Toggle'
import {
    Container,
    Header,
    Title,
    LogImg,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter
} from './styles'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
  } from 'react-icons/md'
import LogoImg from '../../Assets/logo.svg'
import { useAuth } from '../../Hooks/auth'
import { useTheme } from '../../Hooks/theme'

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();
    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true: false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened)
    }

    const handleChageTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose/> : <MdMenu/>}
                </ToggleMenu>
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
            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                onChange={handleChageTheme}
                checked={darkTheme}
            />
            </ThemeToggleFooter>
        </Container>
    )
}

export default Aside