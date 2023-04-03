import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const getActividad = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getActividad"
    })
}

export const getOneActividad = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneActividad"
    })
}

export const deleteActividad = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteActividad",
        id: req.params
    })
}

export const postActividad = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postActividad",
        body: req.body
    })
}

export const updateActividad = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateAsistente",
        body: req.body,
        id: req.params
    })
}

