"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const updatePassword = (req, res) => {
    const { contrasenia } = req.body;
    const { idFallero } = req.params;
    connection_1.default.query('UPDATE fallero SET contrasenia = ? WHERE idFallero = ?', [contrasenia, idFallero], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al actualizar la contraseña');
        }
        res.json(contrasenia);
        console.log(contrasenia);
    });
};
exports.updatePassword = updatePassword;
