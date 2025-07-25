const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));
=======
app.use(express.urlencoded({extended: true}));
>>>>>>> 17958e1 (adição de categoria)

const mysql = require('mysql2');

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/bootstrap-icons', express.static(__dirname + '/node_modules/bootstrap-icons/font'));
app.use('/static', express.static(__dirname + '/static'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senac',
  port: 3306,
  database: 'ecommerce_pc'
});

conexao.connect((erro) => {
  if (erro) {
    console.error('😫 Erro ao conectar ao banco de dados:', erro);
    return;
  }
  console.log('😁 Conexão com o banco de dados estabelecida com sucesso!');
});

app.get('/', (req, res) => {;
  let sql = 'SELECT * FROM produtos';
  conexao.query(sql, function (erro, produtos_qs) {
    if (erro) {
      console.error('😫 Erro ao consultar produtos:', erro);
      res.status(500).send('Erro ao consultar produtos');
      return;
    }
    res.render('index', { produtos: produtos_qs });
  });
}
);

app.get('/produtos/add', (req, res) => {
  let sql = 'SELECT id, nome FROM categorias';
  
  conexao.query(sql, function (erro, categorias_qs) {
    if (erro) {
      console.error('😫 Erro ao consultar categorias:', erro);
      res.status(500).send('Erro ao consultar categorias');
      return;
    }

    res.render('produto_form', { categorias: categorias_qs });
  });
});

<<<<<<< HEAD
app.post('/produtos/add', (req, res) => {
  const { nome, descricao, preco, estoque, categoria_id } = req.body;

  const sql = `
    INSERT INTO produtos (nome, descricao, preco, estoque, categoria_id)
    VALUES (?, ?, ?, ?, ?)
  `;

  conexao.query(sql, [nome, descricao, preco, estoque, categoria_id], (erro, resultado) => {
    if (erro) {
      console.error('❌ Erro ao inserir produto:', erro);
      return res.status(500).send('Erro ao adicionar produto.');
    }

    res.redirect('/');
  });
});

app.get('/categorias', (req, res) => {
  let sql = 'SELECT * FROM categorias';
  conexao.query(sql, function (erro, categorias_qs) {
=======
app.post('/produtos/add', (req,res) => {
  const {nome, descricao, preco, estoque, categoria_id} = req.body; //este body define a forma de transmissão de pacotes

  const sql = `
    INSERT INTO produtos (nome, descricao, preco, estoque,categoria_id) VALUES (?,?,?,?,?)
`;
  conexao.query(sql, [nome,descricao, preco, estoque, categoria_id], (erro, resultado) => {
    if (erro) {
      console.error (' ❌ erro ao inserir produto:', erro);
      return res.status (500).send (' ❌ erro ao adicionar produto');
    }

    res. redirect('/'); // exibe na raiz
  });
});

// ---inserir novo botão de inserir categoria

app.get('/categoria/add', (req, res) => {
  let sql = 'SELECT id, nome FROM categoria';
  
  conexao.query(sql, function (erro, categoria_qs) {
>>>>>>> 17958e1 (adição de categoria)
    if (erro) {
      console.error('😫 Erro ao consultar categorias:', erro);
      res.status(500).send('Erro ao consultar categorias');
      return;
    }
<<<<<<< HEAD
    res.render('categorias', { categorias: categorias_qs });
  });
});

app.get('/categoria/add', (req, res) => {
  res.render('categoria_form');
}); 

app.post('/categoria/add', (req, res) => {
  const { nome, descricao } = req.body;
  const sql = 'INSERT INTO categorias (nome, descricao) VALUES (?, ?)';
  conexao.query(sql, [nome, descricao], (erro, resultado) => {
    if (erro) {
      console.error('❌ Erro ao inserir categoria:', erro);
      return res.status(500).send('Erro ao adicionar categoria.');
    }
    res.redirect('/categorias');
  });
});   
=======

    res.render('produto_form', { categoria: categoria_qs });
  });
});

app.post('/categoria/add', (req,res) => {
  const {nome, descricao } = req.body; //este body define a forma de transmissão de pacotes

  const sql = `
    INSERT INTO produtos (nome, descricao) VALUES (?,?)
`;
  conexao.query(sql, [nome,descricao], (erro, resultado) => {
    if (erro) {
      console.error (' ❌ erro ao inserir produto:', erro);
      return res.status (500).send (' ❌ erro ao adicionar produto');
    }

    res. redirect('/'); // exibe na raiz
  });
});


//---------
>>>>>>> 17958e1 (adição de categoria)


app.get('/clientes', (req, res) => {;
  let sql = 'SELECT * FROM clientes';
  conexao.query(sql, function (erro, clientes_qs) {
    if (erro) {
      console.error('😫 Erro ao consultar clientes:', erro);
      res.status(500).send('Erro ao consultar clientes');
      return;
    }
    res.render('clientes', { clientes: clientes_qs });
  });
});


app.listen(8080);