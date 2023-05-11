import { Request, Response } from "express";

import connection from "../db/connection";

export const getDNIFallero = (req: Request, res: Response) => {
    
    connection.query('SELECT dni FROM fallero', (err,data) => {
        if(err) throw err;
        res.json(data);
    })
}