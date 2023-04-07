"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLugar = exports.postLugar = exports.deleteLugar = exports.getOneLugar = exports.getLugar = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE LUGARES
const getLugar = (req, res) => {
    connection_1.default.query('SELECT * FROM lugar', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getLugar = getLugar;
const getOneLugar = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM lugar WHERE idLugar = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOneLugar = getOneLugar;
const deleteLugar = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM lugar WHERE idLugar = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Lugar para eventos eliminado con éxito."
        });
    });
};
exports.deleteLugar = deleteLugar;
const postLugar = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO lugar set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Lugar para eventos creado con éxito."
        });
    });
};
exports.postLugar = postLugar;
const updateLugar = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE lugar set ? WHERE idLugar = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Lugar para eventos actualizado con éxito."
        });
    });
};
exports.updateLugar = updateLugar;
