import React, { useState } from 'react'
import * as Style from './styles'
import LogoImg from '../../Assets/logo.svg'
import Input from '../../Components/input'
import Button from '../../Components/button'
import { useAuth} from '../../Hooks/auth'

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth()

    return (
        <Style.Container>
            <Style.Logo>
                <img src={LogoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Style.Logo>

            <Style.Form onSubmit={() => signIn(email, password)}>
                <Style.FormTitle>Entrar</Style.FormTitle>
                <Input
                    placeholder="Email"
                    required
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    placeholder="Senha"
                    required
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type="submit">Acessar</Button>
            </Style.Form>
        </Style.Container>
    )
}

export default SignIn;