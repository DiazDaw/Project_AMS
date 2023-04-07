"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRolGestion = exports.postRolGestion = exports.deleteRolGestion = exports.getOneRolGestion = exports.getRolGestion = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ROLES DE GESTIÓN
const getRolGestion = (req, res) => {
    connection_1.default.query('SELECT * FROM roles_gestion', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getRolGestion = getRolGestion;
const getOneRolGestion = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM roles_gestion WHERE idRolGestion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneRolGestion = getOneRolGestion;
const deleteRolGestion = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM roles_gestion WHERE idRolGestion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Rol para gestionar la BBDD eliminado con éxito."
        });
    });
};
exports.deleteRolGestion = deleteRolGestion;
const postRolGestion = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO roles_gestion set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Rol para gestionar la BBDD creado con éxito."
        });
    });
};
exports.postRolGestion = postRolGestion;
const updateRolGestion = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE roles_gestion set ? WHERE idRolGestion = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Rol para gestionar la BBDD actualizado con éxito."
        });
    });
};
exports.updateRolGestion = updateRolGestion;
