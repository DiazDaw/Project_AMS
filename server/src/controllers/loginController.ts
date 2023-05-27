import { Request, Response } from "express";

import connection from "../db/connection";

import bcrypt from 'bcrypt';

var jwt = require('jsonwebtoken');





//METODOS ACCESO REST API TABLA DE ACTIVIDADES
export const login = async (req: Request, res: Response) => {
    try {
        const { dni, contrasenia } = req.body;

        connection.query('SELECT * FROM fallero WHERE dni = ?', [dni], async (err, data) => {
            if (err) throw err;

            if (data.length === 0) {
                // Usuario no encontrado
                res.status(401).json({ error: 'Credenciales inválidas' });
                return;
            }

            const usuario = data[0];

            // Verificar la contraseña encriptada
            const match = await bcrypt.compare(contrasenia, usuario.contrasenia);

            if (match) {
                // Contraseña válida
                const token = jwt.sign(dni, "my_secret_token");

                res.status(200).json({ token, usuario });
            } else {
                // Contraseña inválida
                res.status(401).json({ error: 'Credenciales inválidas' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error al iniciar sesión' });
    }
};


