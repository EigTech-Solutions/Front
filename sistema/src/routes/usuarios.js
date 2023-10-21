var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listar/:idInstituicao", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/buscarUser/:idUser/:idInstituicao", function (req, res) {
    usuarioController.buscarUser(req, res);
});

router.get("/listarTecnicos/:idInstituicao", function (req, res) {
    usuarioController.listarTecnicos(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrarAcesso", function (req, res) {
    usuarioController.cadastrarAcesso(req, res);
});

router.put("/atualizar/:idUser/:idInstituicao", function (req, res) {
    usuarioController.atualizar(req, res);
});

router.delete("/deletar/:idUser/:idInstituicao", function (req, res) {
    usuarioController.deletar(req, res);
});

module.exports = router;