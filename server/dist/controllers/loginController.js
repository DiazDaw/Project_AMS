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
exports.login = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
var jwt = require('jsonwebtoken');
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dni, contrasenia } = req.body;
        connection_1.default.query('SELECT * FROM fallero WHERE dni = ?', [dni], (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            if (err)
                throw err;
            if (data.length === 0) {
                // Usuario no encontrado
                res.status(401).json({ error: 'Credenciales inválidas' });
                return;
            }
            const usuario = data[0];
            // Verificar la contraseña encriptada
            const match = yield bcrypt_1.default.compare(contrasenia, usuario.contrasenia);
            if (match) {
                // Contraseña válida
                const token = jwt.sign(dni, "my_secret_token");
                res.status(200).json({ token, usuario });
            }
            else {
                // Contraseña inválida
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        }));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al iniciar sesión' });
    }
});
exports.login = login;
