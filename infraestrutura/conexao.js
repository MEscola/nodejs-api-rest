const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Me2911kl9715*',
    database: 'agenda_petshop'
})

module.exports = conexao
