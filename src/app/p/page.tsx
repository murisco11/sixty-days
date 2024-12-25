"use client"

import { useUser } from "@/app/components/UserContext"
import { useEffect, useState } from "react"
import Alert from "../components/Alert"
import Principal from "../components/Principal"

interface IProps {

}

const Home = ({ }: IProps) => {
    const { emailContext } = useUser()
    const [message, setMessage] = useState<string>("")
    const [typeMessage, setTypeMessage] = useState<string>("")
    const [summonMessage, setSummonMessage] = useState<boolean>(true)


    useEffect(() => {
        setMessage("Logado com sucesso!")
        setTypeMessage("success")
    }, [])


    const handleAlertClose = () => {
        setSummonMessage(false)
    }
    
    return (
        <>
            {summonMessage && typeMessage && (
                <Alert message={message} type={typeMessage} onClose={handleAlertClose} />
            )}
            <Principal />
        </>
    )
}

export default Home
