"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvento = exports.postEvento = exports.deleteEvento = exports.getOneEvento = exports.getEvento = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE EVENTOS
const getEvento = (req, res) => {
    connection_1.default.query('SELECT * FROM evento', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getEvento = getEvento;
const getOneEvento = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM evento WHERE idEvento = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneEvento = getOneEvento;
const deleteEvento = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM evento WHERE idEvento = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Evento eliminado con éxito."
        });
    });
};
exports.deleteEvento = deleteEvento;
const postEvento = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO evento set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Evento creado con éxito."
        });
    });
};
exports.postEvento = postEvento;
const updateEvento = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE evento set ? WHERE idEvento = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Evento actualizado con éxito."
        });
    });
};
exports.updateEvento = updateEvento;
