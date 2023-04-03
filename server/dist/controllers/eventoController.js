"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvento = exports.postEvento = exports.deleteEvento = exports.getOneEvento = exports.getEvento = void 0;
//METODOS ACCESO REST API TABLA DE EVENTOS
const getEvento = (req, res) => {
    res.json({
        msg: "Metodo getEvento"
    });
};
exports.getEvento = getEvento;
const getOneEvento = (req, res) => {
    res.json({
        msg: "Metodo getOneEvento"
    });
};
exports.getOneEvento = getOneEvento;
const deleteEvento = (req, res) => {
    res.json({
        msg: "Metodo deleteEvento"
    });
};
exports.deleteEvento = deleteEvento;
const postEvento = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postEvento",
        body: req.body
    });
};
exports.postEvento = postEvento;
const updateEvento = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateEvento",
        body: req.body,
        id: req.params
    });
};
exports.updateEvento = updateEvento;
