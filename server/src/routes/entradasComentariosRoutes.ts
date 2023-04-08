import { Router } from 'express';
import { deleteEntrada, getEntrada, getOneEntrada, postEntrada, updateEntrada, deleteComentario, getAllComentario, getComentarioFromEntrada, getOneComentario, postComentario, updateComentario } from '../controllers/entradasComentariosController';

const router = Router();

// RUTAS CRUD ENTRADAS DE BLOG
router.get('/', getEntrada);
router.get('/:id', getOneEntrada);
router.delete('/:id', deleteEntrada);
router.post('/', postEntrada);
router.put('/:id', updateEntrada);

//RUTAS CRUD COMENTARIOS

router.get('/comentario', getAllComentario); //NO FUNCIONA
router.get('/:id_Entrada/comentario', getComentarioFromEntrada);
router.get('/:id_Entrada/comentario/:idComentario', getOneComentario);
router.delete('/comentario/:id', deleteComentario);
router.post('/comentario', postComentario);
router.put('/comentario/:id', updateComentario);

export default router;