import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const getActividad = (req: Request, res: Response) => {

    connection.query(
        'SELECT actividad.*, CONCAT(fallero.nombre, " ", fallero.apellidos) AS nombre_coordinador, lugar.nombre AS nombre_lugar FROM actividad INNER JOIN fallero ON actividad.coordinador = fallero.idFallero INNER JOIN lugar ON actividad.id_Lugar = lugar.idLugar; ', (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}

export const getCoordinador = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT a.idActividad, a.title, f.nombre AS nombre_coordinador FROM actividad a INNER JOIN fallero f ON a.coordinador = f.idFallero WHERE a.idActividad = ?;', id, (err, data) => {
        if (err) throw err;
        res.json(data);
    })

}

export const getOneActividad = (req: Request, res: Response) => {

    const { id } = req.params;


    connection.query(
        'SELECT actividad.*, CONCAT(fallero.nombre, " ", fallero.apellidos) AS nombre_coordinador FROM actividad INNER JOIN fallero ON actividad.coordinador = fallero.idFallero WHERE actividad.idActividad = ?',
        id,
        (err, data) => {
            if (err) throw err;
            res.json(data[0]);
        }
    );
};


export const deleteActividad = (req: Request, res: Response) => {

    const { id } = req.params;

    connection.query('DELETE FROM actividad WHERE idActividad = ?', id, (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Actividad eliminada con éxito."
        });
    })
}

export const postActividad = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO actividad set ?', [body], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Actividad creada con éxito."
        });
    })
}

export const updateActividad = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE actividad set ? WHERE idActividad = ?', [body, id], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Actividad actualizada con éxito."
        });
    })
}

