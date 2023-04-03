import {Router} from 'express';
import { deleteComentario, getComentario, getOneComentario, postComentario, updateComentario } from '../controllers/comentarioController';


const router = Router();

// RUTAS CRUD COMENTARIOS
router.get('/', getComentario);
router.get('/:id', getOneComentario);
router.delete('/:id', deleteComentario);
router.post('/', postComentario);
router.put('/:id', updateComentario);

export default router;