import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE TAREAS DE VOLUNTARIOS
export const getTarea = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getTarea"
    })
}

export const getOneTarea = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneTarea"
    })
}

export const deleteTarea = (req: Request, res: Response) => {
    console.log(req.params);

    res.json({
        msg: "Metodo deleteTarea",
        id: req.params
    })
}

export const postTarea = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postTarea",
        body: req.body
    })
}

export const updateTarea = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateTarea",
        body: req.body,
        id: req.params
    })
}

