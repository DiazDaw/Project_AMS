import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE COMENTARIOS
export const getComentario = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getComentario"
    })
}

export const getOneComentario = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneComentario"
    })
}

export const deleteComentario = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteComentario",
        id: req.params
    })
}

export const postComentario = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postComentario",
        body: req.body
    })
}

export const updateComentario = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateComentario",
        body: req.body,
        id: req.params
    })
}

