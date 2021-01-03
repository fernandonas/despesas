import React, { useMemo } from 'react'
import {
    Container,
    Welcome,
    UserName,
    Profile
} from './styles'
import emojis from '../../Utils/emojis'
import Toggle from '../Toggle'

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];

    }, [])

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Fernando Nascimento</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader