"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelacionActividadTarea = exports.postRelacionActividadTarea = exports.deleteRelacionActividadTarea = exports.getOneRelacionActividadTarea = exports.getRelacionActividadTarea = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const getRelacionActividadTarea = (req, res) => {
    connection_1.default.query('SELECT * FROM actividad_tarea', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getRelacionActividadTarea = getRelacionActividadTarea;
const getOneRelacionActividadTarea = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM actividad_tarea WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneRelacionActividadTarea = getOneRelacionActividadTarea;
const deleteRelacionActividadTarea = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM actividad_tarea WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion entre actividad y tarea eliminada con éxito."
        });
    });
};
exports.deleteRelacionActividadTarea = deleteRelacionActividadTarea;
const postRelacionActividadTarea = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO actividad_tarea set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion entre actividad y tarea creada con éxito."
        });
    });
};
exports.postRelacionActividadTarea = postRelacionActividadTarea;
const updateRelacionActividadTarea = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE actividad_tarea set ? WHERE idRelacion = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion entre actividad y tarea actualizada con éxito."
        });
    });
};
exports.updateRelacionActividadTarea = updateRelacionActividadTarea;
