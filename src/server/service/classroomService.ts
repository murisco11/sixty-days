import { CreateClassroom } from "../repository/classroomRepository"

export const serviceCreateClassroom = (name: string, description: string, email: string) => {
    return CreateClassroom(name, description, email)
}