"use client"

import axios from "axios"
import Login from "./components/Login"
import { useUser } from "./components/UserContext"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Alert from "./components/Alert"

interface IProps { }

const Home = ({ }: IProps) => {
  const { toggleEmail, emailContext } = useUser()
  const [message, setMessage] = useState<string>("")
  const [typeMessage, setTypeMessage] = useState<string>("")
  const [summonMessage, setSummonMessage] = useState<boolean>(false)
  const router = useRouter()

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/users`, {
        params: {
          email: email,
          password: password,
        },
      })

      const data = response.data

      if (data.email) {
        toggleEmail(data.email)
      } else {
        setMessage(data.message)
        setTypeMessage("error")
      }
      console.log(data)
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.error || "Erro desconhecido")
        setTypeMessage("error")
      } else {
        console.error("Erro ao se comunicar com a API")
        setMessage("Erro ao se comunicar com a API")
        setTypeMessage("error")
      }
    }
    finally {
      setSummonMessage(true)
    }
  }

  useEffect(() => {
    console.log('Email do Contexto:', emailContext)

    if (emailContext) {
      router.push("p")
    }
  }, [emailContext, router])

  const handleAlertClose = () => {
    setSummonMessage(false)
  }

  return (
    <>
      {summonMessage && typeMessage && (
        <Alert message={message} type={typeMessage} onClose={handleAlertClose} />
      )}
      <Login onSubmit={handleLogin} />
    </>
  )
}

export default Home
