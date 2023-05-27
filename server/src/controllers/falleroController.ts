import { Request, Response } from "express";
import connection from "../db/connection";
import bcrypt from 'bcrypt';

// Métodos de acceso REST API para la tabla de falleros

export const getFallero = (req: Request, res: Response) => {
  connection.query('SELECT * FROM fallero', (err, data) => {
    if (err) throw err;
    res.json(data);
  });
}

export const getOne = (req: Request, res: Response) => {
  const { id } = req.params;
  connection.query('SELECT * FROM fallero WHERE idFallero = ?', id, (err, data) => {
    if (err) throw err;
    res.json(data[0]);
  });
}

export const deleteFallero = (req: Request, res: Response) => {
  const { id } = req.params;
  connection.query('DELETE FROM fallero WHERE idFallero = ?', id, (err, data) => {
    if (err) throw err;
    res.json({
      msg: "Fallero eliminado con éxito."
    });
  });
}

export const postFallero = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    // Generar un hash de la contraseña
    const hashedPassword = await bcrypt.hash(body.contrasenia, 10);

    // Reemplazar la contraseña original con el hash
    body.contrasenia = hashedPassword;

    connection.query('INSERT INTO fallero SET ?', [body], (err, data) => {
      if (err) throw err;
      res.json({
        msg: "Fallero creado con éxito."
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Ocurrió un error al crear el fallero."
    });
  }
};

export const updateFallero = (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  connection.query('UPDATE fallero set ? WHERE idFallero = ?', [body, id], (err, data) => {
    if (err) throw err;
    res.json({
      msg: "Fallero actualizado con éxito."
    });
  });
}
