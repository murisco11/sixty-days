/*
CREATE TABLE IF NOT EXISTS classroom (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    purpose VARCHAR(500)
)
*/

import db from "../database/database"

export const CreateClassroom = async (name: string, description: string, email: string) => {
    const queryCreateClassroom = `
        INSER INTO classroom (name, purpose) VALUES (?, ?)
    `

    const queryCreateStudent = `
        INSERT INTO students (user_id, classroom_id) VALUES (?, ?)
    `

    const queryGetUserId = `
        SELECT id FROM users WHERE email = ?
    `

    const [resultClassroom] = await db.query(queryCreateClassroom, [name, description])

    const classroomId = resultClassroom.insertId
}