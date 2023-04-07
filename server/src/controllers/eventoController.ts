import { Request, Response } from "express";

import connection from "../db/connection";


//METODOS ACCESO REST API TABLA DE EVENTOS
export const getEvento = (req: Request, res: Response) => {
    connection.query('SELECT * FROM evento', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneEvento = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM evento WHERE idEvento = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteEvento = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM evento WHERE idEvento = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Evento eliminado con éxito."
        });
    })
}

export const postEvento = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO evento set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Evento creado con éxito."
        });
    })
}

export const updateEvento = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE evento set ? WHERE idEvento = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Evento actualizado con éxito."
        });
    })
}

