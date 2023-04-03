"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEstado = exports.postEstado = exports.deleteEstado = exports.getOneEstado = exports.getEstado = void 0;
//METODOS ACCESO REST API TABLA DE ESTADOS DE ENTRADAS Y COMENTARIOS
const getEstado = (req, res) => {
    res.json({
        msg: "Metodo getEstado"
    });
};
exports.getEstado = getEstado;
const getOneEstado = (req, res) => {
    res.json({
        msg: "Metodo getOneEstado"
    });
};
exports.getOneEstado = getOneEstado;
const deleteEstado = (req, res) => {
    res.json({
        msg: "Metodo deleteEstado",
        id: req.params
    });
};
exports.deleteEstado = deleteEstado;
const postEstado = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postEstado",
        body: req.body
    });
};
exports.postEstado = postEstado;
const updateEstado = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateEstado",
        body: req.body,
        id: req.params
    });
};
exports.updateEstado = updateEstado;
