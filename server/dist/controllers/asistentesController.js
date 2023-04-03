"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAsistente = exports.postAsistente = exports.deleteAsistente = exports.getOneAsistente = exports.getAsistente = void 0;
//METODOS ACCESO REST API TABLA DE ASISTENTES
const getAsistente = (req, res) => {
    res.json({
        msg: "Metodo getAsistente"
    });
};
exports.getAsistente = getAsistente;
const getOneAsistente = (req, res) => {
    res.json({
        msg: "Metodo getOneAsistente"
    });
};
exports.getOneAsistente = getOneAsistente;
const deleteAsistente = (req, res) => {
    res.json({
        msg: "Metodo deleteAsistente"
    });
};
exports.deleteAsistente = deleteAsistente;
const postAsistente = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postAsistente",
        body: req.body
    });
};
exports.postAsistente = postAsistente;
const updateAsistente = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateAsistente",
        body: req.body,
        id: req.params
    });
};
exports.updateAsistente = updateAsistente;
