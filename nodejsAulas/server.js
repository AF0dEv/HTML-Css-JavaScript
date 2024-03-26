// Criar Conexão MySQL com Node.js e Express Variable para o Servidor

// Criar Variável MySQL
const mysql = require('mysql');

// Criar Variável express para o Servidor
const express = require('express');

// Criar uma Aplicação Express
const app = express();

// Criar Conexão MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'databse_name'
});

// Conectar ao MySQL
connection.connect(error => {
    if (error)
    {
        console.error('Erro ao Conectar à Base de Dados.');
    }
    console.log('Conectado à Base de Dados.');
});

// Iniciar o Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Iniciado na Porta: ${PORT}`);
});