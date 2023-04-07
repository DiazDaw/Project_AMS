"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProveedor = exports.postProveedor = exports.deleteProveedor = exports.getOneProveedor = exports.getProveedor = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE PROVEEDORES
const getProveedor = (req, res) => {
    connection_1.default.query('SELECT * FROM proveedor', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getProveedor = getProveedor;
const getOneProveedor = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM proveedor WHERE idProveedor = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneProveedor = getOneProveedor;
const deleteProveedor = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM proveedor WHERE idProveedor = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Proveedor para eventos eliminado con éxito."
        });
    });
};
exports.deleteProveedor = deleteProveedor;
const postProveedor = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO proveedor set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Proveedor para eventos creado con éxito."
        });
    });
};
exports.postProveedor = postProveedor;
const updateProveedor = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE proveedor set ? WHERE idProveedor = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Proveedor para eventos actualizado con éxito."
        });
    });
};
exports.updateProveedor = updateProveedor;
