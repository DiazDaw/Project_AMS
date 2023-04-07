import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const getActividad = (req: Request, res: Response) => {

    connection.query('SELECT * FROM actividad', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneActividad = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('SELECT * FROM actividad WHERE idActividad = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteActividad = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('DELETE FROM actividad WHERE idActividad = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Actividad eliminada con éxito."
        });
    })
}

export const postActividad = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO actividad set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Actividad creada con éxito."
        });
    })
}

export const updateActividad = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE actividad set ? WHERE idActividad = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Actividad actualizada con éxito."
        });
    })
}

