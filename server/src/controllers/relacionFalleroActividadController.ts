import { Request, Response } from "express";

import connection from "../db/connection";


//METODOS ACCESO REST API TABLA DE RELACION ENTRE FALLEROS Y ACTIVIDADES
export const getRelacionFalleroActividad = (req: Request, res: Response) => {
    connection.query('SELECT * FROM fallero_actividad', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneRelacionFalleroActividad = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM fallero_actividad WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteRelacionFalleroActividad = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM fallero_actividad WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion fallero actividad eliminada con éxito."
        });
    })
}

export const postRelacionFalleroActividad = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO fallero_actividad set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion fallero actividad creada con éxito."
        });
    })
}

export const updateRelacionFalleroActividad = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE fallero_actividad   set ? WHERE idRelacion = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion fallero actividad actualizada con éxito."
        });
    })
}

