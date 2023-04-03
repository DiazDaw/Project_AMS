import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE ASISTENTES
export const getAsistente = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getAsistente"
    })
}

export const getOneAsistente = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneAsistente"
    })
}

export const deleteAsistente = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteAsistente",
        id: req.params
    })
}

export const postAsistente = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postAsistente",
        body: req.body
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

