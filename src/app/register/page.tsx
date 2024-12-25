"use client"

import axios from "axios"
import Register from "../components/Register"
import Alert from "../components/Alert"
import { useState } from "react"

interface IProps {}

const RegisterPage = ({}: IProps) => {
    const [message, setMessage] = useState<string>("")
    const [typeMessage, setTypeMessage] = useState<string>("")
    const [summonMessage, setSummonMessage] = useState<boolean>(false)

    const handleRegister = async (email: string, password: string) => {
        try {
            const response = await axios.post(`${process.env.API_URL}/users`, {
                email: email,
                password: password,
            })

            const data = response.data
            setMessage(data.message)

            if (!data.email) {
                setTypeMessage("error")
            } else {
                setTypeMessage("success")
            }
        } catch (error: any) {
            if (error.response) {
                setMessage(error.response.data.error || "Erro desconhecido")
                setTypeMessage("error")
            } else {
                console.error("Erro ao se comunicar com a API")
                setMessage("Erro ao se comunicar com a API")
                setTypeMessage("error")
            }
        } finally {
            setSummonMessage(true)
        }
    }

    const handleAlertClose = () => {
        setSummonMessage(false)
    }

    return (
        <>
            {summonMessage && typeMessage && (
                <Alert message={message} type={typeMessage} onClose={handleAlertClose} />
            )}
            <Register onSubmit={handleRegister} />
        </>
    )
}

export default RegisterPage
