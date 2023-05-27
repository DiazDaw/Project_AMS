import { Request, Response } from "express";
import * as bcrypt from "bcrypt";

import connection from "../db/connection";

export const updatePassword = (req: Request, res: Response) => {
  const { contrasenia } = req.body;
  const { idFallero } = req.params;

  // Encriptar la nueva contraseña
  const hashedPassword = bcrypt.hashSync(contrasenia, bcrypt.genSaltSync(10));

  connection.query(
    'UPDATE fallero SET contrasenia = ? WHERE idFallero = ?',
    [hashedPassword, idFallero],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al actualizar la contraseña');
      }

      res.json(contrasenia);
      console.log(contrasenia);
    }
  );
};
