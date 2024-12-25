import { NextResponse, NextRequest } from "next/server"
import db from "@/server/database/database"
import { serviceCreateClassroom } from "@/server/service/classroomService"

export const POST = async (req: NextRequest) => {
    try {
        const { name, description, email } = await req.json()
        
        const classroom = serviceCreateClassroom(name, description, email)

        if (classroom.name) {
            return NextResponse.json(name, { status: 201 })
        }
    } catch (error) {
        console.error("Erro ao criar a sala: ", error)
        return NextResponse.json({ error: "Erro ao criar a sala" }, { status: 500 })
    }
}