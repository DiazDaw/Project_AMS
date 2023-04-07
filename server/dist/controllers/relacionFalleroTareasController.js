"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelacionFalleroTarea = exports.postRelacionFalleroTarea = exports.deleteRelacionFalleroTarea = exports.getOneRelacionFalleroTarea = exports.getRelacionFalleroTarea = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE RELACION ENTRE FALLEROS Y ACTIVIDADES
const getRelacionFalleroTarea = (req, res) => {
    connection_1.default.query('SELECT * FROM fallero_tareas', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getRelacionFalleroTarea = getRelacionFalleroTarea;
const getOneRelacionFalleroTarea = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM fallero_tareas WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneRelacionFalleroTarea = getOneRelacionFalleroTarea;
const deleteRelacionFalleroTarea = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM fallero_tareas WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion fallero tarea eliminada con éxito."
        });
    });
};
exports.deleteRelacionFalleroTarea = deleteRelacionFalleroTarea;
const postRelacionFalleroTarea = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO fallero_tareas set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion fallero tarea creada con éxito."
        });
    });
};
exports.postRelacionFalleroTarea = postRelacionFalleroTarea;
const updateRelacionFalleroTarea = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE fallero_tareas set ? WHERE idRelacion = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion fallero tarea actualizada con éxito."
        });
    });
};
exports.updateRelacionFalleroTarea = updateRelacionFalleroTarea;
