"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelacionActividadProveedor = exports.postRelacionActividadProveedor = exports.deleteRelacionActividadProveedor = exports.getOneRelacionActividadProveedor = exports.getRelacionActividadProveedor = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const getRelacionActividadProveedor = (req, res) => {
    connection_1.default.query('SELECT * FROM actividad_proveedor', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getRelacionActividadProveedor = getRelacionActividadProveedor;
const getOneRelacionActividadProveedor = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM actividad_proveedor WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneRelacionActividadProveedor = getOneRelacionActividadProveedor;
const deleteRelacionActividadProveedor = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM actividad_proveedor WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion entre actividad y proveedor eliminada con éxito."
        });
    });
};
exports.deleteRelacionActividadProveedor = deleteRelacionActividadProveedor;
const postRelacionActividadProveedor = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO actividad_proveedor set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion entre actividad y proveedor creada con éxito."
        });
    });
};
exports.postRelacionActividadProveedor = postRelacionActividadProveedor;
const updateRelacionActividadProveedor = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE actividad_proveedor set ? WHERE idRelacion = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion entre actividad y proveedor actualizada con éxito."
        });
    });
};
exports.updateRelacionActividadProveedor = updateRelacionActividadProveedor;
