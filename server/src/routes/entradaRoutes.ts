import {Router} from 'express';
import { deleteEntrada, getEntrada, getOneEntrada, postEntrada, updateEntrada } from '../controllers/entradaController';
import { deleteComentario, getComentario, getOneComentario, postComentario, updateComentario } from '../controllers/comentarioController';
const router = Router();

// RUTAS CRUD ENTRADAS DE BLOG
router.get('/', getEntrada);
router.get('/:id', getOneEntrada);
router.delete('/:id', deleteEntrada);
router.post('/', postEntrada);
router.put('/:id', updateEntrada);

//RUTAS CRUD COMENTARIOS

router.get('/:id/comentario/', getComentario);
router.get('/:id/comentario/:id', getOneComentario);
router.delete('/:id/comentario/:id', deleteComentario);
router.post('/:id/comentario/', postComentario);
router.put('/:id/comentario/:id', updateComentario);

export default router;