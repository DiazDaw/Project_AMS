import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const getRelacionActividadTarea = (req: Request, res: Response) => {

    connection.query('SELECT * FROM actividad_tarea', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneRelacionActividadTarea = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('SELECT * FROM actividad_tarea WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteRelacionActividadTarea = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('DELETE FROM actividad_tarea WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion entre actividad y tarea eliminada con éxito."
        });
    })
}

export const postRelacionActividadTarea = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO actividad_tarea set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion entre actividad y tarea creada con éxito."
        });
    })
}

export const updateRelacionActividadTarea = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE actividad_tarea set ? WHERE idRelacion = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion entre actividad y tarea actualizada con éxito."
        });
    })
}

