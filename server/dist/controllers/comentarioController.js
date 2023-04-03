"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComentario = exports.postComentario = exports.deleteComentario = exports.getOneComentario = exports.getComentario = void 0;
//METODOS ACCESO REST API TABLA DE COMENTARIOS
const getComentario = (req, res) => {
    res.json({
        msg: "Metodo getComentario"
    });
};
exports.getComentario = getComentario;
const getOneComentario = (req, res) => {
    res.json({
        msg: "Metodo getOneComentario"
    });
};
exports.getOneComentario = getOneComentario;
const deleteComentario = (req, res) => {
    res.json({
        msg: "Metodo deleteComentario",
        id: req.params
    });
};
exports.deleteComentario = deleteComentario;
const postComentario = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postComentario",
        body: req.body
    });
};
exports.postComentario = postComentario;
const updateComentario = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateComentario",
        body: req.body,
        id: req.params
    });
};
exports.updateComentario = updateComentario;
