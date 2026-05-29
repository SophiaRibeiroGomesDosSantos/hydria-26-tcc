const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

// Configurações para servir arquivos estáticos
app.use('/css', express.static(path.join(__dirname, 'app/public/css')));
app.use('/images', express.static(path.join(__dirname, 'app/public/images')));
app.use('/js', express.static(path.join(__dirname, 'app/public/js')));
app.use('/partial', express.static(path.join(__dirname, 'app/views/partial')));

// Middlewares
app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importar rotas
const pagesRoutes = require('./app/routes/router');
const authRoutes = require('./app/routes/auth');
const adminRoutes = require('./app/routes/admin');
const admRoutes = require('./app/routes/router-adm');

// Usar rotas
app.use('/', pagesRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/adm', admRoutes);

// Rota de teste para login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/auth/login.ejs'));
});

app.get('/auth/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/auth/cadastro.ejs'));
});

app.get('/auth/editar-perfil', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/pages/editar-perfil.ejs'));
});

app.get('/mensagemEnviada', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/pages/mensagemEnviada.ejs'));
});

app.get('/mensagem-enviada', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/pages/mensagemEnviada.ejs'));
});

// Rotas diretas para auth
app.get('/recuperar-senha', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/auth/recuperar-senha.ejs'));
});

app.get('/verificacao', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/auth/verificacao.ejs'));
});

app.get('/nova-senha', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/views/auth/novasenha.ejs'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});