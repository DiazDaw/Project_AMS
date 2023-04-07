import { Request, Response } from "express";

import connection from "../db/connection";

//METODOS ACCESO REST API TABLA DE FALLEROS
export const getFallero = (req: Request, res: Response) => {
    
    connection.query('SELECT * FROM fallero', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOne = (req: Request, res: Response) => {

    const { id } = req.params;

    connection.query('SELECT * FROM fallero WHERE idFallero = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteFallero = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM fallero WHERE idFallero = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Fallero eliminado con éxito."
        });
    })
}

export const postFallero = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO fallero set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Fallero creado con éxito."
        });
    })
}

export const updateFallero = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE fallero set ? WHERE idFallero = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Fallero actualizado con éxito."
        });
    })
}

