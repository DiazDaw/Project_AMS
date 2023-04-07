import { Router } from 'express';
import { deleteEntrada, getEntrada, getOneEntrada, postEntrada, updateEntrada, deleteComentario, getComentario, getOneComentario, postComentario, updateComentario } from '../controllers/entradasComentariosController';
const router = Router();

// RUTAS CRUD ENTRADAS DE BLOG
router.get('/', getEntrada);
router.get('/:id', getOneEntrada);
router.delete('/:id', deleteEntrada);
router.post('/', postEntrada);
router.put('/:id', updateEntrada);

//RUTAS CRUD COMENTARIOS

router.get('/comentario/', getComentario);
router.get(':idEntrada/comentario/:id', getOneComentario);
router.delete('/comentario/:id', deleteComentario);
router.post('/comentario/', postComentario);
router.put('/comentario/:id', updateComentario);

export default router;