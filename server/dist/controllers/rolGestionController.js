"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRolGestion = exports.postRolGestion = exports.deleteRolGestion = exports.getOneRolGestion = exports.getRolGestion = void 0;
//METODOS ACCESO REST API TABLA DE ROLES DE GESTIÓN
const getRolGestion = (req, res) => {
    res.json({
        msg: "Metodo getRolGestion"
    });
};
exports.getRolGestion = getRolGestion;
const getOneRolGestion = (req, res) => {
    res.json({
        msg: "Metodo getOneRolGestion"
    });
};
exports.getOneRolGestion = getOneRolGestion;
const deleteRolGestion = (req, res) => {
    res.json({
        msg: "Metodo deleteRolGestion",
        id: req.params
    });
};
exports.deleteRolGestion = deleteRolGestion;
const postRolGestion = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postRolGestion",
        body: req.body
    });
};
exports.postRolGestion = postRolGestion;
const updateRolGestion = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateRolGestion",
        body: req.body,
        id: req.params
    });
};
exports.updateRolGestion = updateRolGestion;
