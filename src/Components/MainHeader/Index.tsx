import React, { useMemo, useState } from 'react';
import {
    Container,
    Welcome,
    UserName,
    Profile
} from './styles';
import emojis from '../../Utils/emojis';
import Toggle from '../Toggle';
import { useTheme } from '../../Hooks/theme';

const MainHeader: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true: false);

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];

    }, []);

    const handleChageTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    };

    return (
        <Container>
            <Toggle 
                labelLeft="Light"
                labelRight="Dark"
                onChange={handleChageTheme}
                checked={darkTheme}
            />
            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Fernando Nascimento</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;