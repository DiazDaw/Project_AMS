import { Request, Response } from "express";

import connection from "../db/connection";


//METODOS ACCESO REST API TABLA DE ASISTENTES
export const getAsistente = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT f.idFallero, f.nombre, f.apellidos FROM fallero_actividad fa JOIN fallero f ON fa.id_Fallero = f.idFallero WHERE fa.id_Actividad = ?', id, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}

export const getOneAsistente = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM fallero_actividad WHERE id_Fallero = ?', id, (err, data) => {
        if (err) throw err;
        res.json(data[0]);
    })
}

export const deleteAsistente = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteAsistente",
        id: req.params
    })
}

export const postAsistente = (req: Request, res: Response) => {
    console.log(req.body);

    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO fallero_actividad set ?', [body], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Relacion fallero actividad creada con éxito."
        });
    })

}

export const updateAsistente = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateAsistente",
        body: req.body,
        id: req.params
    })
}

