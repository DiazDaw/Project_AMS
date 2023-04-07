import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE TAREAS DE VOLUNTARIOS
export const getTarea = (req: Request, res: Response) => {
    connection.query('SELECT * FROM tarea', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneTarea = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM tarea WHERE idTarea = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteTarea = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM tarea WHERE idTarea = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Tarea eliminada con éxito."
        });
    })
}

export const postTarea = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO tarea set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Tarea creada con éxito."
        });
    })
}

export const updateTarea = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE tarea set ? WHERE idTarea = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Tarea actualizada con éxito."
        });
    })
}

