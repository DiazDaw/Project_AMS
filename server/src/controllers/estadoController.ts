import { Request, Response } from "express";


//METODOS ACCESO REST API TABLA DE ESTADOS DE ENTRADAS Y COMENTARIOS
export const getEstado = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getEstado"
    })
}

export const getOneEstado = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneEstado"
    })
}

export const deleteEstado = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteEstado",
        id: req.params
    })
}

export const postEstado = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postEstado",
        body: req.body
    })
}

export const updateEstado = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateEstado",
        body: req.body,
        id: req.params
    })
}

