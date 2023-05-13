import { Request, Response } from "express";

import connection from "../db/connection";

export const updatePassword = (req: Request, res: Response) => {

    const { contrasenia } = req.body;
    const { idFallero } = req.params;

    connection.query('UPDATE fallero SET contrasenia = ? WHERE idFallero = ?', [contrasenia, idFallero], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error al actualizar la contraseña');
        }

        res.json(contrasenia)
        console.log(contrasenia)
      });
}   