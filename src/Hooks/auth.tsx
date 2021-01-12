import React, { createContext, useContext, useState } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);


const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minhaCarteira:logged')
        return !!isLogged;

    });

    const signIn = (email: string, password: string) => {
        if(email === 'email@email.com.br' && password === '123'){
            localStorage.setItem('@minhaCarteira:logged', 'true')
            setLogged(true);
        } else {
            alert('Senha ou usuário inválido(s)');
        }
    }

    const signOut = () => {
        localStorage.removeItem('@minhaCarteira:logged')
        setLogged(false)
    }
    
    return(
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}