"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = void 0;
const bcrypt = __importStar(require("bcrypt"));
const connection_1 = __importDefault(require("../db/connection"));
const updatePassword = (req, res) => {
    const { contrasenia } = req.body;
    const { idFallero } = req.params;
    // Encriptar la nueva contraseña
    const hashedPassword = bcrypt.hashSync(contrasenia, bcrypt.genSaltSync(10));
    connection_1.default.query('UPDATE fallero SET contrasenia = ? WHERE idFallero = ?', [hashedPassword, idFallero], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al actualizar la contraseña');
        }
        res.json(contrasenia);
        console.log(contrasenia);
    });
};
exports.updatePassword = updatePassword;
