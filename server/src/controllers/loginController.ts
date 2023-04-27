import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const login = (req: Request, res: Response) => {

    const { dni } = req.params;
    const { contrasenia } = req.params;


    connection.query('SELECT * FROM fallero WHERE dni = ? and contrasenia = ?',[dni, contrasenia], (err,data) => {
        if(err) throw err;
        res.json(data);
        console.log(data);
    })
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

