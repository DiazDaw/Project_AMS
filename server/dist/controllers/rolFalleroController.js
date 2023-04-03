"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRolFallero = exports.postRolFallero = exports.deleteRolFallero = exports.getOneRolFallero = exports.getRolFallero = void 0;
//METODOS ACCESO REST API TABLA DE ROLES DE FALLEROS
const getRolFallero = (req, res) => {
    res.json({
        msg: "Metodo getRolFallero"
    });
};
exports.getRolFallero = getRolFallero;
const getOneRolFallero = (req, res) => {
    res.json({
        msg: "Metodo getOneRolFallero"
    });
};
exports.getOneRolFallero = getOneRolFallero;
const deleteRolFallero = (req, res) => {
    res.json({
        msg: "Metodo deleteRolFallero",
        id: req.params
    });
};
exports.deleteRolFallero = deleteRolFallero;
const postRolFallero = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postRolFallero",
        body: req.body
    });
};
exports.postRolFallero = postRolFallero;
const updateRolFallero = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateRolFallero",
        body: req.body,
        id: req.params
    });
};
exports.updateRolFallero = updateRolFallero;
