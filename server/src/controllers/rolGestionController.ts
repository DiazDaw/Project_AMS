import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE ROLES DE GESTIÓN
export const getRolGestion = (req: Request, res: Response) => {
    connection.query('SELECT * FROM roles_gestion', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneRolGestion = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM roles_gestion WHERE idRolGestion = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteRolGestion = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM roles_gestion WHERE idRolGestion = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Rol para gestionar la BBDD eliminado con éxito."
        });
    })
}

export const postRolGestion = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO roles_gestion set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Rol para gestionar la BBDD creado con éxito."
        });
    })
}

export const updateRolGestion = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE roles_gestion set ? WHERE idRolGestion = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Rol para gestionar la BBDD actualizado con éxito."
        });
    })
}

