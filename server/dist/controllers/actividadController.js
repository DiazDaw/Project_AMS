"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateActividad = exports.postActividad = exports.deleteActividad = exports.getOneActividad = exports.getCoordinador = exports.getActividad = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const getActividad = (req, res) => {
    connection_1.default.query('SELECT actividad.*, CONCAT(fallero.nombre, " ", fallero.apellidos) AS nombre_coordinador, lugar.nombre AS nombre_lugar FROM actividad INNER JOIN fallero ON actividad.coordinador = fallero.idFallero INNER JOIN lugar ON actividad.id_Lugar = lugar.idLugar; ', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getActividad = getActividad;
const getCoordinador = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT a.idActividad, a.title, f.nombre AS nombre_coordinador FROM actividad a INNER JOIN fallero f ON a.coordinador = f.idFallero WHERE a.idActividad = ?;', id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getCoordinador = getCoordinador;
const getOneActividad = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT actividad.*, CONCAT(fallero.nombre, " ", fallero.apellidos) AS nombre_coordinador FROM actividad INNER JOIN fallero ON actividad.coordinador = fallero.idFallero WHERE actividad.idActividad = ?', id, (err, data) => {
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
