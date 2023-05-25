"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateActividad = exports.postActividad = exports.deleteActividad = exports.getOneActividad = exports.getCoordinador = exports.getActividad = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const getActividad = (req, res) => {
    connection_1.default.query(`SELECT actividad.*, CONCAT(fallero.nombre, " ", fallero.apellidos) AS nombre_coordinador, lugar.nombre AS nombre_lugar, lugar.direccion AS direccion_lugar, lugar.aforo AS aforo, proveedor.nombre AS nombre_proveedor, proveedor.idProveedor AS id_Proveedor, actividad_proveedor.idRelacion AS id_Relacion_Proveedor
     FROM actividad
     INNER JOIN fallero ON actividad.coordinador = fallero.idFallero
     INNER JOIN lugar ON actividad.id_Lugar = lugar.idLugar
     LEFT JOIN actividad_proveedor ON actividad.idActividad = actividad_proveedor.id_Actividad
     LEFT JOIN proveedor ON actividad_proveedor.id_Proveedor = proveedor.idProveedor;`, (err, data) => {
        if (err)
            throw err;
        const actividades = data.map((row) => {
            return {
                idActividad: row.idActividad,
                title: row.title,
                start: row.start,
                end: row.end,
                color: row.color,
                id_Lugar: row.id_Lugar,
                coordinador: row.coordinador,
                nombre_coordinador: row.nombre_coordinador,
                nombre_lugar: row.nombre_lugar,
                direccion_lugar: row.direccion_lugar,
                aforo: row.aforo,
                nombre_proveedor: row.nombre_proveedor,
                id_Proveedor: row.id_Proveedor,
                id_Relacion_Proveedor: row.id_Relacion_Proveedor
            };
        });
        res.json(actividades);
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
    connection_1.default.query(`SELECT actividad.*, lugar.nombre AS nombre_lugar, lugar.direccion AS direccion_lugar, CONCAT(fallero.nombre, " ", fallero.apellidos) AS nombre_coordinador, lugar.aforo AS aforo, proveedor.nombre AS nombre_proveedor, proveedor.idProveedor AS id_Proveedor, actividad_proveedor.idRelacion AS id_Relacion_Proveedor
     FROM actividad
     INNER JOIN fallero ON actividad.coordinador = fallero.idFallero
     INNER JOIN lugar ON actividad.id_Lugar = lugar.idLugar
     LEFT JOIN actividad_proveedor ON actividad.idActividad = actividad_proveedor.id_Actividad
     LEFT JOIN proveedor ON actividad_proveedor.id_Proveedor = proveedor.idProveedor
     WHERE actividad.idActividad = ?`, id, (err, data) => {
        if (err)
            throw err;
        if (data.length === 0) {
            res.status(404).json({ error: 'Actividad no encontrada' });
        }
        else {
            const actividad = {
                idActividad: data[0].idActividad,
                title: data[0].title,
                start: data[0].start,
                end: data[0].end,
                color: data[0].color,
                id_Lugar: data[0].id_Lugar,
                coordinador: data[0].coordinador,
                nombre_lugar: data[0].nombre_lugar,
                direccion_lugar: data[0].direccion_lugar,
                nombre_coordinador: data[0].nombre_coordinador,
                aforo: data[0].aforo,
                nombre_proveedor: data[0].nombre_proveedor,
                id_Proveedor: data[0].id_Proveedor,
                id_Relacion_Proveedor: data[0].id_Relacion_Proveedor
            };
            res.json(actividad);
        }
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
    connection_1.default.query('INSERT INTO actividad SET ?', [body], (err, data) => {
        if (err)
            throw err;
        const actividadId = data.insertId; // Obtener el ID de la actividad creada
        res.json({
            msg: "Actividad creada con éxito.",
            idNuevaActividad: actividadId // Devolver el ID de la actividad en la respuesta
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
