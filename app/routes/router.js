const express = require('express');

const router = express.Router();

const renderPage = (viewName) => (req, res) => res.render(viewName);

router.get('/', renderPage('pages/index'));
router.get('/home', renderPage('pages/index'));

// Páginas de autenticação
router.get('/login', renderPage('auth/login'));
router.get('/cadastro', renderPage('auth/cadastro'));
router.get('/nova-senha', renderPage('auth/novasenha'));
router.get('/recuperar-senha', renderPage('auth/recuperar-senha'));
router.get('/verificacao', renderPage('auth/verificacao'));

router.get('/sobre', renderPage('pages/sobre'));
router.get('/projetos', renderPage('pages/projetos'));

router.get('/sobreInstitutoAguaViva', renderPage('pages/sobreInstitutoAguaViva'));
router.get('/sobre-instituto-agua-viva', renderPage('pages/sobreInstitutoAguaViva'));
router.get('/sobreinstitutoaguaviva', renderPage('pages/sobreInstitutoAguaViva'));

router.get('/sobre-aguas-potiguara', renderPage('pages/sobreAguasPotiguara'));
router.get('/sobreUmMilhaoDeCisternas', renderPage('pages/sobreUmMilhaoDeCisternas'));
router.get('/sobre-um-milhao-de-cisternas', renderPage('pages/sobreUmMilhaoDeCisternas'));

router.get('/contato', renderPage('pages/contato'));
router.get('/mensagemEnviada', renderPage('pages/mensagemEnviada'));
router.get('/mensagem-enviada', renderPage('pages/mensagemEnviada'));

router.get('/doações', renderPage('pages/doações'));
router.get('/doacoes', renderPage('pages/doações'));

router.get('/selecionar-valor', renderPage('pages/selecionar-valor'));
router.get('/pagamento', renderPage('pages/pagamento'));
router.get('/dopagamentoviapix', renderPage('pages/dopagamentoviapix'));
router.get('/pagamentoCartaodeCredito', renderPage('pages/pagamentoCartaodeCredito'));

router.get('/editar-perfil', renderPage('pages/editar-perfil'));
router.get('/mensagem-aceita', renderPage('pages/agradecimento-doacao'));
router.get('/agradecimento-doacao', renderPage('pages/agradecimento-doacao'));

router.get('/index-adm', renderPage('pages/index-adm'));
router.get('/ongs-adm', renderPage('pages/ongs-adm'));
router.get('/perfil-adm', renderPage('pages/perfil-adm'));
router.get('/suporte-adm', renderPage('pages/suporte-adm'));
router.get('/usuarios-adm', renderPage('pages/usuarios-adm'));

router.get('/noticia01', renderPage('pages/noticia01'));
router.get('/noticia02', renderPage('pages/noticia02'));
router.get('/noticia03', renderPage('pages/noticia03'));
router.get('/noticia04', renderPage('pages/noticia04'));
router.get('/noticia05', renderPage('pages/noticia05'));
router.get('/noticia06', renderPage('pages/noticia06'));

module.exports = router;