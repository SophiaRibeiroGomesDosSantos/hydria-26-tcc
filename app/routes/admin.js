const express = require('express');
const router = express.Router();

router.get('/painel', (req, res) => {
    res.redirect('/adm');
});

router.get('/ongs', (req, res) => {
    res.redirect('/adm');
});

router.get('/perfil', (req, res) => {
    res.redirect('/adm');
});

router.get('/suporte', (req, res) => {
    res.redirect('/adm');
});

router.get('/usuarios', (req, res) => {
    res.redirect('/adm/usuarios-adm');
});

module.exports = router;