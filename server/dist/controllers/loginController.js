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
var jwt = require('jsonwebtoken');
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.body;
    const { contrasenia } = req.body;
    const token = jwt.sign(dni, "my_secret_token");
    connection_1.default.query('SELECT * FROM fallero WHERE dni = ? and contrasenia = ?', [dni, contrasenia], (err, data) => {
        if (err)
            throw err;
        if (data.length === 0) {
            // Usuario no encontrado
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }
        const token = jwt.sign(dni, "my_secret_token");
        console.log(dni);
        console.log(contrasenia);
        const response = {
            data: data,
            token: token
        };
        res.status(200).json({ token, usuario: data[0] });
    });
});
exports.login = login;
function generateAuthToken(user) {
    throw new Error("Function not implemented.");
}
// export const getOneActividad = (req: Request, res: Response) => {
//     const { id } = req.params;
//     connection.query('SELECT * FROM actividad WHERE idActividad = ?',id, (err,data) => {
//         if(err) throw err;
//         res.json(data[0]);
//     })
// }
// export const deleteActividad = (req: Request, res: Response) => {
//     const { id } = req.params;
//     connection.query('DELETE FROM actividad WHERE idActividad = ?',id, (err,data) => {
//         if(err) throw err;
//         res.json({
//             msg: "Actividad eliminada con éxito."
//         });
//     })
// }
// export const postActividad = (req: Request, res: Response) => {
//     const { body } = req;
//     const { id } = req.params;
//     connection.query('INSERT INTO actividad set ?',[body], (err,data) => {
//         if(err) throw err;
//         res.json({
//             msg: "Actividad creada con éxito."
//         });
//     })
// }
// export const updateActividad = (req: Request, res: Response) => {
//     const { body } = req;
//     const { id } = req.params;
//     connection.query('UPDATE actividad set ? WHERE idActividad = ?',[body, id], (err,data) => {
//         if(err) throw err;
//         res.json({
//             msg: "Actividad actualizada con éxito."
//         });
//     })
// }
