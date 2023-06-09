"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAsistente = exports.postAsistente = exports.deleteAsistente = exports.getOneAsistente = exports.getAsistente = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ASISTENTES
const getAsistente = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT f.idFallero, f.nombre, f.apellidos FROM fallero_actividad fa JOIN fallero f ON fa.id_Fallero = f.idFallero WHERE fa.id_Actividad = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getAsistente = getAsistente;
const getOneAsistente = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT fa.id_Actividad, a.title, a.start, a.end FROM actividad a INNER JOIN fallero_actividad fa ON a.idActividad = fa.id_Actividad WHERE fa.id_Fallero = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getOneAsistente = getOneAsistente;
const deleteAsistente = (req, res) => {
    const { actividadId, falleroId } = req.params;
    connection_1.default.query('DELETE FROM fallero_actividad WHERE id_Actividad = ? AND id_Fallero = ?', [actividadId, falleroId], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Asistente eliminado con éxito."
        });
    });
};
exports.deleteAsistente = deleteAsistente;
const postAsistente = (req, res) => {
    console.log(req.body);
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
exports.postAsistente = postAsistente;
const updateAsistente = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateAsistente",
        body: req.body,
        id: req.params
    });
};
exports.updateAsistente = updateAsistente;
