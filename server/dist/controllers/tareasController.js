"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTarea = exports.postTarea = exports.deleteTarea = exports.getOneTarea = exports.getTarea = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE TAREAS DE VOLUNTARIOS
const getTarea = (req, res) => {
    connection_1.default.query('SELECT * FROM tarea', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getTarea = getTarea;
const getOneTarea = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM tarea WHERE idTarea = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneTarea = getOneTarea;
const deleteTarea = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM tarea WHERE idTarea = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Tarea eliminada con éxito."
        });
    });
};
exports.deleteTarea = deleteTarea;
const postTarea = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO tarea set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Tarea creada con éxito."
        });
    });
};
exports.postTarea = postTarea;
const updateTarea = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE tarea set ? WHERE idTarea = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Tarea actualizada con éxito."
        });
    });
};
exports.updateTarea = updateTarea;
