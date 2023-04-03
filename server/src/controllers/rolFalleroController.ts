import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE ROLES DE FALLEROS
export const getRolFallero = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getRolFallero"
    })
}

export const getOneRolFallero = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneRolFallero"
    })
}

export const deleteRolFallero = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteRolFallero",
        id: req.params
    })
}

export const postRolFallero = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postRolFallero",
        body: req.body
    })
}

export const updateRolFallero = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateRolFallero",
        body: req.body,
        id: req.params
    })
}

