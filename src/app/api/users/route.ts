import { NextRequest, NextResponse } from "next/server"
import { serviceCreateUser } from "@/server/service/userService"
import { getUser } from "@/server/repository/userRepository"

export const POST = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json()

        const user = await serviceCreateUser(email, password)
        if (user.email) {
            return NextResponse.json(user, { status: 201 })
        } else {
            return NextResponse.json(user, { status: 200 })
        }
    } catch (error) {
        console.error("Erro ao criar o usuário: ", error)
        return NextResponse.json({ error: "Erro ao criar o usuário" }, { status: 500 })
    }
}

export const GET = async (req: NextRequest) => {
    try {
        const email = req.nextUrl.searchParams.get("email")
        const password = req.nextUrl.searchParams.get("password")
        
        if (email && password) {
            const user = await getUser(email, password)
            return NextResponse.json(user, { status: 200 })
        }
    }
    catch (error) {
        console.error("Erro ao achar usuário: ", error)
        return NextResponse.json({ error: "Erro ao achar o usuário" }, { status: 500 })
    }
}