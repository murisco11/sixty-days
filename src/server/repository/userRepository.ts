import db from "../database/database"

/*
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)
*/

export const createUser = async (email: string, password: string) => {
    try {
        const queryCreate = "INSERT INTO users (email, password) VALUES (?, ?)"
        const queryExistingUser = "SELECT * FROM users WHERE email = ?"

        const [existingUser] = await db.query(queryExistingUser, [email])

        if (Array.isArray(existingUser) && existingUser.length > 0) {
            return {
                message: "E-mail já registrado",
                email: null,
                password: null
            }

        }

        const [result] = await db.query(queryCreate, [email, password])

        return {
            message: "Conta criada com sucesso.",
            email,
            password
        }
    } catch (error) {
        console.error("Erro ao criar o usuário no banco de dados:", error)
        throw new Error("Erro ao criar o usuário")
    }
}

export const getUser = async (email: string, password: string) => {
    try {
        const queryGet = "SELECT * FROM users WHERE email = ? AND password = ?"

        const [result] = await db.query(queryGet, [email, password])

        if (Array.isArray(result) && result.length > 0) {
            return {
                message: "Login efetuado com sucesso.",
                email,
                password
            }
        } else {
            return {
                message: "E-mail ou senha inválido",
                email: null,
                password: null
            }
        }
    } catch (error) {
        console.error("Erro ao achar o usuário no banco de dados:", error)
        throw new Error("Erro ao achar o usuário")
    }
}