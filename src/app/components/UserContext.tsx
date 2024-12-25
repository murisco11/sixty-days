"use client"
/*
    Bascicamente, primeiro cria a interface com o que o contexto vai fornecer. Depois, você cria o contexto e cria o ContextProvider, que terá os estados e funções referentes à interface.
    Depois, crie o .Provider, adicionando a prop value, que são os valores que podem ser acessados por outros componentes
    Por fim, crie o Hook Personalizado
*/

import { createContext, useContext, useState, ReactNode } from "react"

// A interface descreve o que o CONTEXTO VAI FORNECER, que neste caso é:
interface UserContextProps {
    emailContext: string | undefined
    toggleEmail: (email: string) => void
}

// Criando o contexto com o que ele vai fornecer, e undefined (nesse caso, pois começa vazio)
export const UserContext = createContext<UserContextProps | undefined>(undefined)

// O UserContextProvider é um componente que vai envolver a árvore de componentes que terão acesso ao Contexto, além de fornecer os valores do UserContext (email e toggleEmail)
export const UserContextProvider = ({ children }: any) => {
    const [emailContext, setEmail] = useState<string | undefined>(undefined)

    const toggleEmail = (email: string) => {
        setEmail(email)
    }

    // O UserContext.Provider fornece o valor do contexto para os seus filhos
    return (
        <UserContext.Provider value={{ emailContext, toggleEmail }}>
            {children}
        </UserContext.Provider>
    )
}

// Hook Personalizado para facilitar o uso do UserContext.O context acessa o useContext e coloca o UserContext. Se der erro, o componente que está tendo acessar não tem a permissão.
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser deve ser usado dentro de um UserContextProvider")
    }
    return context
}