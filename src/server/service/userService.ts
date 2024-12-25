import { createUser, getUser } from "../repository/userRepository"

export const serviceCreateUser = (email: string, password: string) => {
    return createUser(email, password)
}

export const serviceGetUser = (email: string, password: string) => {
    return getUser(email, password)
}