import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE EVENTOS
export const getEvento = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getEvento"
    })
}

export const getOneEvento = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneEvento"
    })
}

export const deleteEvento = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteEvento"
    })
}

export const postEvento = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postEvento",
        body: req.body
    })
}

export const updateEvento = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateEvento",
        body: req.body,
        id: req.params
    })
}

