import { Request, Response } from "express";

//METODOS ACCESO REST API TABLA DE PROVEEDORES
export const getProveedor = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getProveedor"
    })
}

export const getOneProveedor = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo getOneProveedor"
    })
}

export const deleteProveedor = (req: Request, res: Response) => {
    res.json({
        msg: "Metodo deleteProveedor",
        id: req.params
    })
}

export const postProveedor = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: "Metodo postProveedor",
        body: req.body
    })
}

export const updateProveedor = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);

    res.json({
        msg: "Metodo updateProveedor",
        body: req.body,
        id: req.params
    })
}

