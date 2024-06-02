import { Sequelize  } from "sequelize";

const dbname = '01_backend_react'
const uname = 'root'
const pass = ''
const dbhost = 'localhost'

const db = new Sequelize(dbname, uname, pass, {
    host: dbhost,
    dialect: 'mysql'
})

export default db;