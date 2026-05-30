const express = require('express');
const path = require('path');
const router = express.Router();

// Login
router.get('/login', (req, res) => {
    res.render('auth/login');
});

// Cadastro
router.get('/cadastro', (req, res) => {
    res.render('auth/cadastro');
});

// Nova senha
router.get('/nova-senha', (req, res) => {
    res.render('auth/novasenha');
});

// Alias sem hífen para compatibilidade com links antigos
router.get('/novasenha', (req, res) => {
    res.render('auth/novasenha');
});

// Editar perfil
router.get('/editar-perfil', (req, res) => {
    res.render('pages/editar-perfil');
});

// Recuperar senha
router.get('/recuperar-senha', (req, res) => {
    res.render('auth/recuperar-senha');
});

// VerificaÃ§Ã£o
router.get('/verificacao', (req, res) => {
    res.render('auth/verificacao');
});

// POST para Verificação (temporário - durante desenvolvimento)
router.post('/verificacao', (req, res) => {
    // TODO: Validar código de verificação
    res.redirect('/auth/nova-senha');
});

module.exports = router;