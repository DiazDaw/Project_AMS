"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const connection_1 = __importDefault(require("../db/connection"));
//METODOS ACCESO REST API TABLA DE ACTIVIDADES
const login = (req, res) => {
    // const jwt = require('jsonwebtoken');
    const { dni } = req.body;
    const { contrasenia } = req.body;
    connection_1.default.query('SELECT * FROM fallero WHERE dni = ? and contrasenia = ?', [dni, contrasenia], (err, data) => {
        if (err)
            throw err;
        console.log(dni);
        console.log(contrasenia);
        // const token = jwt.sign(dni, "my_secret_token")
        // res.json(token);
        res.json(data);
        console.log(data);
    });
};
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
