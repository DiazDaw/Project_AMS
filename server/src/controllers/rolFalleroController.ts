import { Request, Response } from "express";

import connection from "../db/connection";


//METODOS ACCESO REST API TABLA DE ROLES DE FALLEROS
export const getRolFallero = (req: Request, res: Response) => {
    connection.query('SELECT * FROM roles_fallero', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneRolFallero = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM roles_fallero WHERE idRolFallero = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteRolFallero = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM roles_fallero WHERE idRolFallero = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Rol fallero eliminado con éxito."
        });
    })
}

export const postRolFallero = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO roles_fallero set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Rol fallero creado con éxito."
        });
    })
}

export const updateRolFallero = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE roles_fallero set ? WHERE idRolFallero = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Rol fallero actualizado con éxito."
        });
    })
}

