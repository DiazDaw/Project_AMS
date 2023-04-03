"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateActividad = exports.postActividad = exports.deleteActividad = exports.getOneActividad = exports.getActividad = void 0;
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const getActividad = (req, res) => {
    res.json({
        msg: "Metodo getActividad"
    });
};
exports.getActividad = getActividad;
const getOneActividad = (req, res) => {
    res.json({
        msg: "Metodo getOneActividad"
    });
};
exports.getOneActividad = getOneActividad;
const deleteActividad = (req, res) => {
    res.json({
        msg: "Metodo deleteActividad",
        id: req.params
    });
};
exports.deleteActividad = deleteActividad;
const postActividad = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postActividad",
        body: req.body
    });
};
exports.postActividad = postActividad;
const updateActividad = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateAsistente",
        body: req.body,
        id: req.params
    });
};
exports.updateActividad = updateActividad;
