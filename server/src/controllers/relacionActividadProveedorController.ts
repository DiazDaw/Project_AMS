import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const getRelacionActividadProveedor = (req: Request, res: Response) => {

    connection.query('SELECT * FROM actividad_proveedor', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}

export const getOneRelacionActividadProveedor = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('SELECT * FROM actividad_proveedor WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json(data[0]);
    })
}

export const deleteRelacionActividadProveedor = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('DELETE FROM actividad_proveedor WHERE idRelacion = ?',id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion entre actividad y proveedor eliminada con éxito."
        });
    })
}

export const postRelacionActividadProveedor = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO actividad_proveedor set ?',[body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion entre actividad y proveedor creada con éxito."
        });
    })
}

export const updateRelacionActividadProveedor = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE actividad_proveedor set ? WHERE idRelacion = ?',[body, id], (err,data) => {
        if(err) throw err;
        res.json({
            msg: "Relacion entre actividad y proveedor actualizada con éxito."
        });
    })
}

