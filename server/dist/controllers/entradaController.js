"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntrada = exports.postEntrada = exports.deleteEntrada = exports.getOneEntrada = exports.getEntrada = void 0;
//METODOS ACCESO REST API TABLA DE ENTRADAS DE BLOG
const getEntrada = (req, res) => {
    res.json({
        msg: "Metodo getEntrada"
    });
};
exports.getEntrada = getEntrada;
const getOneEntrada = (req, res) => {
    res.json({
        msg: "Metodo getOneEntrada"
    });
};
exports.getOneEntrada = getOneEntrada;
const deleteEntrada = (req, res) => {
    res.json({
        msg: "Metodo deleteEntrada",
        id: req.params
    });
};
exports.deleteEntrada = deleteEntrada;
const postEntrada = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postEntrada",
        body: req.body
    });
};
exports.postEntrada = postEntrada;
const updateEntrada = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateEntrada",
        body: req.body,
        id: req.params
    });
};
exports.updateEntrada = updateEntrada;
