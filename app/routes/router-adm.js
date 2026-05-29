const express = require('express');
const router = express.Router();
const { UsuarioModel } = require("../models/usuarioModel");

router.get('/', async function(req, res) {
    try {
        const usuarios = await UsuarioModel.findAll();
        res.render('pages/index-adm', { usuarios: usuarios });
    } catch (erro) {
        console.log('Erro ao buscar usuários do painel:', erro);
        res.render('pages/index-adm', { usuarios: [] });
    }
});

router.get('/painel-adm', async function(req, res) {
    try {
        const usuarios = await UsuarioModel.findAll();
        res.render('pages/index-adm', { usuarios: usuarios });
    } catch (erro) {
        console.log('Erro ao buscar usuários do painel:', erro);
        res.render('pages/index-adm', { usuarios: [] });
    }
});

router.get('/usuarios-adm', async function(req, res) {
    try {
        const usuarios = await UsuarioModel.findAll();
        res.render('pages/usuarios-adm', { usuarios: usuarios });
    } catch (erro) {
        console.log('Erro ao buscar usuários:', erro);
        res.render('pages/usuarios-adm', { usuarios: [] });
    }
});

router.get('/deletar-logico', async (req, res) => {
    const id = req.query.id;
    try {
        await UsuarioModel.deleteLogic(id);
        res.redirect('/adm/usuarios-adm');
    } catch (erro) {
        console.log(erro);
        res.redirect('/adm/usuarios-adm');
    }
});

router.get('/ongs-adm', function(req, res) {
    res.render('pages/ongs-adm');
});

router.get('/perfil-adm', function(req, res) {
    res.render('pages/perfil-adm');
});

router.get('/suporte-adm', function(req, res) {
    res.render('pages/suporte-adm');
});

router.get('/newsletter-adm', function(req, res) {
    res.redirect('/adm');
});

module.exports = router;
