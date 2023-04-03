"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFallero = exports.postFallero = exports.deleteFallero = exports.getOne = exports.getFallero = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE FALLEROS
const getFallero = (req, res) => {
    connection_1.default.query('SELECT * FROM falleros', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getFallero = getFallero;
const getOne = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM falleros WHERE idfalleros = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOne = getOne;
const deleteFallero = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM falleros WHERE idfalleros = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Fallero eliminado con éxito."
        });
    });
};
exports.deleteFallero = deleteFallero;
const postFallero = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('INSERT INTO falleros set ?', [body], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Fallero creado con éxito."
        });
    });
};
exports.postFallero = postFallero;
const updateFallero = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE falleros set ? WHERE idfalleros = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Fallero actualizado con éxito."
        });
    });
};
exports.updateFallero = updateFallero;
