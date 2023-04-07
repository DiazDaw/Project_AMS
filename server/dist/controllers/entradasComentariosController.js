"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComentario = exports.postComentario = exports.deleteComentario = exports.getOneComentario = exports.getComentario = exports.updateEntrada = exports.postEntrada = exports.deleteEntrada = exports.getOneEntrada = exports.getEntrada = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ENTRADAS
const getEntrada = (req, res) => {
    connection_1.default.query('SELECT * FROM entrada', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getEntrada = getEntrada;
const getOneEntrada = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM entrada WHERE idBlog = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneEntrada = getOneEntrada;
const deleteEntrada = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM entrada WHERE idBlog = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Entrada eliminada con éxito."
        });
    });
};
exports.deleteEntrada = deleteEntrada;
const postEntrada = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO entrada set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Entrada creada con éxito."
        });
    });
};
exports.postEntrada = postEntrada;
const updateEntrada = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE entrada set ? WHERE idBlog = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Entrada actualizada con éxito."
        });
    });
};
exports.updateEntrada = updateEntrada;
//METODOS ACCESO REST API PARA LA TABLA DE COMENTARIO
const getComentario = (req, res) => {
    connection_1.default.query('SELECT * FROM comentario', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getComentario = getComentario;
const getOneComentario = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM comentario WHERE idComentario = ? and id_Entrada = ?', id, (err, data) => {
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
