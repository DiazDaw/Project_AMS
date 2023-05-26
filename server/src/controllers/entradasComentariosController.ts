import { Request, Response } from "express";

import connection from "../db/connection";



//METODOS ACCESO REST API TABLA DE ENTRADAS
export const getEntrada = (req: Request, res: Response) => {
    const query = `
      SELECT entrada.*, fallero.nombre AS nombre_autor, fallero.apellidos AS apellidos_autor, estado.nombre AS nombre_estado
      FROM entrada
      INNER JOIN fallero ON entrada.autor = fallero.idFallero
      INNER JOIN estado ON entrada.id_Estado = estado.idEstado
    `;
    connection.query(query, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};


export const getOneEntrada = (req: Request, res: Response) => {
    const { id } = req.params;

    connection.query(
        'SELECT entrada.*, fallero.nombre AS nombre_autor, fallero.apellidos AS apellidos_autor, estado.nombre AS nombre_estado FROM entrada INNER JOIN fallero ON entrada.autor = fallero.idFallero INNER JOIN estado ON entrada.id_Estado = estado.idEstado WHERE idBlog = ?',
        id,
        (err, data) => {
            if (err) throw err;
            res.json(data[0]);
        }
    );
};



export const getByUser = (req: Request, res: Response) => {

    const { id } = req.params;

    connection.query('SELECT * FROM entrada WHERE autor = ?', id, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}

export const deleteEntrada = (req: Request, res: Response) => {

    const { id } = req.params;

    connection.query('DELETE FROM entrada WHERE idBlog = ?', id, (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Entrada eliminada con éxito."
        });
    })
}

export const postEntrada = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO entrada set ?', [body], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Entrada creada con éxito."
        });
    })
}

export const updateEntrada = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE entrada set ? WHERE idBlog = ?', [body, id], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Entrada actualizada con éxito."
        });
    })
}


export const updateEstadoEntrada = (req: Request, res: Response) => {
    const { id } = req.params;
    const { id_Estado } = req.body; // Obtener el nuevo valor de id_Estado directamente

    const updatedEstado = { id_Estado }; // Crear un objeto con el campo id_Estado actualizado

    connection.query('UPDATE entrada SET ? WHERE idBlog = ?', [updatedEstado, id], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Entrada actualizada con éxito."
        });
    });
}




//METODOS ACCESO REST API PARA LA TABLA DE COMENTARIO

export const getAllComentario = (req: Request, res: Response) => {

    connection.query('SELECT * FROM comentario', (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}


export const getComentarioFromEntrada = (req: Request, res: Response) => {
    const { id_Entrada } = req.params;
    connection.query(
        `SELECT c.*,f.apellidos as apellidos_autor, f.nombre as nombre_autor, e.nombre as nombre_estado 
       FROM comentario c
       INNER JOIN fallero f ON c.autor = f.idFallero
       INNER JOIN estado e ON c.id_Estado = e.idEstado
       WHERE c.id_Entrada = ?`,
        id_Entrada,
        (err, data) => {
            if (err) throw err;
            res.json(data);
        }
    );
};


export const getOneComentario = (req: Request, res: Response) => {

    const { id_Entrada } = req.params;
    const { idComentario } = req.params;

    connection.query('SELECT * FROM comentario WHERE id_Entrada = ? and idComentario = ?', [id_Entrada, idComentario], (err, data) => {
        if (err) throw err;
        res.json(data[0]);
    })
}

export const deleteComentario = (req: Request, res: Response) => {

    const { id } = req.params;

    connection.query('DELETE FROM comentario WHERE idComentario = ?', id, (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Comentario eliminado con éxito."
        });
    })
}

export const postComentario = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('INSERT INTO comentario set ?', [body], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Comentario creado con éxito."
        });
    })
}

export const updateComentario = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE comentario set ? WHERE idComentario = ?', [body, id], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "Comentario actualizado con éxito."
        });
    })
}