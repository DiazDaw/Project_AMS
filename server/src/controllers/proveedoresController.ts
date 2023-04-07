import { Request, Response } from "express";

import connection from "../db/connection";

//METODOS ACCESO REST API TABLA DE PROVEEDORES
export const getProveedor = (req: Request, res: Response) => {
    connection.query('SELECT * FROM proveedor', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneProveedor = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT * FROM proveedor WHERE idProveedor = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteProveedor = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('DELETE FROM proveedor WHERE idProveedor = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Proveedor para eventos eliminado con éxito."
        });
    })
}

export const postProveedor = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO proveedor set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Proveedor para eventos creado con éxito."
        });
    })
}

export const updateProveedor = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE proveedor set ? WHERE idProveedor = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Proveedor para eventos actualizado con éxito."
        });
    })
}

