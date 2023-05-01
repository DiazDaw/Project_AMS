import { Request, Response } from "express";

import connection from "../db/connection";

var jwt = require('jsonwebtoken');





//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const login = async (req: Request, res: Response) => {

    const { dni } = req.body;
    const { contrasenia } = req.body;
    const  token  = jwt.sign( dni , "my_secret_token")

    connection.query('SELECT * FROM fallero WHERE dni = ? and contrasenia = ?',[dni, contrasenia], (err,data) => {
        if(err) throw err;

        if (data.length === 0) {
            // Usuario no encontrado
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }

        const  token  = jwt.sign( dni , "my_secret_token")

        console.log(dni);
        console.log(contrasenia);
        
        const response = {
            data: data,
            token: token
        };
        
        res.status(200).json({ token, usuario: data[0] });
    })
}


function generateAuthToken(user: any) {
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

