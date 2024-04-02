const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar Conexão SQL
const connection = mysql.createConnection({

});

connection.connect(err =>  {
    if (err) throw err;
    console.log('Conectado com sucesso!');
});
// Tratamentos de dados JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Rotas

// Rota Principal(Index)
// resposta do get é renderizar o Index.ejs
app.get('/', (req, res) => {
    res.render('Index.ejs');
});

// Rota de Quartos
app.get('/quartos', (req, res) => {
    res.render('Quartos.ejs');
});

// Rota de Clientes
app.get('/clientes', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
        res.render('Clientes.ejs', { clientes: results });
    });
});

// Rota de Adicionar Clientes
app.post('/clientes/adicionar', (req, res) => {
    const { nome, email, telefone } = req.body;
    connection.query('INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone], (err, result) => {
        if (err) throw err;
        res.redirect('/clientes');
    
    });
});

// Rota de Editar/Atualizar Clientes
app.put('/clientes/:cliente_id', (req, res) => {
    const cliente_id = req.params.cliente_id;
    const { nome, email, telefone } = req.body;
    connection.query('UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE cliente_id = ?', [nome, email, telefone, cliente_id], (err, result) => {
        if (err) throw err;
        res.sendStatus(200);
        //res.redirect('/clientes');
    });
});


// Rota de Reservas
app.get('/reservas', (req, res) => {
    res.render('Reservas.ejs');
});




app.listen(port, () => 
    console.log(`Servidor a rodar na porta ${port}`)
);