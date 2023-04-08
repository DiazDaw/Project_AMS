"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntrada = exports.postEntrada = exports.deleteEntrada = exports.getOneEntrada = exports.getEntrada = void 0;
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
