import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE ENTRADAS DE BLOG
export const getEntrada = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getEntrada"
    })
}

export const getOneEntrada = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneEntrada"
    })
}

export const deleteEntrada = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteEntrada",
        id: req.params
    })
}

export const postEntrada = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postEntrada",
        body: req.body
    })
}

export const updateEntrada = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateEntrada",
        body: req.body,
        id: req.params
    })
}

