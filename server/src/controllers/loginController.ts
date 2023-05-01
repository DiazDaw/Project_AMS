import { Request, Response } from "express";

import connection from "../db/connection";

var jwt = require('jsonwebtoken');





//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const login = async (req: Request, res: Response) => {

    const { dni } = req.body;
    const { contrasenia } = req.body;

    connection.query('SELECT * FROM fallero WHERE dni = ? and contrasenia = ?',[dni, contrasenia], (err,data) => {
        if(err) throw err;

        if (data.length === 0) {
            // Usuario no encontrado
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }

        const  token  = jwt.sign( dni , "my_secret_token");

        console.log(dni);
        console.log(contrasenia);
        
        const response = {
            data: data,
            token: token
        };
        
        res.status(200).json({ token, usuario: data[0] });
    })
}

