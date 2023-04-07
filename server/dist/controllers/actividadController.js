"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateActividad = exports.postActividad = exports.deleteActividad = exports.getOneActividad = exports.getActividad = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const getActividad = (req, res) => {
    connection_1.default.query('SELECT * FROM actividad', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getActividad = getActividad;
const getOneActividad = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM actividad WHERE idActividad = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneActividad = getOneActividad;
const deleteActividad = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM actividad WHERE idActividad = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Actividad eliminada con éxito."
        });
    });
};
exports.deleteActividad = deleteActividad;
const postActividad = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO actividad set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Actividad creada con éxito."
        });
    });
};
exports.postActividad = postActividad;
const updateActividad = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE actividad set ? WHERE idActividad = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Actividad actualizada con éxito."
        });
    });
};
exports.updateActividad = updateActividad;
