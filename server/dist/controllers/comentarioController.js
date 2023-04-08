"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComentario = exports.postComentario = exports.deleteComentario = exports.getOneComentario = exports.getComentarioFromEntrada = exports.getComentario = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API PARA LA TABLA DE COMENTARIO
const getComentario = (req, res) => {
    connection_1.default.query('SELECT * FROM comentario', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getComentario = getComentario;
const getComentarioFromEntrada = (req, res) => {
    const { id_Entrada } = req.params;
    connection_1.default.query('SELECT * FROM comentario WHERE id_Entrada = ?', id_Entrada, (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getComentarioFromEntrada = getComentarioFromEntrada;
const getOneComentario = (req, res) => {
    const { id_Entrada } = req.params;
    const { idComentario } = req.params;
    connection_1.default.query('SELECT * FROM comentario WHERE id_Entrada = ? and idComentario  = ?', [id_Entrada, idComentario], (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneComentario = getOneComentario;
const deleteComentario = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM comentario WHERE idComentario = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Comentario eliminado con éxito."
        });
    });
};
exports.deleteComentario = deleteComentario;
const postComentario = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO comentario set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Comentario creado con éxito."
        });
    });
};
exports.postComentario = postComentario;
const updateComentario = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE comentario set ? WHERE idComentario = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Comentario actualizado con éxito."
        });
    });
};
exports.updateComentario = updateComentario;
