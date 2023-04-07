import { Request, Response } from "express";

import connection from "../db/connection";

//METODOS ACCESO REST API TABLA DE LUGARES
export const getLugar = (req: Request, res: Response) => {
    connection.query('SELECT * FROM lugar', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneLugar = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM lugar WHERE idLugar = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteLugar = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM lugar WHERE idLugar = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Lugar para eventos eliminado con éxito."
        });
    })
}

export const postLugar = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO lugar set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Lugar para eventos creado con éxito."
        });
    })
}

export const updateLugar = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE lugar set ? WHERE idLugar = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Lugar para eventos actualizado con éxito."
        });
    })
}

