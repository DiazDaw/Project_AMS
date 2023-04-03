"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProveedor = exports.postProveedor = exports.deleteProveedor = exports.getOneProveedor = exports.getProveedor = void 0;
//METODOS ACCESO REST API TABLA DE PROVEEDORES
const getProveedor = (req, res) => {
    res.json({
        msg: "Metodo getProveedor"
    });
};
exports.getProveedor = getProveedor;
const getOneProveedor = (req, res) => {
    res.json({
        msg: "Metodo getOneProveedor"
    });
};
exports.getOneProveedor = getOneProveedor;
const deleteProveedor = (req, res) => {
    res.json({
        msg: "Metodo deleteProveedor",
        id: req.params
    });
};
exports.deleteProveedor = deleteProveedor;
const postProveedor = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postProveedor",
        body: req.body
    });
};
exports.postProveedor = postProveedor;
const updateProveedor = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateProveedor",
        body: req.body,
        id: req.params
    });
};
exports.updateProveedor = updateProveedor;
