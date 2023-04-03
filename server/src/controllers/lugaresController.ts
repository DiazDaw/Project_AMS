import { Request, Response } from "express";

//METODOS ACCESO REST API TABLA DE LUGARES
export const getLugar = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getLugar"
    })
}

export const getOneLugar = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneLugar"
    })
}

export const deleteLugar = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteLugar",
        id: req.params
    })
}

export const postLugar = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postLugar",
        body: req.body
    })
}

export const updateLugar = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateLugar",
        body: req.body,
        id: req.params
    })
}

