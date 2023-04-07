import { Request, Response } from "express";

import connection from "../db/connection";


//METODOS ACCESO REST API TABLA DE ESTADOS DE ENTRADAS Y COMENTARIOS
export const getEstado = (req: Request, res: Response) => {
    connection.query('SELECT * FROM estado', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneEstado = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM estado WHERE idEstado = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteEstado = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM estado WHERE idEstado = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Estado de post o comentario eliminado con éxito."
        });
    })
}

export const postEstado = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO estado set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Estado de post o comentario creado con éxito."
        });
    })
}

export const updateEstado = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE estado set ? WHERE idEstado = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Estado de post o comentario actualizado con éxito."
        });
    })
}

