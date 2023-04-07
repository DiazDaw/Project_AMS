"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRolFallero = exports.postRolFallero = exports.deleteRolFallero = exports.getOneRolFallero = exports.getRolFallero = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ROLES DE FALLEROS
const getRolFallero = (req, res) => {
    connection_1.default.query('SELECT * FROM roles_fallero', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getRolFallero = getRolFallero;
const getOneRolFallero = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM roles_fallero WHERE idRolFallero = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneRolFallero = getOneRolFallero;
const deleteRolFallero = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM roles_fallero WHERE idRolFallero = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Rol fallero eliminado con éxito."
        });
    });
};
exports.deleteRolFallero = deleteRolFallero;
const postRolFallero = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO roles_fallero set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Rol fallero creado con éxito."
        });
    });
};
exports.postRolFallero = postRolFallero;
const updateRolFallero = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE roles_fallero set ? WHERE idRolFallero = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Rol fallero actualizado con éxito."
        });
    });
};
exports.updateRolFallero = updateRolFallero;
