import {Router} from 'express';
import { deleteEstado, getEstado, getOneEstado, postEstado, updateEstado } from '../controllers/estadoController';

const router = Router();

// RUTAS CRUD ESTADOS DE ENTRADAS DE BLOG Y COMENTARIOS
router.get('/', getEstado);
router.get('/:id', getOneEstado);
router.delete('/:id', deleteEstado);
router.post('/', postEstado);
router.put('/:id', updateEstado);

export default router;