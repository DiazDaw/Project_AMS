"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEstado = exports.postEstado = exports.deleteEstado = exports.getOneEstado = exports.getEstado = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ESTADOS DE ENTRADAS Y COMENTARIOS
const getEstado = (req, res) => {
    connection_1.default.query('SELECT * FROM estado', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getEstado = getEstado;
const getOneEstado = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM estado WHERE idEstado = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneEstado = getOneEstado;
const deleteEstado = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM estado WHERE idEstado = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Estado de post o comentario eliminado con éxito."
        });
    });
};
exports.deleteEstado = deleteEstado;
const postEstado = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO estado set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Estado de post o comentario creado con éxito."
        });
    });
};
exports.postEstado = postEstado;
const updateEstado = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE estado set ? WHERE idEstado = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Estado de post o comentario actualizado con éxito."
        });
    });
};
exports.updateEstado = updateEstado;
