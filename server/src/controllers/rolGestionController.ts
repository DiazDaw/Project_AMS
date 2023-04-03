import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE ROLES DE GESTIÓN
export const getRolGestion = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getRolGestion"
    })
}

export const getOneRolGestion = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneRolGestion"
    })
}

export const deleteRolGestion = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteRolGestion",
        id: req.params
    })
}

export const postRolGestion = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postRolGestion",
        body: req.body
    })
}

export const updateRolGestion = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateRolGestion",
        body: req.body,
        id: req.params
    })
}

