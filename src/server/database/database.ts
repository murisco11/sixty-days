import mysql, { Pool } from "mysql2/promise"

const db: Pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root", 
  password: process.env.DB_PASSWORD || "foto0981",
  database: process.env.DB_NAME || "calen",
  waitForConnections: true,         
  connectionLimit: 10,              
});

(async () => {
  try {
    const connection = await db.getConnection()
    console.log("Conexão com o banco de dados estabelecida!")
    connection.release() 
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error)
  }
})()

export default db
