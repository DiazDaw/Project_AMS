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
    connection_1.default.query('SELECT * FROM fallero_actividad WHERE id_Fallero = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneAsistente = getOneAsistente;
const deleteAsistente = (req, res) => {
    res.json({
        msg: "Metodo deleteAsistente",
        id: req.params
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
