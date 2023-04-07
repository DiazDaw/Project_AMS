import { Request, Response } from "express";

import connection from "../db/connection";


//METODOS ACCESO REST API TABLA DE RELACION ENTRE FALLEROS Y ACTIVIDADES
export const getRelacionFalleroTarea = (req: Request, res: Response) => {
    connection.query('SELECT * FROM fallero_tareas', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneRelacionFalleroTarea = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM fallero_tareas WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteRelacionFalleroTarea = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM fallero_tareas WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion fallero tarea eliminada con éxito."
        });
    })
}

export const postRelacionFalleroTarea = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO fallero_tareas set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion fallero tarea creada con éxito."
        });
    })
}

export const updateRelacionFalleroTarea = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE fallero_tareas set ? WHERE idRelacion = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion fallero tarea actualizada con éxito."
        });
    })
}

