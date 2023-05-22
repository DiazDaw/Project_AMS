import { Request, Response } from "express";

import connection from "../db/connection";


//METODOS ACCESO REST API TABLA DE ASISTENTES
export const getAsistente = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT f.idFallero, f.nombre, f.apellidos FROM fallero_actividad fa JOIN fallero f ON fa.id_Fallero = f.idFallero WHERE fa.id_Actividad = ?', id, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}

export const getOneAsistente = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query('SELECT fa.id_Actividad, a.title, a.start, a.end FROM actividad a INNER JOIN fallero_actividad fa ON a.idActividad = fa.id_Actividad WHERE fa.id_Fallero = ?', id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};



export const deleteAsistente = (req: Request, res: Response) => {
    const { actividadId, falleroId } = req.params;

    connection.query('DELETE FROM fallero_actividad WHERE id_Actividad = ? AND id_Fallero = ?', [actividadId, falleroId], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Asistente eliminado con éxito."
        });
    });
};


export const postAsistente = (req: Request, res: Response) => {
    console.log(req.body);

    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO fallero_actividad set ?', [body], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Relacion fallero actividad creada con éxito."
        });
    })

}

export const updateAsistente = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateAsistente",
        body: req.body,
        id: req.params
    })
}

