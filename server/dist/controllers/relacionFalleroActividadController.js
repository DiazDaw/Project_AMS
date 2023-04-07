"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelacionFalleroActividad = exports.postRelacionFalleroActividad = exports.deleteRelacionFalleroActividad = exports.getOneRelacionFalleroActividad = exports.getRelacionFalleroActividad = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE RELACION ENTRE FALLEROS Y ACTIVIDADES
const getRelacionFalleroActividad = (req, res) => {
    connection_1.default.query('SELECT * FROM fallero_actividad', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getRelacionFalleroActividad = getRelacionFalleroActividad;
const getOneRelacionFalleroActividad = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM fallero_actividad WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneRelacionFalleroActividad = getOneRelacionFalleroActividad;
const deleteRelacionFalleroActividad = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM fallero_actividad WHERE idRelacion = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion fallero actividad eliminada con éxito."
        });
    });
};
exports.deleteRelacionFalleroActividad = deleteRelacionFalleroActividad;
const postRelacionFalleroActividad = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO fallero_actividad set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion fallero actividad creada con éxito."
        });
    });
};
exports.postRelacionFalleroActividad = postRelacionFalleroActividad;
const updateRelacionFalleroActividad = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE fallero_actividad   set ? WHERE idRelacion = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Relacion fallero actividad actualizada con éxito."
        });
    });
};
exports.updateRelacionFalleroActividad = updateRelacionFalleroActividad;
