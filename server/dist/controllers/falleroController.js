"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFallero = exports.postFallero = exports.deleteFallero = exports.getOne = exports.getFallero = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Métodos de acceso REST API para la tabla de falleros
const getFallero = (req, res) => {
    connection_1.default.query('SELECT * FROM fallero', (err, data) => {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getFallero = getFallero;
const getOne = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('SELECT * FROM fallero WHERE idFallero = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.getOne = getOne;
const deleteFallero = (req, res) => {
    const { id } = req.params;
    connection_1.default.query('DELETE FROM fallero WHERE idFallero = ?', id, (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Fallero eliminado con éxito."
        });
    });
};
exports.deleteFallero = deleteFallero;
const postFallero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = req.params;
        // Generar un hash de la contraseña
        const hashedPassword = yield bcrypt_1.default.hash(body.contrasenia, 10);
        // Reemplazar la contraseña original con el hash
        body.contrasenia = hashedPassword;
        connection_1.default.query('INSERT INTO fallero SET ?', [body], (err, data) => {
            if (err)
                throw err;
            res.json({
                msg: "Fallero creado con éxito."
            });
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Ocurrió un error al crear el fallero."
        });
    }
});
exports.postFallero = postFallero;
const updateFallero = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    connection_1.default.query('UPDATE fallero set ? WHERE idFallero = ?', [body, id], (err, data) => {
        if (err)
            throw err;
        res.json({
            msg: "Fallero actualizado con éxito."
        });
    });
};
exports.updateFallero = updateFallero;
